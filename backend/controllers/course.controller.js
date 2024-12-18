import {response} from 'express';
import {Course} from '../models/course.model';
import {Lesson} from '../models/lesson.model';
import {User} from '../models/user.model';
import {deleteVideoFromCloudinary} from '../utils/cloudinary';

export const createCourse = async (request, response) => {
  try {
    const {courseTitle, courseDescription, courseCategory} = request.body;
    const instructorId = request.params.instructorId;

    if (
      !courseTitle ||
      !courseDescription ||
      !courseCategory ||
      !instructorId
    ) {
      const message = !courseTitle
        ? 'Course title is required'
        : !courseDescription
        ? 'Course description is required'
        : !courseCategory
        ? 'Course Category is Required'
        : 'Instructor not found';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const course = await Course.create({
      instructorId,
      courseTitle,
      courseDescription,
      courseCategory,
    });

    return response.status(200).json({
      message: 'The Course has been created!',
      data: course,
      success: true,
    });
  } catch (error) {
    console.log('Error in creating the course:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const getCoursesOfInstructor = async (request, response) => {
  try {
    const instructorId = request.id;
    if (!instructorId) {
      return response.status(400).json({
        message: 'User unauthorized!',
        success: false,
      });
    }

    const courses = await Course.find({instructorId});
    if (!courses) {
      response.status(404).json({
        message: 'No courses found!',
        success: false,
      });
    }

    return response.status(200).json({
      message: 'Courses found',
      data: courses,
      success: true,
    });
  } catch (error) {
    console.log('Error in getting the courses:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const getAllCourses = (request, response) => {
  try {
    const allCourses = Course.find().sort({createdAt: -1});

    return response.status(200).json({
      message: 'Courses found',
      data: allCourses,
      success: true,
    });
  } catch (error) {
    console.error('Error in deleting user:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const updateCourse = async (request, response) => {
  try {
    const courseId = request.params.courseId;
    const {
      courseTitle,
      courseDescription,
      courseCategory,
      coursePrice,
      status,
    } = request.body;
    const thumbnail = request.file;

    const course = Course.findById(courseId);
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

    if (course.thumbnailUrl) {
      // extract publicId of the image on cloudinary
      const publicId = course.thumbnailUrl.split('/').pop()?.split('.')[0];
      deleteMediaFromCloudinary(publicId);
    }

    const cloudResponse = await uploadMedia(thumbnail?.path);
    const thumbnailUrl = cloudResponse.secure_url;

    const updatedData = {
      courseTitle,
      courseDescription,
      courseCategory,
      coursePrice,
      status,
      thumbnailUrl: thumbnailUrl,
    };
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      updatedData,
      {
        new: true,
      },
    );

    return response.status(200).json({
      message: 'Your course has been updated',
      data: updatedCourse,
      success: true,
    });
  } catch {
    console.error('Error in updating course:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const deleteCourse = async (request, response) => {
  try {
    const courseId = request.params.id;
    if (!courseId) {
      return response.status(400).json({
        message: 'Course id not found in the request',
        success: false,
      });
    }

    await Course.findByIdAndDelete(courseId);

    return response.status(200).json({
      message: 'Your Course has been deleted!',
      success: true,
    });
  } catch {
    console.error('Error in deleting course:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const createLesson = async (request, response) => {
  try {
    const instructorId = request.id;
    const courseId = request.params.id;
    const {lessonTitle, lessondescription, videoUrl, resourses} = request.body;

    if (!instructorId || !courseId) {
      message: !instructorId
        ? 'Unauthorized to create lesson!'
        : 'Course Id is required in the request!';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const newLesson = await Lesson.create({
      lessonTitle,
      lessondescription,
      videoUrl,
      resourses,
    });

    const course = await Course.findById(courseId);
    if (course) {
      course.lessons.push(lessonTitle._id);
      await course.save();
    }

    return response.status(200).json({
      message: 'New lesson created',
      data: newLesson,
      success: true,
    });
  } catch (error) {
    console.error('Error in creating lesson:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

const validateInstructorCourseLesson = async (
  instructorId,
  courseId,
  lessonId,
) => {
  if (!instructorId || !courseId || !lessonId) {
    const message = !instructorId
      ? 'Unauthorized to update lesson!'
      : !courseId
      ? 'Course Id is required in the request!'
      : 'Lesson Id is required in the request';

    return response.status(400).json({
      message,
      success: false,
    });
  }

  const instructor = await User.findById(instructorId);
  if (!instructor) {
    return response.status(404).json({
      message: 'User not found!',
      success: false,
    });
  }

  const course = await Course.findById(courseId);
  if (!course) {
    return response.status(404).json({
      message: 'Course not found!',
      success: false,
    });
  }

  return true;
};

export const getLessonsByCourse = async (request, response) => {
  try {
    const instructorId = request.id;
    const {courseId} = request.params;

    const isValid = await validateInstructorCourseLesson(
      instructorId,
      courseId,
    );
    if (!isValid) return;

    // if error, try find({courseId})
    const lessons = await Lesson.find(courseId);

    return response.status(200).json({
      message: 'Lessons found!',
      data: lessons,
      success: true,
    });
  } catch (error) {
    // handle error
    console.log('Error in getting the lessons:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const updateLesson = async (request, response) => {
  try {
    const instructorId = request.id;
    const {courseId, lessonId} = request.params;
    const {lessonTitle, lessonDescription, resources} = request.body;
    const video = request.file;

    const isValid = await validateInstructorCourseLesson(
      instructorId,
      courseId,
      lessonId,
    );
    if (!isValid) return;

    const lesson = await Lesson.findOne({$and: [{courseId}, {_id: lessonId}]});
    if (!lesson) {
      return response.status(404).json({
        message: 'Lesson not found!',
        success: false,
      });
    }

    if (lesson.videoUrl) {
      // extract publicId of the image on cloudinary
      const publicId = lesson.videoUrl.split('/').pop()?.split('.')[0];
      await deleteVideoFromCloudinary(publicId);
    }
    if (video) {
      const cloudResponse = await uploadMedia(video?.path);
      videoUrl = cloudResponse.secure_url;
    }
    const updatedData = {
      ...(lessonTitle && {lessonTitle}),
      ...(lessonDescription && {lessonDescription}),
      ...(resources && {resources}),
      ...(videoUrl && {videoUrl}),
    };

    const updatedLesson = await Lesson.findByIdAndUpdate(
      lessonId,
      updatedData,
      {
        new: true,
      },
    );

    // send success message, updated lesson data and a boolean value to work with
    return response.status(200).json({
      message: 'Lesson has been updated',
      data: updatedLesson,
      success: true,
    });
  } catch (error) {
    // handle error
    console.log('Error in updating the lesson:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const deleteLesson = async (request, response) => {
  try {
    // Extract user id from request params
    const instructorId = request.id;
    const {courseId, lessonId} = request.params;

    if (!instructorId || !courseId || !lessonId) {
      const message = !instructorId
        ? 'Unauthorized to update lesson!'
        : !courseId
        ? 'Course Id is required in the request!'
        : 'Lesson Id is required in the request';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const isValid = await validateInstructorCourseLesson(
      instructorId,
      courseId,
      lessonId,
    );
    if (!isValid) return;

    const lesson = await Lesson.findOne({$and: [{courseId}, {_id: lessonId}]});
    if (!lesson) {
      return response.status(404).json({
        message: 'Lesson not found!',
        success: false,
      });
    }

    // Query to delete user
    await Lesson.findOneAndDelete({$and: [{courseId}, {_id: lessonId}]});

    // respond with success message and boolean value to work with
    return response.status(200).json({
      message: `Lesson with the ID ${lessonId} has been deleted!`,
      success: true,
    });
  } catch (error) {
    // handle error
    console.error('Error in deleting lesson:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

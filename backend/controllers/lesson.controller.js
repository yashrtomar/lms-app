import {Course} from '../models/course.model';
import {Lesson} from '../models/lesson.model';
import {validateInstructorCourseLesson} from '../utils/validateRequestData';
import {deleteVideoFromCloudinary} from '../utils/cloudinary';
import {User} from '../models/user.model';

export const createLesson = async (request, response) => {
  try {
    const userId = request.id;
    const courseId = request.params.id;
    const {lessonTitle, lessondescription, videoUrl, resourses} = request.body;

    if (!userId || !courseId) {
      const message = !userId
        ? 'User Unauthorized!'
        : 'Course Id is required in the request!';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const user = User.findById(userId);
    if (!user) {
      return response.status(400).json({
        message: 'User not found!',
        success: false,
      });
    }

    if (user.role !== 'instructor') {
      return response.status(400).json({
        message:
          'FORBIDDEN: You are not acuthorized to create a course, only an Instructor is authorized to do so!',
        success: false,
      });
    }

    const course = Course.findOne({userId, _id: courseId});
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

    const newLesson = await Lesson.create({
      lessonTitle,
      lessondescription,
      videoUrl,
      resourses,
    });

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

export const getLessonsByCourse = async (request, response) => {
  try {
    const userId = request.id;
    const {courseId} = request.params;

    if (!userId || !courseId) {
      const message = !userId
        ? 'User Unauthorized!'
        : 'Course Id is required in the request!';

      return response.status(400).json({
        message,
        success: false,
      });
    }

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
    const userId = request.id;
    const {courseId, lessonId} = request.params;
    const {lessonTitle, lessonDescription, resources} = request.body;
    const video = request.file;

    if (!userId || !courseId || !lessonId) {
      const message = !userId
        ? 'User Unauthorized!'
        : !courseId
        ? 'Course Id is required in the request!'
        : 'Lesson Id is required in the request!';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const user = User.findById(userId);
    if (!user) {
      return response.status(400).json({
        message: 'User not found!',
        success: false,
      });
    }

    if (user.role !== 'instructor') {
      return response.status(400).json({
        message:
          'FORBIDDEN: You are not acuthorized to create a course, only an Instructor is authorized to do so!',
        success: false,
      });
    }

    const course = Course.findOne({userId, _id: courseId});
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

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
    const userId = request.id;
    const {courseId, lessonId} = request.params;

    if (!userId || !courseId || !lessonId) {
      const message = !userId
        ? 'Unauthorized to update lesson!'
        : !courseId
        ? 'Course Id is required in the request!'
        : 'Lesson Id is required in the request';

      return response.status(400).json({
        message,
        success: false,
      });
    }

    const user = User.findById(userId);
    if (!user) {
      return response.status(400).json({
        message: 'User not found!',
        success: false,
      });
    }

    if (user.role !== 'instructor') {
      return response.status(400).json({
        message:
          'FORBIDDEN: You are not acuthorized to create a course, only an Instructor is authorized to do so!',
        success: false,
      });
    }

    const course = Course.findOne({userId, _id: courseId});
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

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

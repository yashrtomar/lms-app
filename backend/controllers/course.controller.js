import {Course} from '../models/course.model';
import {User} from '../models/user.model';

export const createCourse = async (request, response) => {
  try {
    const {courseCategory, courseTitle, courseDescription} = request.body;
    const userId = request.id;

    if (!userId) {
      return response.status(400).json({
        message: 'User unauthorized!',
        success: false,
      });
    }

    if (!courseTitle || !courseDescription || !courseCategory || !userId) {
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

    const user = await User.findOne(userId);
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

    const course = await Course.create({
      userId,
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
    const userId = request.id;

    if (!userId) {
      return response.status(400).json({
        message: 'User unauthorized!',
        success: false,
      });
    }

    const courses = await Course.find({userId});
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

    if (!allCourses) {
      response.status(404).json({
        message: 'No courses found!',
        success: false,
      });
    }

    return response.status(200).json({
      message: 'Courses found',
      data: allCourses,
      success: true,
    });
  } catch (error) {
    console.error('Error in getting courses:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const updateCourse = async (request, response) => {
  try {
    const userId = request.id;
    const courseId = request.params.courseId;
    const {
      courseTitle,
      courseDescription,
      courseCategory,
      coursePrice,
      status,
    } = request.body;
    const thumbnail = request.file;

    if (!userId || !courseId) {
      const message = !userId
        ? 'User unauthorized!'
        : 'Course Id is requuired in the request!';
      return response.status(400).json({
        message,
        success: false,
      });
    }

    const user = await User.findById(userId);
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
  } catch (error) {
    console.error('Error in updating course:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const deleteCourse = async (request, response) => {
  try {
    const userId = request.id;
    const courseId = request.params.id;

    if (!userId || !courseId) {
      const message = !userId
        ? 'User unauthorized!'
        : 'Course Id is requuired in the request!';
      return response.status(400).json({
        message,
        success: false,
      });
    }

    const user = await User.findById(userId);
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

    if (!courseId) {
      return response.status(400).json({
        message: 'Course id not found in the request',
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

    await Course.findOneAndDelete({userId, _id: courseId});

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

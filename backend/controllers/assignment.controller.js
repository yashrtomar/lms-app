import {Assignment} from '../models/assignment';
import {Course} from '../models/course';

// Create a new assignment for a course (independent of lesson)
export const createAssignment = async (request, response) => {
  try {
    const {courseId, questions} = request.body;
    const user = request.user; // Access the validated user from the request

    // Only instructors should be able to create assignments
    if (user.role !== 'instructor') {
      return response.status(403).json({
        message: 'Only instructors can create assignments!',
        success: false,
      });
    }

    // Validate course existence
    const course = await Course.findById(courseId);
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

    // Check if an assignment already exists for the course
    const existingAssignment = await Assignment.findOne({courseId});
    if (existingAssignment) {
      return response.status(400).json({
        message: 'An assignment already exists for this course!',
        success: false,
      });
    }

    // Create assignment
    const assignment = new Assignment({
      courseId,
      questions,
      submitted: false,
    });

    await assignment.save();

    return response.status(201).json({
      message: 'Assignment created successfully!',
      data: assignment,
      success: true,
    });
  } catch (error) {
    console.error('Error creating assignment:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

// Get all assignments for a specific course (only one assignment per course)
export const getAssignmentsByCourse = async (request, response) => {
  try {
    const {courseId} = request.params;

    // Validate course existence
    const course = await Course.findById(courseId);
    if (!course) {
      return response.status(404).json({
        message: 'Course not found!',
        success: false,
      });
    }

    // Find assignment for the course
    const assignment = await Assignment.findOne({courseId});
    if (!assignment) {
      return response.status(404).json({
        message: 'No assignment found for this course!',
        success: false,
      });
    }

    return response.status(200).json({
      message: 'Assignment retrieved successfully!',
      data: assignment,
      success: true,
    });
  } catch (error) {
    console.error('Error retrieving assignment:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

// Get a specific assignment by ID
export const getAssignmentById = async (request, response) => {
  try {
    const {assignmentId} = request.params;

    // Validate assignment existence
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return response.status(404).json({
        message: 'Assignment not found!',
        success: false,
      });
    }

    return response.status(200).json({
      message: 'Assignment retrieved successfully!',
      data: assignment,
      success: true,
    });
  } catch (error) {
    console.error('Error retrieving assignment:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

// Update assignment score and submission status (only updates the single assignment for the course)
export const updateAssignment = async (request, response) => {
  try {
    const {assignmentId} = request.params;
    const {score, submitted} = request.body;
    const user = request.user; // Access the validated user from the request

    // Only instructors should be able to update assignments
    if (user.role !== 'instructor') {
      return response.status(403).json({
        message: 'Only instructors can update assignments!',
        success: false,
      });
    }

    // Validate assignment existence
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return response.status(404).json({
        message: 'Assignment not found!',
        success: false,
      });
    }

    // Update assignment score and submission status
    assignment.score = score;
    assignment.submitted = submitted;

    await assignment.save();

    return response.status(200).json({
      message: 'Assignment updated successfully!',
      data: assignment,
      success: true,
    });
  } catch (error) {
    console.error('Error updating assignment:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

// Delete an assignment (only one assignment per course)
export const deleteAssignment = async (request, response) => {
  try {
    const {assignmentId} = request.params;
    const user = request.user; // Access the validated user from the request

    // Only instructors should be able to delete assignments
    if (user.role !== 'instructor') {
      return response.status(403).json({
        message: 'Only instructors can delete assignments!',
        success: false,
      });
    }

    // Validate assignment existence
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return response.status(404).json({
        message: 'Assignment not found!',
        success: false,
      });
    }

    // Delete the assignment
    await assignment.remove();

    return response.status(200).json({
      message: 'Assignment deleted successfully!',
      success: true,
    });
  } catch (error) {
    console.error('Error deleting assignment:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

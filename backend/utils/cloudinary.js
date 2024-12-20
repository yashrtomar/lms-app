import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadMedia = async (file) => {
	try {
		const uploadResponse = await cloudinary.uploader.upload(file, {
			resource_type: 'auto'
		});
		return uploadResponse; // Return the upload response
	} catch (error) {
		console.error('Error in uploading media:\n', error);
		throw new Error('Failed to upload media');
	}
};

export const deleteMediaFromCloudinary = async (publicId) => {
	try {
		await cloudinary.uploader.destroy(publicId);
	} catch (error) {
		console.log('Error in deleting media: \n', error);
	}
};

export const deleteVideoFromCloudinary = async (publicId) => {
	try {
		await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
	} catch (error) {
		console.log('Error in deleting video:\n', error);
	}
};

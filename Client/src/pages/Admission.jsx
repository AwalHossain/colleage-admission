import { TrashIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getFromLocalStorage, setToLocalStorage } from '../lib/local-storage';
import { submitAdmission } from '../services/admissionService';
import useAuth from '../zustand/authStore';
import CollegeAutoSuggestion from './CollegeAutoSuggestion';
import SubjectAutoSuggestion from './SubjectAutoSuggestion';

const INITIAL_FORM_STATE = {
  collegeName: '',
  _id: '',
  name: '',
  subject: '',
  email: '',
  phone: '',
  address: '',
  dob: '',
  image: null,
};

const Admission = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [imageUrl, setImageUrl] = useState('');
  const [isImageUploading, setIsImageUploading] = useState(false);
  
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const admissionMutation = useMutation(submitAdmission, {
    onSuccess: () => {
      toast.success('Your college admission application was submitted successfully');
      setFormData(INITIAL_FORM_STATE);
      navigate('/my-college');
    },
    onError: (error) => {
      console.error('Admission submission error:', error);
      if (error?.status === 401) {
        toast.error("You're not authorized! Please login to continue");
      } else if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unknown error occurred');
      }
    },
  });

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/sign-in');
    }

    const savedImage = getFromLocalStorage('image');
    if (savedImage) {
      setImageUrl(savedImage);
      setFormData(prevState => ({ ...prevState, image: savedImage }));
    }
  }, [isSignedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.set('key', 'f4c465c3ffeda9a61a1dc3b8c28f0047');
    formData.append('image', file);

    setIsImageUploading(true);
    try {
      const response = await axios.post('https://api.imgbb.com/1/upload', formData);
      if (response.data.success) {
        const imageUrl = response.data.data.display_url;
        setImageUrl(imageUrl);
        setFormData(prevState => ({ ...prevState, image: imageUrl }));
        setToLocalStorage('image', imageUrl);
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      toast.error('Error uploading image. Please try again.');
    } finally {
      setIsImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error('Please upload an image');
      return;
    }
    admissionMutation.mutate(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
          Admission Application
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Form fields */}
            <FormField
              label="College Name"
              name="collegeName"
              component={<CollegeAutoSuggestion setFormData={setFormData} formData={formData} />}
            />
            <FormField
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormField
              label="Subject"
              name="subject"
              component={<SubjectAutoSuggestion setFormData={setFormData} formData={formData} />}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <FormField
              label="Address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <FormField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <ImageUploadField
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              isUploading={isImageUploading}
              onImageChange={(e) => handleImageUpload(e.target.files[0])}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={admissionMutation.isLoading || isImageUploading}
            >
              {admissionMutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {admissionMutation.isSuccess && (
              <p className="mt-2 text-sm text-green-500">
                Application submitted successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const FormField = ({ label, name, type, value, onChange, required, component }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {component || (
      <input
        type={type}
        name={name}
        id={name}
        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </div>
);

const ImageUploadField = ({ imageUrl, setImageUrl, isUploading, onImageChange }) => (
  <div>
    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
      Your Profile Photo
    </label>
    {imageUrl && (
      <div className="relative mt-1 w-32 h-30">
        <img src={imageUrl} alt="preview" className="object-cover" />
        <span className="absolute top-0 right-0 text-red-600">
          <TrashIcon
            className="h-5 w-5 cursor-pointer"
            onClick={() => setImageUrl('')}
          />
        </span>
      </div>
    )}
    {isUploading && <p className="mt-1 text-sm text-gray-500">Uploading...</p>}
    {!isUploading && !imageUrl && (
      <input
        type="file"
        name="image"
        id="image"
        className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        onChange={onImageChange}
        accept="image/*"
      />
    )}
  </div>
);

export default Admission;
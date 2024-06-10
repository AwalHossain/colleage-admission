import { TrashIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { submitAdmission } from '../services/admissionService'
import CollegeAutoSuggestion from './CollegeAutoSuggestion'
import SubjectAutoSuggestion from './SubjectAutoSuggestion'


const Admission = () => {
  const [imageUrl, setImageUrl] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    name: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: null,
  })

  const { mutate, isLoading:MutateLoading, isSuccess } = useMutation(submitAdmission)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {

    const file = e.target.files[0];
    let body = new FormData();
    body.set("key", "f4c465c3ffeda9a61a1dc3b8c28f0047");
    body.append("image", file);
    let url = "https://api.imgbb.com/1/upload";
    setLoading(true);
    axios
      .post(url, body)
      .then((response) => {
        if (response.data.success) {
          setLoading(false);
          setImageUrl(response.data.data.display_url);
          setFormData({ ...formData, image: response.data.data.display_url });
        } else {
          setLoading(false);
          console.error("Error:", response.data.status);
          setImageUrl("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setImageUrl("");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(formData)
  }






  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
          Admission Application
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
                College Name
              </label>
              <CollegeAutoSuggestion setFormData={setFormData} formData={formData} />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 p-2 border-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <SubjectAutoSuggestion setFormData={setFormData} formData={formData} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Your Profile Photo
              </label>

              {
                imageUrl && (
                  <div className="relative mt-1 w-32 h-30">
                    <img src={imageUrl} alt="preview" className=" object-cover" />
                    <span className='absolute top-0 right-0 text-red-600'>
                      <TrashIcon className='h-5 w-5 cursor-pointer' onClick={() => setImageUrl('')} />
                    </span>
                  </div>
                )
              }

              {
                isLoading && (
                  <p className="mt-1 text-sm text-gray-500">Uploading...</p>
                ) 
              }

              <input
                type="file"
                name="image"
                id="image"
                className={`mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isLoading || imageUrl ? 'hidden' : ''} `}
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading || MutateLoading}
            >
              {isLoading || MutateLoading ? 'Submitting...' : 'Submit'}
            </button>
            {isSuccess && (
              <p className="mt-2 text-sm text-green-500">
                Application submitted successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admission

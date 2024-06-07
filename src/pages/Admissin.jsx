import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import { useMutation } from 'react-query'
import { submitAdmission } from '../services/admissionService'

const collegeNames = ['Harvard University', 'Stanford University', 'MIT', 'University of Cambridge', 'University of Oxford']

const Admission = () => {
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

  const { mutate, isLoading, isSuccess } = useMutation(submitAdmission)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(formData)
  }

  const [y, setY] = useState(false);
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : collegeNames.filter(
      college => college.toLowerCase().includes(inputValue)
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(collegeNames);
  };

  const [suggestions, setSuggestions] = useState(collegeNames);
  const [collegeInput, setCollegeInput] = useState('');

  const onCollegeChange = (event, { newValue }) => {
    setCollegeInput(newValue);
    setFormData({ ...formData, collegeName: newValue });
  };

  const renderSuggestion = (suggestion) => (
    <div className="p-2 border border-gray-200 mb-0.3 bg-gray-50 rounded cursor-pointer">
      {suggestion}
    </div>
  );


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
              <Autosuggest
        inputProps={{
            name: 'collegeName',
          value: collegeInput,
          onChange: onCollegeChange,
          onFocus: () => {
            console.log('focused');
            setY(true);
          },
          onBlur: () => {
            setY(false);
          },
          className: 'mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={()=> setY(false)}
        alwaysRenderSuggestions={y}
      />
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
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.subject}
                onChange={handleChange}
                required
              />
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
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="mt-1 border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
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

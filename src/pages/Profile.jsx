import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchProfile, updateProfile } from '../services/ProfileService'

const Profile = () => {
 const queryClient = useQueryClient()
 const { data: profile, isLoading } = useQuery('profile', fetchProfile)
 const { mutate: updateProfileMutation } = useMutation(updateProfile, {
   onSuccess: () => {
     queryClient.invalidateQueries('profile')
   },
 })

 const [editMode, setEditMode] = useState(false)
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   university: '',
   address: '',
 })

 const handleEditClick = () => {
   setEditMode(true)
   setFormData({
     name: profile.name,
     email: profile.email,
     university: profile.university,
     address: profile.address,
   })
 }

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value })
 }

 const handleSaveClick = () => {
   updateProfileMutation(formData)
   setEditMode(false)
 }

 const handleCancelClick = () => {
   setEditMode(false)
   setFormData({
     name: profile.name,
     email: profile.email,
     university: profile.university,
     address: profile.address,
   })
 }

 return (
   <div className="bg-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="py-12">
         {isLoading ? (
           <p>Loading...</p>
         ) : (
           <div>
             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Profile
             </h2>
             <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
               <div className="px-4 py-5 sm:p-6">
                 <div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label
                         htmlFor="name"
                         className="block text-sm font-medium text-gray-700"
                       >
                         Name
                       </label>
                       {editMode ? (
                         <input
                           type="text"
                           name="name"
                           id="name"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           value={formData.name}
                           onChange={handleChange}
                         />
                       ) : (
                         <p className="mt-1 text-sm text-gray-500">{profile.name}</p>
                       )}
                     </div>
                     <div>
                       <label
                         htmlFor="email"
                         className="block text-sm font-medium text-gray-700"
                       >
                         Email
                       </label>
                       {editMode ? (
                         <input
                           type="email"
                           name="email"
                           id="email"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           value={formData.email}
                           onChange={handleChange}
                         />
                       ) : (
                         <p className="mt-1 text-sm text-gray-500">{profile.email}</p>
                       )}
                     </div>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                     <div>
                       <label
                         htmlFor="university"
                         className="block text-sm font-medium text-gray-700"
                       >
                         University
                       </label>
                       {editMode ? (
                         <input
                           type="text"
                           name="university"
                           id="university"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           value={formData.university}
                           onChange={handleChange}
                         />
                       ) : (
                         <p className="mt-1 text-sm text-gray-500">{profile.university}</p>
                       )}
                     </div>
                     <div>
                       <label
                         htmlFor="address"
                         className="block text-sm font-medium text-gray-700"
                       >
                         Address
                       </label>
                       {editMode ? (
                         <input
                           type="text"
                           name="address"
                           id="address"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           value={formData.address}
                           onChange={handleChange}
                         />
                       ) : (
                         <p className="mt-1 text-sm text-gray-500">{profile.address}</p>
                       )}
                     </div>
                   </div>
                 </div>
                 <div className="mt-4">
                   {editMode ? (
                     <div>
                       <button
                         type="button"
                         onClick={handleSaveClick}
                         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                       >
                         Save
                       </button>
                       <button
                         type="button"
                         onClick={handleCancelClick}
                         className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                       >
                         Cancel
                       </button>
                     </div>
                   ) : (
                     <button
                       type="button"
                       onClick={handleEditClick}
                       className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                       Edit
                     </button>
                   )}
                 </div>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 )
}

export default Profile;
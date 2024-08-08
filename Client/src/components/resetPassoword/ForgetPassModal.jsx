import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { senResetLink } from '../../services/authService';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function ForgetPassModal() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [modalLoading, setModalLoading] = useState(false); // New state variable for modal loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setModalLoading(true); // Set modal loading state
      const res = await senResetLink(email);
      console.log(res, 'res from login');
      if (res.data.statusCode === 200) {
        setModalLoading(false); // Reset modal loading state
        toast.success(res.data.message);
        console.log('User:', res.data.data);
      }
    } catch (error) {
      setModalLoading(false); // Reset modal loading state
      console.error(error, "error from auth service");
      if (!error.response.data.success) {
        toast.error("Error: " + error.response.data.message);
      }
    } finally {
      setModalLoading(false); // Reset modal loading state
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogDescription>
          Please enter your email address below. We'll send you a link to reset
          your password.
        </DialogDescription>
      </DialogHeader>
      <form className="mt-4 flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {modalLoading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <button
            type='submit'
            className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Reset Link
          </button>
        )}
      </form>
    </DialogContent>
  );
}
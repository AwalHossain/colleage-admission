import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id, token } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (password !== confirmPassword) {
        setIsError(true);
        setLoading(false);
        return;
      }
      // Add your password reset logic here
      // E.g., sending the new password to your backend server
      const res = await resetPassword(password, id, token);
      console.log(res, "res from login");
      if (res.data.statusCode === 200) {
          setIsReset(true);
        setLoading(false); // Reset modal loading state
        toast.success(res.data.message);
        console.log("User:", res.data.data);
        window.location.href = "/sign-in";
      }
    setIsError(false);
      setLoading(false);
      } catch (error) {
        console.log(error, "error from auth service");
      setLoading(false);
      if (!error.response.data.success) {
        toast.error("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
         {
              loading ? 
              <button disabled className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                 Loading...
              </button> :
              <button
                 type="submit"
                 className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                 Reset Password
              </button>
         }
        </form>
        {isReset && (
          <p className="text-green-600 mt-2">Password reset successfully!</p>
        )}
        {isError && (
          <p className="text-red-600 mt-2">
            Passwords do not match. Try again.
          </p>
        )}
      </div>
    </div>
  );
}

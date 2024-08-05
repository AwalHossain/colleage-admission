/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ForgetPassModal from "../components/resetPassoword/ForgetPassModal";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { setToLocalStorage } from "../lib/local-storage";
import { fetchLogin } from "../services/authService";
import useAuth from "../zustand/authStore";
import SocialMediaLogin from "./SocialMediaLogin";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {setUser} = useAuth(state => state);
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    const res = await fetchLogin(email, password);
    console.log(res,'res from login');

    if(res.data.statusCode === 200){
      setLoading(false);
      toast.success(res.data.message);
      setToLocalStorage('token', res.data.data.accessToken);
      setUser(res.data.data);
      navigate('/');
      console.log('User:', res.data.data);
    } 

    console.log(res.data, "just err checking");
  } catch (error) {
    setLoading(false);
    console.error(error.response.status, "error from auth service");
    if(!error.response.data.success){
      toast.error("Error: "+error.response.data.message);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4 ">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-3xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-3xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline  ">
                Don't have  accoung? Sign up
              </Link>
            </div>
          </div>

          <div>
            {
              loading ? 
            <button disabled   className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Loading...
            </button> :
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
            }
          </div>
        </form>
        <div>
          <SocialMediaLogin />
        </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">

              <Dialog>
              <DialogTrigger>Forgot your password?</DialogTrigger>
              <ForgetPassModal />
              </Dialog>
            </div>
          </div>
      </div>
    </div>
  );
}
export default SignInPage;
// src/components/Login.jsx
import { signInWithPopup } from 'firebase/auth';
import { Github } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../lib/loading';
import { setToLocalStorage } from '../lib/local-storage';
import { fetchSocialLogin } from '../services/authService';
import { auth, githubProvider, googleProvider } from '../services/firebase';
import useAuth from '../zustand/authStore';


const SocialMediaLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setUser} = useAuth(state => state)
  const handleGoogleSignIn = async () => {
      const provider = googleProvider;
    await signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = result.credential;
          // const token = credential.accessToken;
          // // The signed-in user info.
          const user = result.user;
            setLoading(true);
            const saveInDB = await fetchSocialLogin(user.displayName, user.email, user.photoURL);
            setLoading(false);
            if(saveInDB.data.statusCode === 200){
              console.log(saveInDB.data);
              const token = saveInDB.data.data.accessToken;
              const user = saveInDB.data.data;
              setToLocalStorage('token', JSON.stringify(token));
              setUser(saveInDB.data.data);
              navigate('/');
            }
          console.log(result, "user");

        })
        .catch((error) => {
          // Handle Errors here.
          setLoading(false);
          console.log(error,'check');
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
        });

  };

  const handleGithubSignIn = async () => {
    const provider = githubProvider;
    await signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = result.credential;
          // const token = credential.accessToken;
          // // The signed-in user info.
          const user = result.user;
            setLoading(true);
            const saveInDB = await fetchSocialLogin(user.displayName, user.email, user.photoURL);
            setLoading(false);
            if(saveInDB.data.statusCode === 200){
              console.log(saveInDB.data);
              const token = saveInDB.data.data.accessToken;
              const user = saveInDB.data.data;
              setToLocalStorage('token', JSON.stringify(token));
              setUser(saveInDB.data.data);
              navigate('/');
            }
          console.log(result, "user");

        })
        .catch((error) => {
          // Handle Errors here.
          setLoading(false);
          console.log(error,'check');
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
        });
  };

  return (
    <div>
     {
      loading ? <Spinner className="middle" /> :(<>
       <button 
        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>
      <button 
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={handleGithubSignIn}
      >
        Sign in with Github 
        <Github size={20} className='inline-block' />
      </button>
      </>)
     }
    </div>
  );
};

export default SocialMediaLogin;
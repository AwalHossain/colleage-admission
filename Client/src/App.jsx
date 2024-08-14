
// src/App.jsx

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


import CollegeDetails from './pages/CollegeDetails'
import Colleges from './pages/Colleges'
import Home from './pages/Home'
import MyCollege from './pages/MyCollege'
import NotFound from './pages/NotFound'

import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './components/Layout'
import ResetPassword from './components/resetPassoword/ResetPassword'
import { getFromLocalStorage } from './lib/local-storage'
import PrivateRoutes from './middleware/PrivateRoutes'
import Admission from './pages/Admission'
import Profile from './pages/Profile'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import useAuth from './zustand/authStore'

function App() {
  const { setUser } = useAuth();


  useEffect(() => {
    const storedUser = getFromLocalStorage("user");

      setUser(storedUser);
  
  }, [setUser]);


const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-up/verify-email-address" element={<SignUpPage routing="virtual" />} />
              <Route path="/sign-in/factor-one" element={<SignInPage routing="virtual" />} />
              <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

                {/* private Routes */}
                <Route element={<PrivateRoutes />}>
              <Route path="/admission" element={<Admission />} />
            <Route path="/my-college" element={<MyCollege />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/colleges/:collegeId" element={<CollegeDetails />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Route>
          {/* not found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
    </QueryClientProvider>
  )
}

export default App
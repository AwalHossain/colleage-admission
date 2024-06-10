
// src/App.jsx
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


import CollegeDetails from './pages/CollegeDetails'
import Colleges from './pages/Colleges'
import Home from './pages/Home'
import MyCollege from './pages/MyCollege'
import NotFound from './pages/NotFound'

import Layout from './components/Layout'
import ResetPassword from './components/ResetPassword'
import Admission from './pages/Admission'
import Profile from './pages/Profile'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'



const queryClient = new QueryClient()

function App() {
  // Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges/:collegeId" element={<CollegeDetails />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/my-college" element={<MyCollege />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-up/verify-email-address" element={<SignUpPage routing="virtual" />} />
              <Route path="/sign-in/factor-one" element={<SignInPage routing="virtual" />} />
              <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ClerkProvider>
    </QueryClientProvider>
  )
}

export default App
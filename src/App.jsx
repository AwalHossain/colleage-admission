
// src/App.jsx
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import CollegeDetails from './pages/CollegeDetails'
import Colleges from './pages/Colleges'
import Home from './pages/Home'
import MyCollege from './pages/MyCollege'
import NotFound from './pages/NotFound'
import { default as Admission, default as Profile } from './pages/Profile'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges/:collegeId" element={<CollegeDetails />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/my-college" element={<MyCollege />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ClerkProvider>
    </QueryClientProvider>
  )
}

export default App
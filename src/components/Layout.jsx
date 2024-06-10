
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const { isSignedIn } = useUser()

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} isSignedIn={isSignedIn} />

            <main className="flex-grow">{children}</main>

            <footer className="bg-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} College Booking. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>


    )
}
export default Layout

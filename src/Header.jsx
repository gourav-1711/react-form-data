"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header({ activeTab, setActiveTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-white shadow-sm ">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800"> User Registration Form</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="">
                        <ul className="flex space-x-8">
                            <Link to={"/"} >
                                <li>
                                    <button

                                        className={`px-3 py-2 rounded-md text-lg font-medium ${activeTab === "form"
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        Form
                                    </button>
                                </li>
                            </Link>
                            <Link to={"/data"}>
                                <li>
                                    <button

                                        className={`px-3 py-2 rounded-md text-lg font-medium ${activeTab === "data"
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        Data
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            
        </header>
    )
}

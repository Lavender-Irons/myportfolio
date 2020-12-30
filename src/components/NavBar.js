import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import me from '../images/me.png';

export default function NavBar(){
    return (
        <header className="bg-purple-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    {/* <img 
                    src={me}
                    alt="me"
                    className=""
                    /> */}

                    <NavLink 
                    to='/' 
                    exact 
                    activeClassName="text-indigo-300"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold cursive tracking-widest">
                    Home
                    </NavLink>

                    <NavLink 
                    to='/about'
                    activeClassName="text-indigo-300" 
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-3xl font-bold cursive">
                    About
                    </NavLink>

                    <NavLink 
                    to='/projects' 
                    activeClassName="text-indigo-300"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-3xl font-bold cursive">
                    Projects
                    </NavLink>

                    <NavLink 
                    to='/post' 
                    activeClassName="text-indigo-300"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-3xl font-bold cursive">
                    Post
                    </NavLink>

                    <NavLink 
                    to='/contact'
                    activeClassName="text-indigo-300"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-3xl font-bold cursive">
                    Contact
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://www.linkedin.com/in/lavender-irons-908828117/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35 }}/>

                    <SocialIcon 
                    url="https://github.com/Lavender-Irons" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )
}
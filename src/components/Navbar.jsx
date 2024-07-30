// import { NavLink } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <header className="header">
//         <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex fond-bold shadow-md">
//             <p className="blue-gradient_text">AA</p>
//         </NavLink>
//         <nav className="flex text-lg gap-7 font-medium">
//             <NavLink to='/about' className={({isActive}) =>isActive ? 'text-blue-500':'text-black'}>
//                 About
//             </NavLink>
//             <NavLink to='/project' className={({isActive}) =>isActive ? 'text-blue-500':'text-black'}>
//                 Projects
//             </NavLink>
//             <NavLink to='/contact' className={({isActive}) =>isActive ? 'text-blue-500':'text-black'}>
//                 Contact
//             </NavLink>
//         </nav>
//     </header>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="header flex justify-between p-4">
      <Link to="home" smooth={true} duration={500} className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md cursor-pointer">
        <p className="blue-gradient_text">AA</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link to="home" smooth={true} duration={500} className="text-black cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="text-black cursor-pointer">About</Link>
        <Link to="projects" smooth={true} duration={500} className="text-black cursor-pointer">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="text-black cursor-pointer">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

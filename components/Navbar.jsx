"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders} from "next-auth";


const Navbar = () => {
  const isUserLoggedin = true;

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link href='/' className="navbar-brand">
             <Image
                src="/Codemode-Logo-Updated-02.png.webp"
                alt="CodeMode Logo"
                width={120}
                height={45}
                className="object-contain"
             />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/assessment">Assessment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/classroom">Classroom</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/test-series">Test Series</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/live-board">Live Board</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/content">Content</Link>
            </li>
          </ul>
          {isUserLoggedin ? 
           (
            <div className="d-flex mx-3" role="search">
              <button className="btn btn-outline-success " onClick={signOut} type="button">Log Out</button>
              <Link href='/dashboard'>
                  <Image
                     src="/Codemode-Logo-Updated-02.png.webp"
                     alt="Profile"
                     width={37}
                     height={37}
                     className="object-contain"
                  />
              </Link>
            </div>
            
           ):(
            <div className="d-flex mx-3" role="search">
              <button className="btn btn-outline-success " onClick= {signIn} type="button">Sign in</button>
            </div>
           )
        }
        </div>
    </nav>
  )
}

export default Navbar
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders} from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
       const response = await getProviders();
       setProviders(response);
    }
    setupProviders();
  }, [])

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
          {session?.user ? 
           (
            <div className="d-flex mx-3">
              <button className="btn btn-outline-success " onClick={signOut} type="button">Log Out</button>
              <Link href='/dashboard'>
                  <Image
                     src={session?.user.image}
                     alt="Profile"
                     width={37}
                     height={37}
                     className="rounded mx-3"
                  />
              </Link>
            </div>
            
           ):(
             <>
                {
                    providers && 
                    Object.values(providers).map((provider) =>
                    (
                        <button 
                          type="button"
                          key={provider.name}
                          onClick={() => signIn(provider.id)}
                          className="btn btn-success mx-3"
                        >
                         Sign in
                        </button>
                    ))
                }
             </>
           )
        }
        </div>
    </nav>
  )
}

export default Navbar
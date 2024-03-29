"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const CourseCard = ({post}) => {
  return (
     <div className="col-3">
        <div className="card" style={{marginTop: 5, marginBottom: 10}}>
          <Image src={post.image} className="card-img-top" alt="Course Image" width={50} height={100}/>
          <div className="card-img-overlay">
             <p className="card-text d-inline bg-black text-white rounded p-2">{post.type}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <p className="card-text">{post.questions}</p>
            <p className="card-text">{post.duration}</p>
          </div>
          <ul class="list-group list-group-flush text-center">
             <li class="list-group-item bg-light">View Details</li>
          </ul>
        </div>
      </div>
  );
}

export default CourseCard;


import React from "react";
import Image from "next/image";
import Modal from "./Modal";

interface Project {
  title: string;
  text: string;
  tec: string[];
  code: string;
  web: string;
  gif: any;
  mainImage: any;
}

export const ItemProject = ({ project }: { project: any }) => {
  return (
    <div className="post">
      <Image
        className="portafolio"
        src={project.mainImage}
        alt=""
        width={300}
        height={300}
      />
      <div className="post-preview">
        <div className="post-title">
          <h3>{project.title}</h3>

          <div className="post-into">
            <p>{project.text}</p>
            <Modal project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import Image from "next/image";
import React, { useState } from "react";
import peltrocheGym from "../../../public/images/peltroche-scroll.gif";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

export default function Modal({ project }: { project?: any }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="shadow bg-[var(--previewShadow)] hover:bg-[var(--secondaryColor)] text-white font-bold py-2 px-4 border-b-4 border-[var(--mainText)] hover:border-[[var(--previewShadow)] rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ver mas
      </button>
      {showModal ? (
        <>
          <div className="justify-center transform- items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[12rem]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  items-start justify-between px-5 md:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text:2xl md:text-3xl text-[var(--mainColor)] font-semibold">
                    {project.title}
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block  focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative justify-center flex-wrap px-5 md:p-5 flex">
                  <p className="my-2 md:my-4 text-slate-500 text-sm  md:text-md leading-relaxed px-3">
                    permite a los usuarios escribir texto en un idioma y
                    traducirlo a otro idioma seleccionado. Además, la aplicación
                    tiene la funcionalidad de reproducir la pronunciación de la
                    traducción para que los usuarios puedan escuchar cómo se
                    pronuncia la traducción.
                  </p>
                  <Image
                    style={{ boxShadow: "0px 0px 5px #000000" }}
                    src={peltrocheGym}
                    alt="scroll page peltroche"
                    width={300}
                  />
                </div>
                {/*footer*/}
                <div className=" px-6 border-solid border-slate-200 rounded-b">
                  <h2 className="text-[var(--mainColor)]">tecnologias:</h2>
                  <div className="flex justify-center  gap-5  items-center ">
                    <div className="text-center">
                      <FaReact size={50} />
                      <p className="text-slate-500">React</p>
                    </div>
                    <div className="text-center">
                      <SiTailwindcss color={"DeepSkyBlue"} size={50} />
                      <p className="text-slate-500">Tailwind</p>
                    </div>
                    <div className="text-center">
                      <SiNextdotjs size={50} />
                      <p className="text-slate-500">Next</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="w-full flex gap-4 justify-center items-center  text-slate-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <AiFillGithub size={32} />
                    ver codigo
                  </button>
                  <button
                    className="flex w-full items-center gap-4 justify-center bg-[var(--mainColor)] text-white active:bg-[var(--secondaryColor)] font-bold uppercase text-sm px-2 md:px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <TbWorldWww size={32} />
                    <span className="text-2xs md:text-base">ver sitio</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-[0.7] fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

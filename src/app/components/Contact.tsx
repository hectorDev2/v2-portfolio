"use client";
import "./style.css";
import useField from "@/hooks/useField";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import successImg from "../../../public/images/send.png";

export const Contact = () => {
  const name = useField({ type: "text" });
  const email = useField({ type: "email" });
  const message = useField({ type: "email" });
  const cv = useField({ type: "file" });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
      cv: cv.value,
    };
    e.preventDefault();
    emailjs
      .send(
        "service_e2uuxpm",
        "template_dp1s9cv",
        templateParams,
        "QjQDYIYsMKrQD4d-E"
      )
      .then((response) => {
        console.log(response.status, response.text);
        if (response.status === 200) {
          console.log("enviado con exito!");
          setShowModal(true);
          console.log(showModal, "modal");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        name.clear();
        email.clear();
        message.clear();
      });
  };

  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Contactame</h3>
        <form onSubmit={handleSubmit} id="contact-form">
          <label htmlFor="">Nombre</label>
          <input name="name" {...name} className="input-field" />
          <label htmlFor="">Email</label>
          <input {...email} name="email" className="input-field" />
          <label htmlFor="">Mensaje</label>
          <textarea
            name="message"
            {...message}
            className="input-field"
          ></textarea>
          <button className="bg-[var(--previewShadow)] text-[#fff] font-bold py-2 px-4 rounded w-full">
            enviar
          </button>
        </form>
        <div
          id="modal"
          className={` z-1 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000000af] bg-opacity-50 transform ${
            showModal ? "scale-100" : "scale-0"
          } transition-transform duration-300`}
        >
          <div className="bg-white w-1/2 h-1/2 p-5 md:p-12 grid place-content-center relative -z-1">
            <div className="flex justify-between">
              <button
                id="closebutton"
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 text-red-600 z-[9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[50px] w-[50px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-black text-center text-[18px] md:text-[26px] font-bold leading-[1.2] md:mb-8">
              mensaje enviado con exito
            </h2>
            <p className="text-center text-black">
              gracias por tu mensaje nos, en breve respondere su mensaje 👨‍💻
            </p>
            <Image
              width="150"
              height={150}
              className="m-auto hidden md:block"
              src={successImg}
              alt={"enviado con exito a peltroche"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

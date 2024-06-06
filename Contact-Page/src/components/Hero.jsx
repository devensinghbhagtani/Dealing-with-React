import React, { useState } from "react";
import ContactForm from "./ContactForm";

function Hero() {
  const [name, setName] = useState("Deven");
  const [email, setEmail] = useState("bhagtanideven@gmail.com");
  const updateDetails = (name, email) => {
    setName(name);
    setEmail(email);
  };
  return (
    <main className=" px-[12vw] items-center">
      <h1 className="text-5xl uppercase font-bold tracking-tight">
        Contact Us
      </h1>
      <h3 className="mt-2 font-[600] text-[#5A5959]">
        आप है {name}, आपका ईमेल: {email}
      </h3>
      <p className="font-[600] tracking-tight mt-3 text-[#5A5959] w-[80%]">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <ContactForm updateDetails={updateDetails} />
    </main>
  );
}

export default Hero;

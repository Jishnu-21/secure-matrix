"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <>
      <Header/>
      <main className="bg-[#FAFAFA] relative min-h-screen pt-40">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;

import React from "react";
import Footer from "../components/HelperComponents/Footer";
import Navbar from "../components/HelperComponents/Navbar";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <main>
        <section className="bg-black text-white py-10">
          <h2 className="text-6xl font-semibold">Get in touch</h2>
          <p>
            There are many reasons to connect. Want to hear about a project?
            <br /> Discuss a project of your own? Look to learn more?
            <br /> Wed love to hear from you.
          </p>
          <button className="py-5 px-8 bg-red-700 rounded-3xl uppercase">Message</button>
          <button className="py-5 px-8 bg-red-700 rounded-3xl uppercase">discord</button>
        </section>

        <section></section>

        {/* Join Us */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

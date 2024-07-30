// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact

import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "63625efd-3027-4727-a910-e649ca2b8d43");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Has Been Sent",
          icon: "success",
          customClass: {
            confirmButton: 'custom-button'
          },
          buttonsStyling: false
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          customClass: {
            confirmButton: 'custom-button'
          },
          buttonsStyling: false
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        customClass: {
          confirmButton: 'custom-button'
        },
        buttonsStyling: false
      });
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center py-24">
      <form onSubmit={onSubmit} className="w-full max-w-lg p-8 bg-red-100 rounded-lg shadow-lg border-4 border-yellow-700 retro-border">
        <h2 className="text-4xl font-bold text-yellow-700 retro-heading mb-8 text-center">Contact Form</h2>
        <div className='input-box mb-6'>
          <label className="block text-yellow-700 text-lg font-bold mb-2">Full name</label>
          <input type="text" name="name" className='field w-full px-4 py-2 border-2 border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700' placeholder='Enter Your Name' required />
        </div>
        <div className='input-box mb-6'>
          <label className="block text-yellow-700 text-lg font-bold mb-2">Email</label>
          <input type="email" name="email" className='field w-full px-4 py-2 border-2 border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700' placeholder='Enter Your Email' required />
        </div>
        <div className='input-box mb-6'>
          <label className="block text-yellow-700 text-lg font-bold mb-2">Message</label>
          <textarea name="message" className='field w-full px-4 py-2 border-2 border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700' placeholder='Enter Your Message' required ></textarea>
        </div>
        <button type='submit' className="w-full py-2 px-4 bg-yellow-700 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Submit</button>
      </form>
    </section>
  );
};

export default Contact;


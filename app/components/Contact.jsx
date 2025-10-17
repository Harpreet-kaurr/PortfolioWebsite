'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AboutHeader from './AboutHeader';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_OWNER_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER_ID;
  const TEMPLATE_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID; // ✅ added
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    try {
      // Send email to site owner
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_OWNER_ID,
        formRef.current,
        PUBLIC_KEY
      );

      // Send auto-reply to user if template is provided
      if (TEMPLATE_AUTOREPLY_ID) {
        const formData = new FormData(formRef.current);
        const userName = formData.get('user_name');
        const userEmail = formData.get('user_email');

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_AUTOREPLY_ID,
          {
            user_name: userName,
            to_email: userEmail, // user receives the auto-reply
          },
          PUBLIC_KEY
        );
      }

      alert('✅ Message sent! Thank you.');
      formRef.current.reset();
    } catch (err) {
      console.error('Email send error:', err);
      alert('❌ There was an error sending your message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-black mt-10 mb-28 w-full max-w-[600px] mx-auto px-4" id="contact">
      <AboutHeader title="Contact" />
      <p className="text-white text-base sm:text-lg font-semibold mt-4">
        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 sm:gap-6 mt-6 relative z-[999999]"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="bg-[#1a1a1a] p-3 rounded-lg text-white placeholder:text-gray-500 focus:outline-none w-full h-24 sm:h-32"
        />
        <button
          type="submit"
          disabled={sending}
          className={`text-white mt-2 sm:mt-4 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors w-fit ${
            sending ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {sending ? 'SENDING...' : 'SUBMIT'}
        </button>
      </form>
    </section>
  );
};

export default Contact;

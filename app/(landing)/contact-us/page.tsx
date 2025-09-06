'use client'
import Image from "next/image";
import { useContact } from "@/query/contact";
import { useState } from "react";
import Back from "@/components/back";
import Link from "next/link";

export default function ContactUs() {
  const { mutateAsync: contact, isPending } = useContact()
  const [isSuccess, setIsSuccess] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await contact({
      firstname: (e.target as HTMLFormElement).firstName.value,
      lastname: (e.target as HTMLFormElement).lastName.value,
      email: (e.target as HTMLFormElement).email.value,
      message: (e.target as HTMLFormElement).message.value,
    });
    (e.target as HTMLFormElement).reset();
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <div className="bg-black text-white px-4 pb-8 md:pt-15 pt-8">
      <div className="w-[984px] max-w-full mx-auto">
        <div className="w-full mx-auto mb-8">
          <Back>CONTACT US</Back>
          <nav className="text-xs items-center hidden md:flex">
            <Link href="/" className="text-white hover:text-gray-300">
              Home page
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="font-bold">CONTACT US</span>
          </nav>
        </div>
        <div className="flex md:gap-8 gap-4 justify-center items-end mb-10">
          <Image src={'/img/star-blue.png'} alt="star" width={20} height={20} />
          <Image src="/img/title/contact-us.svg" alt="logo" width={400} height={52} className="w-[400px] hidden md:block" />
          <Image src="/img/title/contact-us-mobile.svg" alt="logo" width={243} height={52} className="md:hidden block" />
          <Image src={'/img/star-blue.png'} alt="star" width={20} height={20} className="self-start" />
        </div>

        <div className="flex justify-center py-8 mb-10 bg-[url('/img/image.png')] bg-repeat-x">
          <Image src="/img/contact-product.svg" alt="logo" width={597} height={248} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Contact Form */}
          <div className="bg-[#161616] rounded-lg md:p-8 p-4 pt-3">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white text-sm font-semibold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    id="firstName"
                    name="firstName"
                    className="w-full bg-black text-xs rounded-xs px-4 py-2 text-white placeholder-[#6C757D] focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white text-sm font-semibold mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    id="lastName"
                    name="lastName"
                    className="w-full bg-black text-xs rounded-xs px-4 py-2 text-white placeholder-[#6C757D] focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full bg-black text-xs rounded-xs px-4 py-2 text-white placeholder-[#6C757D] focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-black text-xs rounded-xs px-4 py-2 text-white placeholder-[#6C757D] focus:outline-none resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#FFA748] text-white max-w-[200px] text-xs font-semibold py-2 px-6 rounded-md"
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </button>
              {isSuccess && <p className="text-white text-sm">Message sent successfully!</p>}
            </form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-8">
            {/* Introduction Text */}
            <div className="md:mb-20 mb-10">
              <p className="text-white text-sm">
                We'd love to hear from you. Whether you're interested in collaboration or just want to share your feedback, feel free to reach out. Contact us anytime at{' '}
                <a href="mailto:your@email.com" className="text-orange-500 hover:text-orange-400">
                Service@nicozyclub.com
                </a>
                {' '} - let's make something great together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-center gap-4">
                <Image src="/img/contact/location.svg" alt="location" width={32} height={32} />
                <p className="text-white text-base font-semibold">8592 Fairground St. Tallahassee, FL 32303</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Image src="/img/contact/email.svg" alt="email" width={32} height={32} />
                <a href="mailto:rgarton@outlook.com" className="text-white text-base font-semibold hover:text-orange-500">
                  rgarton@outlook.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Image src="/img/contact/phone.svg" alt="phone" width={32} height={32} />
                <a href="tel:+7753786348" className="text-white text-base font-semibold hover:text-orange-500">
                  +775 378-6348
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <Image src="/img/contact/time.svg" alt="hours" width={32} height={32} />
                <p className="text-white text-base font-semibold">Mon - Fri: 10AM - 10PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
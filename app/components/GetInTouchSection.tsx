"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 40,
        duration: 2,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="register"
      className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-16 lg:px-24 py-12 overflow-hidden"
    >
      <Image
        width={1000}
        height={1000}
        src="/images/contactbg.png"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10 hidden md:block">
        <span className="inline-block contact-reveal">
          <h2 className="heading uppercase text-white text-3xl">Get In Touch</h2>
        </span>

        <span className="inline-block contact-reveal">
          <p className="text-white mt-4 font-haffer-light text-para">
            Leave your contact details below to register your interest in Hado.
          </p>
        </span>
      </div>

      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center relative z-10 md:hidden">
        <h2 className="heading uppercase text-white">Get In Touch</h2>
        <p className="text-white mt-4 font-haffer-light text-center text-para">
          Leave your contact details below to register your interest in Hado.
        </p>
      </div>

      <div className="w-full md:w-2/3 space-y-6 bg-black/20 p-8 rounded-xl relative z-10">
        <form
          className="space-y-6"
          action="https://hooks.zapier.com/hooks/catch/23005380/ufnhpox/"
          method="POST"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <Input label="*First Name" name="first_name" />
            <Input label="*Last Name" name="last_name" />
          </div>

          <Input label="*Your Email" name="email" type="email" />

          <PhoneInput />

          <Select
            label="What kind of unit are you interested in?"
            name="unit_type"
            options={["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"]}
          />
          <Select
            label="Please select your budget."
            name="budget"
            options={[
              "Under AED 1M",
              "AED 1M - 2M",
              "AED 2M - 5M",
              "AED 5M - 10M",
              "Above AED 10M",
            ]}
          />
          <Select
            label="What is the purpose of your investment?"
            name="investment_purpose"
            options={[
              "Primary Residence",
              "Investment Property",
              "Holiday Home",
              "Rental Income",
              "Other",
            ]}
          />

          <div className="group btn-secondary btn-shimmer w-35 md:w-43.75 text-[10px] md:text-[13px]">
            <span className="btn-shimmer-effect" />
            <button type="submit" className="relative z-10 w-full">
              Register Interest
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="w-full border-b border-gray-400 pb-2">
      <label className="text-sm text-gray-label font-haffer-light">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="w-full outline-none bg-transparent text-white"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full border-b border-gray-400 pb-2">
      <label className="text-sm text-gray-label font-haffer-light">
        {label}
      </label>
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent text-gray-label flex justify-between items-center py-1"
      >
        {selected || "Select"}
        <Chevron />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-dropdown-bg border border-gray-600 rounded-lg shadow-xl z-20 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-3 text-left text-white hover:bg-dropdown-hover transition-colors border-b border-gray-700 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PhoneInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United Arab Emirates",
    code: "971",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { name: "United Arab Emirates", code: "971" },
    { name: "United States", code: "1" },
    { name: "United Kingdom", code: "44" },
    { name: "India", code: "91" },
    { name: "Saudi Arabia", code: "966" },
    { name: "Qatar", code: "974" },
    { name: "Kuwait", code: "965" },
    { name: "Bahrain", code: "973" },
    { name: "Oman", code: "968" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (country: { name: string; code: string }) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 border-b border-gray-400 pb-2">
      <div ref={dropdownRef} className="w-full lg:w-1/2 relative">
        <label className="text-sm text-gray-label font-haffer-light">
          *Country Code
        </label>
        <input type="hidden" name="country_code" value={selectedCountry.code} />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-gray-label py-1"
        >
          {selectedCountry.name}: {selectedCountry.code}
          <Chevron />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-dropdown-bg border border-gray-600 rounded-lg shadow-xl z-20 max-h-60 overflow-y-auto">
            {countries.map((country, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(country)}
                className="w-full px-4 py-3 text-left text-white hover:bg-dropdown-hover transition-colors border-b border-gray-700 last:border-b-0"
              >
                {country.name}: {country.code}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/2">
        <label className="text-sm text-gray-label font-haffer-light">
          *Phone Number
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder="Your Phone Number"
          required
          className="w-full outline-none bg-transparent text-white py-1"
        />
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

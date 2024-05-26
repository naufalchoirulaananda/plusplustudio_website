import React, { useState } from "react";
import { supabase } from "@/app/utils/supabaseClient"; // Import Supabase client
import Link from "next/link";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [selectedPackage, setselectedPackage] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState("");
  const [showPhoneAlert, setShowPhoneAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const isValidPhone = /^62\d{10,}$/;
    const isValidEmail = /\S+@\S+\.\S+/;

    const validationErrors = []; // Array to store validation errors

    if (!isValidPhone.test(phone)) {
      validationErrors.push("Invalid phone number format");
      setShowPhoneAlert(true); // Show phone alert immediately
    } else {
      setShowPhoneAlert(false); // Hide phone alert if valid
    }

    if (!isValidEmail.test(email)) {
      validationErrors.push("Invalid email format");
      setShowEmailAlert(true); // Show email alert immediately
    } else {
      setShowEmailAlert(false); // Hide email alert if valid
    }

    if (validationErrors.length > 0) {
      // Display validation errors
      console.error(validationErrors); // Or display errors to the user in a UI
      return; // Prevent form submission
    }

    try {
      const { error } = await supabase
        .from("orderin")
        .insert({ name, email, phone, selectedPackage, message });

      if (error) {
        console.log(error);
      } else {
        setShowSuccessAlert(
          "Order successful! Please wait for a reply message from us 👌"
        );
        setTimeout(() => setShowSuccessAlert(""), 3000);

        setName("");
        setEmail("");
        setPhone("");
        setselectedPackage("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen mx-4">
        <div className="w-full">
          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <p className="text-start text-3xl font-bold mb-8">
              Form Order Customer
            </p>
            {showSuccessAlert && (
              <p className="text-white text-sm bg-blue-500 p-2 rounded-md mb-4">
                {showSuccessAlert}
              </p>
            )}
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Please enter your valid name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Please enter your valid email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {showEmailAlert && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email format (eg: example@email.com)
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Phone
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="phone"
                name="phone"
                value={phone}
                placeholder="6281234567890"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {showPhoneAlert && (
                <p className="text-red-500 text-sm">
                  Phone number must start with &apos;62xxxxxxxxx&apos;.
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select Your Package
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setselectedPackage(e.target.value)}
                id="selectedPackage"
                name="selectedPackage"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a package</option>
                <option value="Basic">Basic</option>
                <option value="Pro">Pro</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-3 mb-2 text-center"
            >
              Submit
            </button>
            <Link
              href={"/"}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
      <footer className="flex justify-center items-center h-[80px]">
        <p className="text-sm sm:tracking-[8px] text-gray-400 text-center">
          hand made on earth by human.
        </p>
      </footer>
    </>
  );
};

export default Form;

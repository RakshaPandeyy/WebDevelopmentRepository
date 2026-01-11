import React, { useState } from "react";
import toast from "react-hot-toast";

import api from "../config/Api";
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
      lastQualification: "",
      percentageGrade: "",
      preferredCourse: "",
      batchTiming: "",
      residentialAddress: "",
      city: "",
      pinCode: "",
      guardianName: "",
      guardianContact: "",
      hearAboutUs: "",
      specialRequirements: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.trim().length < 3) {
      Error.fullName = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only A-Z, a-z and space allowed";
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use proper email format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only valid Indian mobile number allowed";
    }

    if (!formData.dateOfBirth) {
      Error.dateOfBirth = "Date of birth is required";
    } else {
      const dob = new Date(formData.dateOfBirth);
      const age = new Date().getFullYear() - dob.getFullYear();
      if (age < 10) {
        Error.dateOfBirth = "Age must be at least 10 years";
      }
    }

    if (!formData.lastQualification) {
      Error.lastQualification = "Select qualification";
    }

    if (!formData.percentageGrade.trim()) {
      Error.percentageGrade = "Percentage or grade is required";
    }

    if (!formData.preferredCourse) {
      Error.preferredCourse = "Select preferred course";
    }

    if (!formData.batchTiming) {
      Error.batchTiming = "Select batch timing";
    }

    if (formData.residentialAddress.trim().length < 10) {
      Error.residentialAddress = "Address must be at least 10 characters";
    }

    if (!/^[A-Za-z ]+$/.test(formData.city)) {
      Error.city = "Enter valid city name";
    }

    if (!/^\d{6}$/.test(formData.pinCode)) {
      Error.pinCode = "Enter valid 6-digit pin code";
    }

    if (!/^[A-Za-z ]+$/.test(formData.guardianName)) {
      Error.guardianName = "Enter valid guardian name";
    }

    if (!/^[6-9]\d{9}$/.test(formData.guardianContact)) {
      Error.guardianContact = "Enter valid guardian mobile number";
    }

    if (!formData.hearAboutUs) {
      Error.hearAboutUs = "This field is required";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
        const res = await api.post("/auth/register")
      console.log(formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Registration
            </h1>
            <p className="text-lg text-gray-600">
              Just one step away from your cravings!
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Personal Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  {validationError.email && (
                    <span className="text-xs text-red-500">
                      {validationError.email}
                    </span>
                  )}
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                  {validationError.mobileNumber && (
                    <span className="text-xs text-red-500">
                      {validationError.mobileNumber}
                    </span>
                  )}
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                {validationError.dateOfBirth && (
                  <span className="text-xs text-red-500">
                    {validationError.dateOfBirth}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Registration
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
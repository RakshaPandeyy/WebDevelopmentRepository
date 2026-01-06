import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    qualification: "",
    percentage: "",
    course: "",
    batch: [],
    address: "",
    pin: "",
    city: "",
    guardianName: "",
    guardianMobile: "",
    reference: "",
    requirements: "",
  });

  const [isLoading, setIsLoading] = () => {
    isLoading = false;
  };
  const [validationError, setValidationError] = () => {
    validationnError = false;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        batch: checked
          ? [...prev.batch, value]
          : prev.batch.filter((b) => b !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoading(true);
  
    if(!validate() ) {
      set
    }
    try {
      console.log(data);
      toast.success("Data fetched!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      dob: "",
      qualification: "",
      percentage: "",
      course: "",
      batch: [],
      address: "",
      pin: "",
      city: "",
      guardianName: "",
      guardianMobile: "",
      reference: "",
      requirements: "",
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Registration Page
        </h1>

        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="bg-white p-6 rounded shadow max-w-3xl mx-auto"
        >
          {/* Personal Information */}
          <h2 className="font-bold text-blue-600 mb-2">Personal Information</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 w-full mb-2 focus:outline-0 focus:border-indigo-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />

          <input
            type="number"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
            required
          />

          {/* Academic Details */}
          <h2 className="font-bold text-blue-600 mb-2">Academic Details</h2>

          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          >
            <option value="">Select Qualification</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
          </select>

          <input
            type="text"
            name="percentage"
            placeholder="Percentage"
            value={formData.percentage}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
            required
          />

          {/* Course Information */}
          <h2 className="font-bold text-blue-600 mb-2">Course Information</h2>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          >
            <option value="">Select Course</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Data Science">Data Science</option>
            <option value="Java DSA">Java DSA</option>
            <option value="Python DSA">Python DSA</option>
          </select>

          <div className="mb-4">
            <label className="font-semibold">Preferred Batch</label>
            <div>
              <input type="checkbox" value="Morning" onChange={handleChange} />
              Morning
            </div>
            <div>
              <input type="checkbox" value="Evening" onChange={handleChange} />
              Evening
            </div>
            <div>
              <input type="checkbox" value="Weekend" onChange={handleChange} />
              Weekend
            </div>
          </div>

          <h2 className="font-bold text-blue-600 mb-2">Address</h2>

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />

          <input
            type="number"
            name="pin"
            placeholder="Pin Code"
            value={formData.pin}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
            required
          />

          <h2 className="font-bold text-blue-600 mb-2">Guardian Information</h2>

          <input
            type="text"
            name="guardianName"
            placeholder="Guardian Name"
            value={formData.guardianName}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />

          <input
            type="number"
            name="guardianMobile"
            placeholder="Guardian Mobile"
            value={formData.guardianMobile}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
            required
          />

          <h2 className="font-bold text-blue-600 mb-2">
            Additional information
          </h2>
          <textarea
            name="reference"
            placeholder="How did you hear about us?"
            value={formData.reference}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <textarea
            name="requirements"
            placeholder="Special Requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <div className="flex gap-4 justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-red-600 text-white px-6 py-2 rounded"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;

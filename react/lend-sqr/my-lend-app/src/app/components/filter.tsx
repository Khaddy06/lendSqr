import React, { useState } from "react";
import { useUserFilter } from "../context/user-filter-context";

const UserFilterForm = () => {
  const [formState, setFormState] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "",
  });
  const { setFilter } = useUserFilter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter((prevFilter) => ({
      ...prevFilter,
      name: formState.username,
      email: formState.email,
      status: formState.status,
    }));
  };

  const handleReset = () => {
    setFormState({
      organization: "",
      username: "",
      email: "",
      date: "",
      phone: "",
      status: "",
    });
    setFilter({
      name: "",
      email: "",
      status: "",
      organization: "",
      username: "",
      date: "",
      phone: "",
      role: "",
    });
  };

  return (
    // UserFilterForm.tsx
    <form
      onSubmit={handleSubmit}
      className="bg-white p-3 rounded-md w-full max-w-md overflow-y-auto max-h-[300px]" // added max height and scroll
    >
      <div className="mb-2">
        <label className="block text-base font-medium text-[#545F7D]">
          Organization
        </label>
        <input
          type="text"
          name="username"
          value={formState.organization}
          onChange={handleChange}
          placeholder="organization"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-2">
        <label className="block text-base font-medium text-[#545F7D]">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
          placeholder="User"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-2">
        <label className="block text-base font-medium text-[#545F7D]">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-2">
        <label className="block text-base font-medium text-[#545F7D]">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formState.date}
          onChange={handleChange}
          title="Select a date"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-2">
        <label className="block text-base font-medium text-[#545F7D]">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block text-base font-medium text-[#545F7D]">
          Status
        </label>
        <select
          name="status"
          value={formState.status}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          title="select"
        >
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 w-full"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 w-full"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default UserFilterForm;

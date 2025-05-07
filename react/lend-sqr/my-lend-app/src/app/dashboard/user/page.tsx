"use client";
import { useState } from "react";
import Image from "next/image";
import icon from "../../assets/ic-more-vert-18px.png";
import Icon from "../../assets/icon (1).png";
import IconTwo from "../../assets/icon (2).png";
import IconThree from "../../assets/icon (3).png";
import IconFour from "../../assets/icon (4).png";
import IconFive from "../../assets/filter-results-button.png";
import { FiChevronDown } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Active from "../../assets/active.png";
import Blacklist from "../../assets/Vector (1).png";
import View from "../../assets/view.png";
import UserFilterForm from "@/app/components/filter";

const cards = [
  { image: Icon, label: "Users", count: "2,453" },
  { image: IconTwo, label: "Active Users", count: "2,456" },
  { image: IconThree, label: "Users with Loans", count: "12,453" },
  { image: IconFour, label: "Users with Savings", count: "102,453" },
];

const users = [
  {
    organization: "Lendsqr",
    name: "Adedeji Odumade",
    email: "adedeji@email.com",
    phone: "08012345678",
    dateJoined: "May 01, 2023",
    timeJoined: " 10:00AM",
    status: "Active",
  },
  {
    organization: "Irorun",
    name: "Jane Doe",
    email: "jane@email.com",
    phone: "08098765432",
    dateJoined: "Jun 10, 2023",
    timeJoined: "10:00AM",
    status: "Inactive",
  },
  {
    organization: "Lendsqr",
    name: "Samuel Obi",
    email: "samuel@email.com",
    phone: "08123456789",
    dateJoined: "Mar 05, 2023",
    timeJoined: "10:00AM",
    status: "Pending",
  },
  {
    organization: "Lendsqr",
    name: "Linda Johnson",
    email: "linda@email.com",
    phone: "09011223344",
    dateJoined: "Jan 21, 2023",
    timeJoined: " 10:00AM",
    status: "Blacklisted",
  },
  {
    organization: "Paystack",
    name: "John Smith",
    email: "johnsmith@email.com",
    phone: "08187654321",
    dateJoined: "Jul 15, 2023 ",
    timeJoined: "9: 30AM",
    status: "Active",
  },
  {
    organization: "Flutterwave",
    name: "Chidinma Eze",
    email: "chidinma@email.com",
    phone: "07033445566",
    dateJoined: "Feb 08, 2023",
    timeJoined: "11:00AM",
    status: "Inactive",
  },
  {
    organization: "Irorun",
    name: "Michael Ajayi",
    email: "michael@email.com",
    phone: "08122334455",
    dateJoined: "Apr 12, 2023",
    timeJoined: "2:15PM",
    status: "Pending",
  },
  {
    organization: "Lendsqr",
    name: "Grace Umeh",
    email: "grace@email.com",
    phone: "08099887766",
    dateJoined: "Dec 19, 2022",
    timeJoined: "4:45PM",
    status: "Blacklisted",
  },
];

const UsersPage = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterForm = () => setIsFilterVisible((prev) => !prev);

  return (
    <main className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-medium text-[#213F7D] mb-4 md:mb-6">
        Users
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 md:p-6 flex flex-col items-start"
          >
            <Image
              src={card.image}
              alt="User Icon"
              width={40}
              height={40}
              className="mb-3"
            />
            <p className="text-sm md:text-base font-medium text-[#545F7D] uppercase pb-1">
              {card.label}
            </p>
            <p className="text-lg md:text-2xl font-semibold text-[#213F7D]">
              {card.count}
            </p>
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-x-auto">
        {isFilterVisible && (
          <div className="absolute top-14 left-3 w-64 md:w-auto z-20 bg-white border border-[#213F7D1A] p-3 shadow-lg rounded-lg">
            <UserFilterForm />
          </div>
        )}
        <div className="bg-white rounded-lg shadow px-4 md:px-6 overflow-auto">
          <table className="min-w-[600px] w-full text-sm text-left">
            <thead className="bg-white text-[#545F7D] text-sm md:text-base font-semibold uppercase">
              <tr>
                {[
                  "Organization",
                  "Username",
                  "Email",
                  "Phone Number",
                  "Date Joined",
                  "Time Joined",
                  "Status",
                ].map((heading, i) => (
                  <th key={i} className="p-3 md:p-4">
                    <span className="flex items-center gap-2">
                      {heading}
                      <button onClick={toggleFilterForm} title="icon">
                        <Image
                          src={IconFive}
                          alt="Filter"
                          width={16}
                          height={16}
                        />
                      </button>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#213F7D1A] hover:bg-gray-50"
                >
                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.organization}
                  </td>

                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.name}
                  </td>
                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.email}
                  </td>
                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.phone}
                  </td>
                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.dateJoined}
                  </td>
                  <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
                    {user.timeJoined}
                  </td>
                  <td className="p-2 relative">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-3 py-2 text-xs md:text-base font-normal rounded-full ${
                          user.status === "Active"
                            ? "bg-green-200 text-[#39CD62]"
                            : user.status === "Inactive"
                            ? "bg-gray-200 text-[#545F7D]"
                            : user.status === "Blacklisted"
                            ? "bg-red-200 text-[#E4033B]"
                            : "bg-yellow-200 text-[#E9B200]"
                        }`}
                      >
                        {user.status}
                      </span>
                      <button
                        title="icon"
                        className="text-gray-500 hover:text-gray-800"
                        onClick={() =>
                          setOpenMenuIndex(openMenuIndex === idx ? null : idx)
                        }
                      >
                        <Image src={icon} alt="More" width={20} height={20} />
                        {openMenuIndex === idx && (
                          <div className="absolute right-0 w-40 bg-white shadow-xl rounded z-10">
                            <ul className="text-sm text-[#545F7D] p-3">
                              <Link href="/dashboard/users-details">
                                <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                  <Image
                                    src={View}
                                    alt="View"
                                    width={12}
                                    height={12}
                                  />
                                  View Details
                                </li>
                              </Link>
                              <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                <Image
                                  src={Blacklist}
                                  alt="Blacklist"
                                  width={12}
                                  height={12}
                                />
                                Blacklist User
                              </li>
                              <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                <Image
                                  src={Active}
                                  alt="Activate"
                                  width={12}
                                  height={12}
                                />
                                Activate User
                              </li>
                            </ul>
                          </div>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2 md:px-4 py-6 text-sm">
        <div className="flex items-center gap-3">
          <p className="text-[#545F7D] text-sm md:text-base">Showing</p>
          <div className="flex items-center bg-[#213F7D1A] px-4 py-1.5 rounded-md cursor-pointer">
            <button className="text-[#213F7D] text-sm md:text-base font-medium">
              100
            </button>
            <FiChevronDown className="ml-3 text-[#213F7D]" size={18} />
          </div>
          <span className="text-[#545F7D] text-sm md:text-base">
            out of 100
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 rounded bg-[#213F7D1A] hover:bg-gray-200"
            title="icon"
          >
            <FaChevronLeft color="#213F7D" />
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="text-sm md:text-base text-[#545F7D] px-2"
            >
              {num}
            </button>
          ))}
          <span className="px-2 text-sm md:text-base text-[#545F7D]">...</span>
          <button className="text-sm md:text-base text-[#545F7D] px-2">
            12
          </button>
          <button
            className="px-2 py-1 rounded bg-[#213F7D1A] hover:bg-gray-200"
            title="icon"
          >
            <FaChevronRight color="#213F7D" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;

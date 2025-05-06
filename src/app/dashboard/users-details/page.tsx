import React from "react";
import Image from "next/image";
import Arrow from "../../assets/arrow.png";
import Link from "next/link";
import User from "../../assets/avatar.png";
import starOne from "../../assets/star-1.png";
import star from "../../assets/star.png";

const details = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const UserDetailsTable = () => {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center gap-3 pb-5 pt-5">
        <Image src={Arrow} alt="User Icon" width={24} height={24} />
        <Link href="/dashboard/user">
          <p className="text-base font-medium text-[#545F7D]">Back to Users</p>
        </Link>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <h1 className="text-2xl font-medium text-[#213F7D] ">Users Details</h1>
        <div className="flex gap-3 flex-wrap mt-4 sm:mt-0">
          <button className="text-[#E4033B] text-base font-semibold uppercase px-6 py-3 border border-b-2 border-[#E4033B] rounded-md">
            blacklist user
          </button>
          <button className="text-[#39CDCC] text-base font-semibold uppercase px-6 py-3 border border-b-2 border-[#39CDCC] rounded-md">
            active user
          </button>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md px-6 sm:px-8 pt-8 mb-4">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-20">
          <div className="flex items-center gap-6 mb-4 sm:mb-0">
            <Image
              src={User}
              alt="User Icon"
              width={100}
              height={100}
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
            <div>
              <p className="text-[#213F7D] font-medium text-[22px] pb-1">
                Grace Effiom
              </p>
              <p className="text-[#545F7D] text-base font-normal">
                LSQFf587g90
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-16 w-px bg-[#e5ebf8]"></div>

          <div className="text-center sm:text-left">
            <p className="text-[#545F7D] text-base font-normal mb-1">
              User's Tier
            </p>
            <div className="flex gap-1 justify-center sm:justify-start">
              <Image src={starOne} alt="Star" width={18} height={18} />
              <Image src={star} alt="Star" width={18} height={18} />
              <Image src={star} alt="Star" width={18} height={18} />
            </div>
          </div>

          <div className="hidden sm:block h-16 w-px bg-[#e5ebf8]"></div>

          <div className="text-center sm:text-left">
            <p className="text-[#213F7D] text-lg font-medium">₦200,000.00</p>
            <p className="text-[#213F7D] text-base">
              9912345678 / Providus Bank
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between border-b border-[#e5ebf8] mt-6">
          {details.map((detail, index) => (
            <p
              key={index}
              className="text-[#000000CC] text-base font-medium pb-3 cursor-pointer transition-all duration-200 hover:border-b-2 hover:border-[#39CDCC] hover:text-[#39CDCC] mx-2 sm:mx-0"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded p-6 w-full">
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-[#213F7D] mb-6">
            Personal Information
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left mb-4">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Full Name</th>
                  <th className="p-4">Phone Number</th>
                  <th className="p-4">Email Address</th>
                  <th className="p-4">BVN</th>
                  <th className="p-4">Gender</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">Grace Effiom</td>
                  <td className="p-4">09012345678</td>
                  <td className="p-4">grace@email</td>
                  <td className="p-4">12345678910</td>
                  <td className="p-4">Female</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-separate border-spacing-y-2">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Marital Status</th>
                  <th className="p-4">Children</th>
                  <th className="p-4">Type of Residence</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">Single</td>
                  <td className="p-4">None</td>
                  <td className="p-4">Parent's Apartment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="border-t-2 border-gray-100 my-4 w-full" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-[#213F7D] mb-6">
            Education and Employment
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left mb-4">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Level of Education</th>
                  <th className="p-4">Employment Status</th>
                  <th className="p-4">Sector of Employment</th>
                  <th className="p-4">Duration of Employment</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">B.Sc</td>
                  <td className="p-4">Employed</td>
                  <td className="p-4">FinTech</td>
                  <td className="p-4">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-separate border-spacing-y-2">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Office Email</th>
                  <th className="p-4">Monthly Income</th>
                  <th className="p-4">Loan Repayment</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">grace@lendsqr.com</td>
                  <td className="p-4">₦200,000.00 - ₦400,000.00</td>
                  <td className="p-4">40,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="border-t-2 border-gray-100 my-4 w-full" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-[#213F7D] mb-6">Socials</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left mb-4">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Twitter</th>
                  <th className="p-4">Facebook</th>
                  <th className="p-4">Instagram</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">@grace_effiom</td>
                  <td className="p-4">Grace Effiom</td>
                  <td className="p-4">@grace_effiom</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="border-t-2 border-gray-100 my-4 w-full" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-[#213F7D] mb-6">
            Guarantor
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left mb-4">
              <thead className="bg-white text-[#545F7D] text-xs font-semibold uppercase">
                <tr>
                  <th className="p-4">Full Name</th>
                  <th className="p-4">Phone Number</th>
                  <th className="p-4">Email Address</th>
                  <th className="p-4">Relationship</th>
                </tr>
              </thead>
              <tbody className="text-[#545F7D]">
                <tr className="">
                  <td className="p-4">Debby Ogana</td>
                  <td className="p-4">07060780922</td>
                  <td className="p-4">debby@gmail.com</td>
                  <td className="p-4">Sister</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="border-t-2 border-gray-100 my-4 w-full" />
        </section>
      </div>
    </main>
  );
};

export default UserDetailsTable;

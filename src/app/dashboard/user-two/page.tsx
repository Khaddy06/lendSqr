// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import icon from "../../assets/ic-more-vert-18px.png";
// import IconFive from "../../assets/filter-results-button.png";
// import Link from "next/link";
// import Active from "../../assets/active.png";
// import Blacklist from "../../assets/Vector (1).png";
// import View from "../../assets/view.png";
// import UserFilterForm from "@/app/components/filter";
// import { useGetUserData } from "@/app/library/querry";
// import UserOverview from "@/app/components/overview";
// import UserPagination from "@/app/components/pagination";

// const UsersPage = () => {
//   const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
//   const [isFilterVisible, setIsFilterVisible] = useState(false);
//   const toggleFilterForm = () => setIsFilterVisible((prev) => !prev);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const { isLoading, data, total, error } = useGetUserData(page, limit);

//   if (isLoading)
//     return <div className="p-6 text-center text-2xl">Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <main className="p-4 md:p-6">
//       <h1 className="text-xl md:text-2xl font-medium text-[#213F7D] mb-4 md:mb-6">
//         Users
//       </h1>
//       <UserOverview />
//       <div className="text-right">
//         <Link href="/dashboard/create-user">
//           <button className="bg-[#545F7D] text-white px-4 py-3 mb-3 rounded-lg">
//             Create User
//           </button>
//         </Link>
//       </div>

//       <div className="relative w-full ">
//         {isFilterVisible && (
//           <div className="absolute top-10 left-0 z-10 bg-white border border-[#213F7D1A] p-3 shadow-lg rounded-md">
//             <UserFilterForm />
//           </div>
//         )}
//         <div className="bg-white rounded-lg shadow px-4 md:px-6 overflow-auto">
//           <table className="min-w-[600px] w-full text-sm text-left">
//             <thead className="bg-white text-[#545F7D] text-sm md:text-base font-semibold uppercase">
//               <tr>
//                 {[
//                   "Organization",
//                   "Username",
//                   "Email",
//                   "Phone Number",
//                   "Date Joined",
//                   "Status",
//                 ].map((heading, i) => (
//                   <th key={i} className="p-3 md:p-4">
//                     <span className="flex items-center gap-2">
//                       {heading}
//                       <button onClick={toggleFilterForm} title="icon">
//                         <Image
//                           src={IconFive}
//                           alt="Filter"
//                           width={16}
//                           height={16}
//                         />
//                       </button>
//                     </span>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             {data.length === 0 ? (
//               <p className="text-center text-lg font-semibold text-gray-600 p-6">
//                 No users found
//               </p>
//             ) : (
//               <tbody>
//                 {data.map((user, idx) => (
//                   <tr
//                     key={user.id}
//                     className="border-b border-[#213F7D1A] hover:bg-gray-50"
//                   >
//                     <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
//                       {user.organization}
//                     </td>
//                     <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
//                       {user.username}
//                     </td>
//                     <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
//                       {user.email}
//                     </td>
//                     <td className="p-2 text-[#545F7D] text-sm md:text-base font-normal">
//                       {user.phoneNumber}
//                     </td>
//                     <td className="p-4 text-[#545F7D] text-sm md:text-base font-normal">
//                       {user.createdAt}
//                     </td>
//                     <td className="p-2 relative">
//                       <div className="flex items-center justify-between gap-2">
//                         <span
//                           className={`px-3 py-2 text-xs md:text-base font-normal rounded-full ${
//                             user.status === "Active"
//                               ? "bg-green-200 text-[#39CD62]"
//                               : user.status === "Inactive"
//                               ? "bg-gray-200 text-[#545F7D]"
//                               : user.status === "Blacklisted"
//                               ? "bg-red-200 text-[#E4033B]"
//                               : "bg-yellow-200 text-[#E9B200]"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                         <button
//                           title="icon"
//                           className="text-gray-500 hover:text-gray-800"
//                           onClick={() =>
//                             setOpenMenuIndex(openMenuIndex === idx ? null : idx)
//                           }
//                         >
//                           <Image src={icon} alt="More" width={20} height={20} />
//                           {openMenuIndex === idx && (
//                             <div className="absolute right-0 w-40 bg-white shadow-xl rounded z-10">
//                               <ul className="text-sm text-[#545F7D] p-3">
//                                 <Link href="/dashboard/users-details">
//                                   <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                                     <Image
//                                       src={View}
//                                       alt="View"
//                                       width={12}
//                                       height={12}
//                                     />
//                                     View Details
//                                   </li>
//                                 </Link>
//                                 <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                                   <Image
//                                     src={Blacklist}
//                                     alt="Blacklist"
//                                     width={12}
//                                     height={12}
//                                   />
//                                   Blacklist User
//                                 </li>
//                                 <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                                   <Image
//                                     src={Active}
//                                     alt="Activate"
//                                     width={12}
//                                     height={12}
//                                   />
//                                   Activate User
//                                 </li>
//                               </ul>
//                             </div>
//                           )}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             )}
//           </table>
//         </div>
//       </div>

//       <UserPagination
//         page={page}
//         limit={limit}
//         totalUsers={data.length}
//         onPageChange={setPage}
//         onLimitChange={(newLimit) => {
//           setLimit(newLimit);
//           setPage(1);
//         }}
//       />
//     </main>
//   );
// };

// export default UsersPage;

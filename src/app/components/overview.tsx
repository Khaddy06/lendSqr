"use client";
import { useGetUserOverview } from "../library/querry";
import Icon from "../assets/icon (1).png";
import IconTwo from "../assets/icon (2).png";
import IconThree from "../assets/icon (3).png";
import IconFour from "../assets/icon (4).png";
import Image, { StaticImageData } from "next/image";

const UserOverview = () => {
  const { isLoading, data, error } = useGetUserOverview();

  if (isLoading) return <p className="text-gray-500">Loading overview...</p>;
  if (error) return <p className="text-red-500">Error loading overview</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8">
      <Card label="Total Users" count={data.totalCount} image={Icon} />
      <Card label="Active Users" count={data.activeCount} image={IconTwo} />
      <Card
        label="Inactive Users"
        count={data.inactiveCount}
        image={IconThree}
      />
      <Card
        label="Users with Loans"
        count={data.usersWithLoansCount}
        image={IconFour}
      />
    </div>
  );
};

const Card = ({
  label,
  count,
  image,
}: {
  label: string;
  count: number;
  image: string | StaticImageData; // Specify type for the image prop
}) => (
  <div className="bg-white shadow rounded-lg p-4 md:p-6 flex flex-col items-start">
    <Image
      src={image}
      alt="User Icon"
      width={40}
      height={40}
      className="mb-3"
    />
    <p className="text-sm md:text-base font-medium text-[#545F7D] uppercase pb-1">
      {label}
    </p>
    <p className="text-lg md:text-2xl font-semibold text-[#213F7D]">
      {count.toLocaleString()}
    </p>
  </div>
);

export default UserOverview;

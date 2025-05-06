"use client";

import Image from "next/image";
import Link from "next/link";
import User from "../assets/user.png";
import Guarantor from "../assets/guarantor.png";
import Loan from "../assets/loan.png";
import Model from "../assets/model.png";
import Saving from "../assets/piggy.png";
import Request from "../assets/request.png";
import White from "../assets/white.png";
import Karma from "../assets/times.png";
import Briefcase from "../assets/briefcase.png";
import Down from "../assets/down.png";
import Home from "../assets/home.png";
import Sack from "../assets/sack.png";
import Bank from "../assets/bank.png";
import Coin from "../assets/coins.png";
import Transaction from "../assets/transaction.png";
import Galaxy from "../assets/galaxy.png";
import Account from "../assets/user-cog 1.png";
import Scroll from "../assets/scroll 1.png";
import Chart from "../assets/chart-bar 2.png";
import Slider from "../assets/sliders-h 1.png";
import Fee from "../assets/badge-percent 1.png";
import Audit from "../assets/clipboard-list 1.png";

type SidebarProps = {
  onClose?: () => void;
};

const users = [
  { icon: User, label: "Users", href: "/dashboard/user" },
  { icon: Guarantor, label: "Guarantors", href: "#" },
  { icon: Loan, label: "Loans", href: "#" },
  { icon: Model, label: "Decision Models", href: "#" },
  { icon: Saving, label: "Savings", href: "#" },
  { icon: Request, label: "Loan Request", href: "#" },
  { icon: White, label: "Whitelist", href: "#" },
  { icon: Karma, label: "Karma", href: "#" },
];

const organizations = [
  { icon: Briefcase, label: "Organization", href: "#" },
  { icon: Sack, label: "Loan Products", href: "#" },
  { icon: Bank, label: "Savings Products", href: "#" },
  { icon: Coin, label: "Fees and Charges", href: "#" },
  { icon: Transaction, label: "Transactions", href: "#" },
  { icon: Galaxy, label: "Services", href: "#" },
  { icon: Account, label: "Service Account", href: "#" },
  { icon: Scroll, label: "Settlements", href: "#" },
  { icon: Chart, label: "Request", href: "#" },
];

const settings = [
  { icon: Slider, label: "Preferences", href: "#" },
  { icon: Fee, label: "Fees and Pricing", href: "#" },
  { icon: Audit, label: "Audit Log", href: "#" },
  { icon: Audit, label: "Log Out", href: "#" },
];

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-full md:w-64 bg-white shadow-sm overflow-y-auto px-5 py-6 z-30">
    
      {onClose && (
        <button
          onClick={onClose}
          className="md:hidden mb-4 text-gray-700 font-bold"
        >
          ✕ Close
        </button>
      )}

      
      <div className="flex items-center gap-2 text-gray-600 mb-6 cursor-point text-base hover:text-[#213F7D]">
        <Image src={Briefcase} alt="briefcase" width={20} height={20} />
        <span className="font-medium text-base text-[#213F7D]">
          Switch Organization
        </span>
        <Image src={Down} alt="dropdown" width={20} height={20} />
      </div>

    
      <nav className="space-y-8">
        <div>
          <Link
            href="/dashboard/user"
            className="flex items-center gap-3 text-base font-medium text-[#213F7D] opacity-60 hover:text-[#39CDCC] transition"
          >
            <Image src={Home} alt="dashboard" width={20} height={20} />
            Dashboard
          </Link>
        </div>
        <div>
          <p className="uppercase text-xs font-medium text-[#545F7D] mb-2 tracking-wide">
            Customers
          </p>
          <ul className="space-y-3">
            {users.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-base text-[#213F7D] opacity-60 hover:text-[#39CDCC] transition"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="uppercase text-xs text-[#545F7D] font-medium mb-2 tracking-wide">
            Businesses
          </p>
          <ul className="space-y-3">
            {organizations.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-base text-[#213F7D] opacity-60 hover:text-[#39CDCC] transition"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="uppercase text-xs text-[#545F7D] font-medium mb-2 tracking-wide">
            Settings
          </p>
          <ul className="space-y-3">
            {settings.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-base text-[#213F7D] opacity-60 hover:text-[#39CDCC] transition"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

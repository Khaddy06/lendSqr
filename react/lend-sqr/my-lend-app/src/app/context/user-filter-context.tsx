"use client";
import { createContext, useContext, useState, ReactNode } from "react";
interface UserFilter {
  name: string;
  role: string;
  status: string;
  email: string;
  organization: string;
  username: string;
  date: string;
  phone: string;
 
}

interface UserFilterContextType {
  filter: UserFilter;
  setFilter: React.Dispatch<React.SetStateAction<UserFilter>>;
}

const UserFilterContext = createContext<UserFilterContextType | undefined>(
  undefined
);

interface UserFilterProviderProps {
  children: ReactNode;
}

export const UserFilterProvider: React.FC<UserFilterProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<UserFilter>({
    name: "",
    role: "",
      status: "",
    email: "",
    organization: "",
      username: "",
      date: "",
      phone: "",
     
  });

  return (
    <UserFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </UserFilterContext.Provider>
  );
};
export const useUserFilter = (): UserFilterContextType => {
  const context = useContext(UserFilterContext);
  if (!context) {
    throw new Error("useUserFilter must be used within a UserFilterProvider");
  }
  return context;
};

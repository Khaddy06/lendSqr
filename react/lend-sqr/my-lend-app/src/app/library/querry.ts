import { useQuery } from "@tanstack/react-query";
import { UserOverview } from "../fetch/users";
import api from "./api";
import { usersRoutes } from "./routes";

export interface User {
  id: string;
  username: string;
  email: string;
  organization: string;
  phoneNumber: string;
  status: string;
  createdAt: string;
}

export const getUsers = async ({ page = 1, limit = 10, q = "" }) => {
  const response = await api.get(
    `/api/users?page=${page}&limit=${limit}&q=${q}`
  );
  return response.data;
};

export const useGetUserOverview = () => {
  const { isLoading, data, error, refetch } = useQuery<UserOverview, Error>({
    queryKey: ["user-overview"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await api.get(usersRoutes.getUserOverview.path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    data: data ?? {
      totalCount: 0,
      activeCount: 0,
      inactiveCount: 0,
      usersWithLoansCount: 0,
    },
    error,
    refetch,
  };
};

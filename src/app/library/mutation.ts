import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FormData } from "../fetch/users";
import { usersRoutes } from "./routes";
import api from "./api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const createUser = async (data: FormData) => {
  const response = await api.post(usersRoutes.addUsers.path, data);
  return response.data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User created successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(`Error Creating User: ${error.response?.data.message}`);
    },
  });
};

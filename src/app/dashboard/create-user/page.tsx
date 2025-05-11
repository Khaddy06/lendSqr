"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormData } from "../../fetch/users";
import { useCreateUser } from "@/app/library/mutation";
import { Button } from "antd";
import { useRouter } from "next/navigation";


const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  organization: yup.string().required("Organization is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  status: yup.string().required("Status is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const {
    mutate: createUser,
    isPending,
    isError,
    isSuccess,
    error,
  } = useCreateUser(); 

  console.log({ isPending, isError, error, isSuccess });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted with data:", data);
    createUser(data, {
      onSuccess: () => {
        router.push("/dashboard/user");
      },
    });
  };

  return (
    <div className="p-8 rounded-lg">
      <div className="text-xl font-semibold">Create New User</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-14 mt-10"
      >
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Organization</label>
            <input
              type="text"
              {...register("organization")}
              className="w-full mt-1 p-2 border rounded-md"
            />
            {errors.organization && (
              <p className="text-red-500 text-sm">
                {errors.organization.message}
              </p>
            )}
          </div>

          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("username")}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="John Doe"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
     

          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="user@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              {...register("phoneNumber")}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="+234 000 000 0000"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Status</label>
            <select
              {...register("status")}
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Blacklisted</option>
              <option value="pending">Pending</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          <div className="w-full md:w-[48%] pb-3">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter a secure password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="w-full text-right mt-4">
            <Button
              type="primary"
              htmlType="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              disabled={isPending} // Disable button during submission
            >
              {isPending ? "Creating..." : "Create User"}
            </Button>
          </div>
        </div>
      </form>

      {isError && <p className="text-red-500 text-sm mt-4">{error?.message}</p>}

      {isSuccess && (
        <p className="text-green-500 text-sm mt-4">
          User created successfully!
        </p>
      )}
    </div>
  );
};

export default LoginPage;

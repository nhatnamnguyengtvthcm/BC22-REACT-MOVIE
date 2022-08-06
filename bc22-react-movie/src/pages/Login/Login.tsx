import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { TextInput, Button, Space } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from "slices/auth";
import { AppDispatch, RootState } from "store";
import { Navigate } from "react-router-dom";
// import { useElementSize } from '@mantine/hooks';

interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    // mode: cách để trigger validation, mặc định là onSubmit
    mode: "onTouched",
  });
  const dispatch = useDispatch<AppDispatch>();
  // const taiKhoan = register("taiKhoan");
  // console.log(taiKhoan);
  const onSubmit = (values: LoginValues) => {
    console.log(values);
    dispatch(login(values));
  };
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error);
  };
  // Kiểm tra currentUser có phải là object rỗng hay không, nếu không phải => user đã đăng nhập
  if (Object.keys(currentUser).length) {
    // Redirect user về trang Home
    return <Navigate to="/" replace />;
  }
  return (
    // <div>
    //   <h1>Login</h1>
    //   <form
    //     style={{ width: 400, height: 120 }}
    //     onSubmit={handleSubmit(onSubmit, onError)}
    //   >
    //     <Space h="sm" />
    //     <TextInput
    //       type="text"
    //       placeholder="Tài khoản"
    //       error={errors.taiKhoan?.message}
    //       {...register("taiKhoan", {
    //         required: {
    //           value: true,
    //           message: "Tài khoản không được để trống",
    //         },
    //       })}
    //     />
    //     <Space h="sm" />
    //     <TextInput
    //       type="password"
    //       placeholder="Mật Khẩu"
    //       error={errors.matKhau?.message}
    //       {...register("matKhau",{
    //         required:{
    //             value:true,
    //             message: "Mật khẩu không được để trống"
    //         },
    //         // pattern:{
    //         //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    //         //     message: "Mật khẩu ít nhất 8 ký tự, có ít nhất 1 chữ cái và 1 sô"
    //         // }
    //       })}
    //     />
    //     <Space h="sm" />
    //     {error && <h1>Tài khoản hoặc mật không không đúng</h1>}
    //     <Space h="sm" />
    //     <Button type="submit">Đăng nhập</Button>
    //   </form>
    // </div>
    <div className="py-40 flex  justify-center bg-rose-300">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 border border-indigo-600">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                UserName
              </label>
              <TextInput
                type="text"
                id="username"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                error={errors.taiKhoan?.message}
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <TextInput
                type="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                error={errors.matKhau?.message}
                {...register("matKhau", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don't have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-400"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

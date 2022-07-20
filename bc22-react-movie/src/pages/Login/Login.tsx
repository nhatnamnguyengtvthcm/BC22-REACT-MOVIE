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
  const {currentUser, isLoading, error} = useSelector((state:RootState)=>state.auth);
  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error);
  };
  // Kiểm tra currentUser có phải là object rỗng hay không, nếu không phải => user đã đăng nhập
  if(Object.keys(currentUser).length){
    // Redirect user về trang Home
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Login</h1>
      <form
        style={{ width: 400, height: 120 }}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Space h="sm" />
        <TextInput
          type="text"
          placeholder="Tài khoản"
          error={errors.taiKhoan?.message}
          {...register("taiKhoan", {
            required: {
              value: true,
              message: "Tài khoản không được để trống",
            },
          })}
        />
        <Space h="sm" />
        <TextInput
          type="password"
          placeholder="Mật Khẩu"
          error={errors.matKhau?.message}
          {...register("matKhau",{
            required:{
                value:true,
                message: "Mật khẩu không được để trống"
            },
            // pattern:{
            //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            //     message: "Mật khẩu ít nhất 8 ký tự, có ít nhất 1 chữ cái và 1 sô"
            // }
          })}
        />
        <Space h="sm" />
        {error && <h1>Tài khoản hoặc mật không không đúng</h1>}
        <Space h="sm" />
        <Button type="submit">Đăng nhập</Button>
      </form>
    </div>
  );
};

export default Login;


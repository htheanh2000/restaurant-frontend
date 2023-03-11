import IM_Login_bg from "@/assets/images/login-bg.png";
import IM_logo from "@/assets/images/logo-short.png";
import Button from "@/components/button";
import Icon from "@/components/icon";
import { logInAction } from "@/store/features/user/userSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ApiLoginProps } from "@/api/user";
import Field from "@/components/form/field";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "@/components/errorMessage";

const LoginPage = () => {
  const router = useRouter()
  const dispatch =
    useDispatch<ThunkDispatch<unknown, unknown, Action<unknown>>>();

    const { user, status, error } = useAppSelector((state) => state.user);
    useEffect(() => {
      if(user) {
        router.push('/')
      }
    }, [user])

  console.log(user, status, error);
  const initialValues: ApiLoginProps = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: ApiLoginProps, { setSubmitting }: any) => {
      dispatch(logInAction(values));
      setSubmitting(false);
  };

  return (
    <div className="">
      <Link href="/">
        <Image
          className="absolute left-4 top-4"
          src={IM_logo}
          alt="Logo Image"
        />
      </Link>
      <Image
        className="absolute right-0 top-0 -z-10 max-w-xl"
        src={IM_Login_bg}
        alt="Login Background Image"
      />
      <div className="container mx-auto  mt-32 ">
        <h1 className="text-5xl text-brown">Login</h1>
        <p className="font-normal text-base text-brown">
          Dont have an account?{" "}
          <Link className="font-medium text-blue" href="/sign-up">
            Sign up
          </Link>
        </p>
        <div className="max-w-xl">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <Field label="Password " name="password" type="password" />
                {
                  status === 'idle' && error ? <ErrorMessage >{error || error.message}</ErrorMessage>  : null
                }
                <Button
                  type="submit"
                  className="mt-8 rounded"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                >
                  Log in 
                </Button>
              </Form>
            )}
          </Formik>

          <Button
            className="mt-8 rounded bg-white border border-gray"
            style="white"
          >
            <div className="flex items-center">
              <Icon name="google" size="sm" className="mr-4" /> Log in with
              google
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

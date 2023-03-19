import { ApiLoginProps, ApiSignUpProps } from "@/api/user";
import IM_Login_bg from "@/assets/images/login-bg.png";
import IM_logo from "@/assets/images/logo-short.png";
import Button from "@/components/button";
import ErrorMessage from "@/components/errorMessage";
import Field from "@/components/form/field";
import Icon from "@/components/icon";
import Input from "@/components/input";
import { logInAction, signUpAction } from "@/store/features/user/userSlice";
import { useAppSelector } from "@/store/hooks";
import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import * as Yup from "Yup";

const SignUpPage = () => {
  const dispatch =
    useDispatch<ThunkDispatch<unknown, unknown, Action<unknown>>>();
  const router = useRouter();
  const { user, status, error } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const initialValues: ApiSignUpProps = {
    name: '',
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: ApiSignUpProps, { setSubmitting }: any) => {
    dispatch(signUpAction(values));
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
      <div className="container mx-auto  mt-32">
        <h1 className="text-5xl text-brown">Sign up</h1>
        <p className="font-normal text-base text-brown">
          Already have an account?{" "}
          <Link className="font-medium text-blue" href="/login">
            Login
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
                <Field label="Full name" name="name" placeholder="Full name" />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <Field label="Password " name="password" type="password" />
                {/* {
                  status === 'idle' && error ? <ErrorMessage >{error.message}</ErrorMessage>  : null
                } */}
                <Button
                  type="submit"
                  className="mt-8 rounded"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>

          <div className="flex items-center justify-between mt-8">
            <div className="flex">
              <input
                type="checkbox"
                id="remmember"
                name="remmember-me-check-box"
              />
              <label
                htmlFor="remmember"
                className="cursor-pointer text-base font-normal text-brown ml-2"
              >
                Remember me
              </label>
            </div>
            <Link className="text-brown" href="/forgot-pasword">
              Forgot Password?
            </Link>
          </div>

          <Button
            className="mt-8 rounded bg-white border border-gray"
            style="white"
          >
            <div className="flex items-center">
              <Icon name="google" size="sm" className="mr-4" /> Sign up with
              google
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

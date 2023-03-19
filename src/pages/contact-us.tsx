import Button from "@/components/button";
import Input from "@/components/input";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Image from "next/image";
import IM_map from "../assets/images/contact-us/map.png";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Field from "@/components/form/field";
import Error from "@/components/errorMessage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { contactAction } from "@/store/features/contact/contactSlice";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import sentSuccess from "@/assets/lottie/email-successfully-sent.json";
import sentFailed from "@/assets/lottie/email-failed-sent.json";

const ContactUs = () => {
  const [sendMailStatus, setSendMailStatus] = useState<
    "SUCCESS" | "FAILED" | ""
  >("");


  const dispatch = useAppDispatch();
  const inittalValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().min(10).max(15).required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().required(),
  });

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    console.log(values);
    const result = await dispatch(contactAction(values));
    if(result.type === 'contact/rejected') {
        setSendMailStatus("FAILED");
    }
    else {
        setSendMailStatus("SUCCESS");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col items-center mb-16">
        <h2 className="text-6xl font-medium mt-16"> Contact Us </h2>
        <p className="max-w-3xl text-center font-normal mt-4">
          We love hearing from our customers. Feel free to share your experience
          or ask any questions you may have.
        </p>
        <Formik
          initialValues={inittalValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <div className="mt-8 flex flex-wrap justify-between">
                <Field
                  name="name"
                  label="name"
                  className="w-1/2 max-desktop:w-full px-4"
                  placeholder="Your name"
                />
                <Field
                  name="phone"
                  label="phone"
                  className="w-1/2 max-desktop:w-full px-4"
                  placeholder="Your phone number"
                />
                <Field
                  name="email"
                  label="email"
                  type="email"
                  className="w-1/2 max-desktop:w-full px-4"
                  placeholder="Email Address"
                />
                <Field
                  name="subject"
                  label="subject"
                  className="w-1/2 max-desktop:w-full px-4"
                  placeholder="Subject"
                />
                <div className="mt-8 mx-4 w-full">
                  <textarea
                    onChange={(event) =>
                      formik.setFieldValue("message", event.currentTarget.value)
                    }
                    rows={10}
                    placeholder="Message"
                    className={` w-full  px-4 py-3 cursor-pointer base-text  outline rounded  outline-1 outline-gray focus:outline-primary`}
                  />
                  <Error name="message" className="mx-0" />
                </div>
              </div>
              {!sendMailStatus ? (
                <Button
                  type="submit"
                  style="secondary"
                  size="lg"
                  className="rounded-lg mt-16 w-80 mx-auto"
                >
                  Submit
                </Button>
              ) : (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: sendMailStatus === 'SUCCESS' ? sentSuccess : sentFailed,
                  }}
                  height={400}
                  width={400}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Image src={IM_map} alt="map" className="w-screen" />
      <Footer />
    </div>
  );
};

export default ContactUs;

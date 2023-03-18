import Button from "@/components/button";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Image from "next/image";
import IM_1 from "../assets/images/reservation/1.png";
import DatePicker from "@/components/datepicker";
import Dropdown, { Option } from "@/components/dropdown";
import Reservation from "@/components/reservation";
import { useState } from "react";
import classnames from "classnames";
import * as Yup from "yup";
import ErrorMessage from "@/components/errorMessage";
import { Form, Formik } from "formik";
import { formatDate, getTime } from "@/utils/datetime";
const ReservationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    date: "",
    time: "",
    size: "",
  };
  const [formValues, setFormValues] = useState<IInitialValues>(initialValues);
  const options: Option[] = [
    {
      value: 1,
      label: "single (1 person)",
    },
    {
      value: 2,
      label: "couple (2 person)",
    },
    {
      value: 4,
      label: "mini group (3-4 person)",
    },
    {
      value: 6,
      label: "medium group (5-8 person)",
    },
    {
      value: 8,
      label: "large group (9-12 person)",
    },
    {
      value: 13,
      label: "Party (12-20) person",
    },
    {
      value: 20,
      label: "Custom",
    },
  ];

  interface IInitialValues {
    date: string,
    time: string,
    size: string,
  }
 
  const validationSchema = Yup.object({
    date: Yup.string().required(),
    size: Yup.string().required(),
    time: Yup.string().required(),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    console.log(values);
    setFormValues(values);
    setIsOpen(true);
  };
  return (
    <div>
      <Header />
      <div className={classnames({ "w-screen mx-auto fixed": isOpen })}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form
              className={classnames(
                "flex flex-wrap my-16 items-center justify-around"
              )}
            >
              <Image src={IM_1} alt={"IM_1"} />
              <div className="">
                <h1>Book a table</h1>
                <DatePicker
                  onChange={(value) => {
                    console.log(value);
                    
                    formik.setFieldValue("date", formatDate(value))
                  }}
                  placeholderText="Select a date"
                  className="mt-8"
                />
                <ErrorMessage name="date" />
                <DatePicker
                  onChange={(value) => formik.setFieldValue("time", getTime(value))}
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  showTimeSelect
                  showTimeSelectOnly
                  placeholderText="Select a time"
                  className="mt-8"
                />
                <ErrorMessage name="time" />
                <Dropdown
                  onChange={(value) => {
                    console.log(value);
                    formik.setFieldValue("size", value.label)
                  }}
                  placeholder="Party size"
                  options={options}
                  className="mt-8"
                />
                <ErrorMessage name="size" />
                <Button
                  type="submit"
                  className="mt-8 rounded"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                  // onClick={() => setIsOpen(true)}
                >
                  Book now
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {isOpen && (
        <Reservation
          data={formValues}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <Footer />
    </div>
  );
};

export default ReservationPage;

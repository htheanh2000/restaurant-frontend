import Button from "@/components/button";
import { logInAction } from "@/store/features/user/userSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Field from "@/components/form/field";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "@/components/errorMessage";
import UploadAndDisplayImage from "@/components/upload-image";
import IM_food from "@/assets/images/admin/food-bg.jpg"
import Image from 'next/image'
const Admin = () => {
  const router = useRouter();
//   const { user, status, error } = useAppSelector((state) => state.user);
//   useEffect(() => {
//     if (user) {
//       router.push("/");
//     }
//   }, [user]);

//   console.log(user, status, error);
  const initialValues = {
    name:'',
    description: '',
    rating: 0,
    price: 0,
    category: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Dish name is required'),
    description: Yup.string()
      .required('Description is required'),
    rating: Yup.number()
      .min(0, 'Rating cannot be negative')
      .max(5, 'Rating cannot be greater than 5')
      .required('Rating is required'),
    price: Yup.number()
      .min(0, 'Price cannot be negative')
      .required('Price is required'),
    category: Yup.string()
      .required('Category is required'),
      image: Yup.string()
      .required('Image is required'),
  });
  

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    console.log("values",values);
    
  };

  return (
    <div className="mb-32">
      <div className="container mx-auto ">
        <h1 className="text-5xl text-brown">Create a dish</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div className="flex justify-between w-full">
                <div className="w-full max-w-md">
                  <Field
                    label="Dish name"
                    name="name"
                    placeholder="Bún đậu mắm tôm"
                  />
                  <Field
                    label="Description"
                    name="description"
                    placeholder="Bún đậu hơi hui nhưng mà ngon"
                  />
                  <Field
                    label="Rating"
                    name="rating"
                    type="number"
                    min={0}
                    max={5}
                  />
                  <Field label="Price" name="price" type="number" min={0} />
                  <Field
                    label="Category"
                    name="category"
                    placeholder="APPETIZERS"
                  />
                  <UploadAndDisplayImage onChange={(data) => formik.setFieldValue('image', data)} />
                <ErrorMessage name="image"/>

                  {/* {status === "idle" && error ? (
                    <ErrorMessage>{error || error.message}</ErrorMessage>
                  ) : null} */}
                  <Button
                    type="submit"
                    className="mt-8 rounded"
                    style={
                      formik.isValid && !formik.isSubmitting
                        ? "secondary"
                        : "disable"
                    }
                  >
                    Create
                  </Button>
                </div>
                <div className="w-full max-w-md ">
                 <Image src={IM_food} className='h-full object-cover' alt="IM_food"/>
                </div>
                
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admin;

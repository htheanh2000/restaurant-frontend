import Button from "@/components/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Field from "@/components/form/field";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "@/components/errorMessage";
import UploadAndDisplayImage from "@/components/upload-image";
import { createNewDishAction } from "@/store/features/menu/menuSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "@/store/store";
import Icon from "@/components/icon";

interface IProps {
  onClose?: () => void;
}

const CreateDish = (props : IProps) => {
  const {onClose} = props;
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state: RootState) => state.menu);
  const imgRef = useRef<any>();
  const handleToast = () => {
    if (error) {
      toast("Create a new dish failed!");
    } else {
      toast("Creating a new dish succeeded!");
    }
  };

  const initialValues = {
    name: "",
    description: "",
    rating: 0,
    price: 0,
    category: "",
    image: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Dish name is required"),
    description: Yup.string().required("Description is required"),
    rating: Yup.number()
      .min(1, "Rating cannot be zero")
      .max(5, "Rating cannot be greater than 5")
      .required("Rating is required"),
    price: Yup.number()
      .min(1, "Price cannot be zero")
      .required("Price is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.string().required("Image is required"),
  });

  const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    setSubmitting(false);
    toast("Creating a new dish ...");
    await dispatch(createNewDishAction(values));
    handleToast();
    resetForm(initialValues);
    imgRef.current.remove();
    onClose && onClose()
  };

  return (
    <div className="mb-32">
      <div className="container mx-auto relative">
        <ToastContainer />
        <h1 className="text-5xl text-brown">Create a dish</h1>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div className="flex justify-between w-full min-w-[800px]">
                <div className="w-full mr-16 ">
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
                    label="Category"
                    name="category"
                    placeholder="APPETIZERS"
                  />
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
                <div className="w-full">
                  <Field
                    label="Rating"
                    name="rating"
                    type="number"
                    min={1}
                    max={5}
                  />
                  <Field label="Price" name="price" type="number" min={0} />

                  <UploadAndDisplayImage
                    ref={imgRef}
                    onChange={(data) => {
                      formik.setFieldValue("image", data);
                    }}
                  />
                  <ErrorMessage name="image" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateDish;

import { format } from "date-fns";
import Button from "../button";
import Dropdown, { Option } from "../dropdown";
import Icon from "../icon";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Field from "../form/field";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { reservationAction } from "@/store/features/reservation/reservationSlice";
interface IProps {
  onClose: () => void;
  data: {
    date: string;
    time: string;
    size: string;
  };
}

const Reservation = (props: IProps) => {
  const occasions: Option[] = [
    {
      value: "Celebrity occasions",
      label: "Celebrity occasions",
    },
    {
      value: "Social gatherings",
      label: "Social gatherings",
    },
    {
      value: "Date night",
      label: "Date night",
    },
    {
      value: "Time-saving",
      label: "Time-saving",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const {error} = useAppSelector(state => state.reservation)

  const { data } = props;
  const router = useRouter()
  const dispatch = useAppDispatch()
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    occasions: "",
    note: "",
    notification: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    const params = {
        ...values,
        ...data,
    }
    await dispatch(reservationAction(params))
    if(!error) {
      router.push('order-successfully')
    }
    else {
      router.push('order-failed')
    }
  };

  return (
    <div className="fixed top-0 w-screen  h-screen bg-gray/70 overflow-auto">
      <Icon
        onClick={() => props.onClose()}
        className="mx-auto mt-16"
        size="lg"
        name="close"
      />
      <div className="bg-white h-max px-12 mb-24 pb-16 flex flex-col items-center w-5/6  mx-auto mt-8">
        <h2 className="mt-8 text-6xl font-semibold">Reservation</h2>
        <span className="mt-8 bg-blue/20 py-8 w-full text-center rounded-xl">
          Due to limited availability, we can hold this table for you for{" "}
          <strong>5:00 minutes</strong>
        </span>
        <h3 className="w-full font-semibold mt-12 mb-8">Data order</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <div className="w-full flex justify-between">
                <div className="w-1/2 mr-4">
                  <Field name="name" label="name" placeholder="Name"></Field>
                  <Field name="phone" label="phone" placeholder="Phone"></Field>
                  <Field name="email" label="email" placeholder="Email"></Field>

                  <Dropdown
                    onChange={(value) =>
                      formik.setFieldValue("occasions", value.value)
                    }
                    className="mt-4"
                    options={occasions}
                    placeholder="Select an occasions"
                  />
                  <textarea
                    onChange={(event) =>
                      formik.setFieldValue("note", event.currentTarget.value)
                    }
                    rows={10}
                    placeholder="Add a special request"
                    className={`mt-8 w-full px-4 py-3 cursor-pointer base-text outline rounded  outline-1 outline-gray focus:outline-primary`}
                  />
                  <div className="max-w-xs flex">
                    <input
                      onChange={(event) => {
                        formik.setFieldValue(
                          "notification",
                          event.currentTarget.checked
                        );
                      }}
                      id="checkbox"
                      className="rounded-full"
                      type="checkbox"
                    />
                    <label htmlFor="checkbox" className="cursor-pointer pl-4">
                      Sign me up to receive dining offers and news from this
                      restaurant by email.
                    </label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-xl mt-8"
                    style="secondary"
                  >
                    Confirm reservation
                  </Button>
                </div>
                <div className="w-1/2 ml-4">
                  <div className="bg-gray/30 rounded-lg mt-4 p-4">
                    <h5 className="font-semibold text-base">
                      Reservation detail
                    </h5>
                    <div className="flex mt-8">
                      <Icon className="mr-4" name="calendar" />
                      <span>
                        {format(new Date(data.date), "EEEE, dd MMMM yyyy")}
                      </span>
                    </div>
                    <div className="flex mt-6">
                      <Icon className="mr-4" name="clock" />
                      <span>{data.time}</span>
                    </div>
                    <div className="flex mt-6">
                      <Icon className="mr-4" name="people" />
                      <span>2 people (Standar seating)</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-2xl mt-8">
                    Restaurant informations
                  </h4>
                  <p className="mt-4 text-base font-normal">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                    <br />
                    <br /> Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Reservation;

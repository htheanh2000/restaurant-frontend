import IM_Customer_waiting from "@/assets/images/customer-review.svg";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/router";
const OrderSuccessfully = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  const handleContactUs = () => {
    router.push("/contact-us");
  };
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <Image src={IM_Customer_waiting} alt="IM_Customer_waiting" />
      <h4 className="text-2xl font-light mt-8 text-center">
        We regret to inform you that there seems to be an issue with processing
        your customer order. We apologize for any inconvenience this may have
        caused you.
      </h4>

      <div className="flex flex-wrap mt-8 items-center justify-evenly">
        <Button
          onClick={handleGoBack}
          className="mt-8 w-96 mx-8"
          size="lg"
        >
          Go back to homepage
        </Button>
        <Button
          onClick={handleContactUs}
          className="mt-8 w-96 mx-8"
          style="secondary"
          size="lg"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccessfully;

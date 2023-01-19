import Image from "next/image";
import IM_Sample_food from "@/assets/images/food/1.png";
import Icon from "../icon";
import Button from "../button";

type TProps = {
  className?: string;
};

const Card = (props: TProps) => {
  const { className } = props;
  const STARS = [1, 2, 3, 4, 5]; // array represent for 5 start
  return (
    <div className={`rounded-3xl bg-gray/20 max-w-xs px-4 py-8 ${className}`}>
      <Image src={IM_Sample_food} alt="IM_Sample_food" />
      <h2 className="text-brown text-3xl text-center font-semibold">Spageti</h2>
      <div className="flex justify-center my-4">
        {STARS.map((star) => (
          <Icon className="mx-2" key={star} name="star" />
        ))}
      </div>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
        consequat mi eget auctor aliquam, diam.{" "}
      </p>
      <div className="flex mx-auto justify-evenly mt-4">
        <h2 className="text-2xl font-semibold">$12.05</h2>
        <Button type="secondary">Order Now</Button>
      </div>
    </div>
  );
};

export default Card;

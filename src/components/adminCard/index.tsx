import Image from "next/image";
import Icon from "../icon";
import Button from "../button";

interface IItem {
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  url: string;
  id: string;
}

interface IProps {
  data: IItem;
  className?: string;
  onDelete?: (data: IItem) => void;
}

const Card = (props: IProps) => {
  const { onDelete, className, data } = props;
  const { name, description, rating, price, category, url, id } = data;
  const STARS = [1, 2, 3, 4, 5]; // array represent for 5 start
  return (
    <div className={`rounded-3xl bg-gray/20 max-w-xs px-4 py-8 ${className}`}>
      <Image
        className="rounded-2xl w-60 h-40 object-cover mx-auto "
        width={300}
        height={400}
        src={process.env.NEXT_PUBLIC_S3_BASE_URL + url}
        alt="IM_Sample_food"
      />
      <h2 className="text-brown text-xl text-center mt-4 font-semibold">
        {name}
      </h2>
      <div className="flex justify-center my-4">
        {STARS.filter((star) => star <= rating).map((star) => (
          <Icon className="mx-2" key={star} name="star" />
        ))}
      </div>
      <p className="text-center text-sm">{description}</p>
      <div className="flex mx-auto justify-evenly mt-4">
        <h2 className="text-2xl font-semibold">${price}</h2>
        <Button
          onClick={() => onDelete && onDelete(data)}
          className="mx-4"
          style="dangerous"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card;

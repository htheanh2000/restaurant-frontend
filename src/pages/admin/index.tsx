import Card from "@/components/card";
import Navigation from "@/components/navigation";
import { initArray } from "@/utils/array";
import { Key, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  deleteDishAction,
  getMenuAction,
} from "@/store/features/menu/menuSlice";
import Pagination from "@/components/pagination";
import AdminCard from "@/components/adminCard";
import Modal from "@/components/modal";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateDish from "./create-dish";
interface ICategory {
  name: string;
  value: string;
}
const CATAGORIES: ICategory[] = [
  {
    name: "All catagory",
    value: "all",
  },
  {
    name: "Dinner",
    value: "dinner",
  },
  {
    name: "Lunch",
    value: "lunch",
  },
  {
    name: "Dessert",
    value: "dessert",
  },
  {
    name: "Drink",
    value: "drink",
  },
];

interface IItem {
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  url: string;
  id: string;
}

const Menu = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || CATAGORIES[0]?.value;
  const page = searchParams.get("page") || 1;
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.menu);
  const [itemDeleting, setItemDeleting] = useState<IItem | null>();
  const [isCreatingNewDish, setIsCreatingNewDish] = useState<boolean>(false);
  const LIMIT = 8;
  const { error } = useAppSelector((state) => state.menu);
  const [selected, setSelected] = useState(CATAGORIES[0]);
  useEffect(() => {
    const cate = CATAGORIES.find((c) => c.value === category);
    cate && setSelected(cate);
  }, [category]);

  useEffect(() => {
    const params = {
      page: page,
      limit: LIMIT,
    };
    fetchMenu(params);
  }, []);

  const onchangePage = (page: number) => {
    const params = {
      page: page,
      limit: LIMIT,
    };
    router.replace(`?category=${category}&page=${page}`, undefined, {
      shallow: true,
    });
    fetchMenu(params);
  };

  const onChooseCategory = (category: ICategory) => {
    setSelected(category);
    router.replace(`?category=${category.value}&page=${page}`, undefined, {
      shallow: true,
    });
  };

  const fetchMenu = async (params: unknown) => {
    return await dispatch(getMenuAction(params));
  };

  const handleToast = () => {
    if (error) {
      toast("Create a new dish failed!");
    } else {
      toast("Deleting a new dish succeeded!");
    }
  };

  const handleDeleteDish = async () => {
    await dispatch(deleteDishAction(itemDeleting?.id));
    handleToast();
    const params = {
      page: page,
      limit: LIMIT,
    };
    await fetchMenu(params);
    setItemDeleting(null);
  };

  const handleCreateDish = async () => {
    setIsCreatingNewDish(true);
  };

  const handleCloseCrateNewDish = async () => {
    setIsCreatingNewDish(false)
    const params = {
      page: page,
      limit: LIMIT,
    };
    fetchMenu(params)
  }
  return (
    <div className="mb-20 container mx-auto mt-32">
      <ToastContainer />
      <div className="flex justify-between">
        {CATAGORIES.map((catagory) => (
          <p
            onClick={() => onChooseCategory(catagory)}
            key={catagory.name}
            className={`cursor-pointer mx-2 font-light w-40 text-center py-3 ${
              selected?.name === catagory.name
                ? "bg-brown text-white"
                : "bg-gray/20 text-brown"
            } hover:bg-brown hover:text-white rounded-full `}
          >
            {catagory.name}
          </p>
        ))}
      </div>
      <div
        className="mt-16 justify-center grid mx-auto items-center max-tablet:grid-cols-1 
      max-desktop:grid-cols-2 grid-cols-3 gap-12"
      >
        {data.results.map((dish: any) => (
          <AdminCard
            key={dish.id}
            onDelete={setItemDeleting}
            className="mx-auto"
            data={dish}
          />
        ))}
        <div>
          <div
            onClick={handleCreateDish}
            className="flex flex-col items-center rounded-lg border-2 cursor-pointer
            border-gray border-dashed justify-center h-96 w-64"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 12.9999C11.1989 12.9999 11.3897 12.9209 11.5303 12.7802C11.671 12.6396 11.75 12.4488 11.75 12.2499V3.56038L14.969 6.78088C15.0387 6.85061 15.1215 6.90592 15.2126 6.94366C15.3037 6.9814 15.4014 7.00082 15.5 7.00082C15.5986 7.00082 15.6963 6.9814 15.7874 6.94366C15.8785 6.90592 15.9613 6.85061 16.031 6.78088C16.1007 6.71114 16.156 6.62836 16.1938 6.53725C16.2315 6.44614 16.2509 6.34849 16.2509 6.24988C16.2509 6.15126 16.2315 6.05361 16.1938 5.9625C16.156 5.87139 16.1007 5.78861 16.031 5.71888L11.531 1.21888C11.4613 1.14903 11.3786 1.09362 11.2874 1.05581C11.1963 1.018 11.0987 0.998535 11 0.998535C10.9013 0.998535 10.8037 1.018 10.7125 1.05581C10.6214 1.09362 10.5387 1.14903 10.469 1.21888L5.969 5.71888C5.82817 5.85971 5.74905 6.05071 5.74905 6.24988C5.74905 6.44904 5.82817 6.64005 5.969 6.78088C6.10983 6.92171 6.30084 7.00082 6.5 7.00082C6.69916 7.00082 6.89017 6.92171 7.031 6.78088L10.25 3.56038V12.2499C10.25 12.4488 10.329 12.6396 10.4697 12.7802C10.6103 12.9209 10.8011 12.9999 11 12.9999ZM0.5 16.7499C0.5 16.551 0.579018 16.3602 0.71967 16.2195C0.860322 16.0789 1.05109 15.9999 1.25 15.9999H20.75C20.9489 15.9999 21.1397 16.0789 21.2803 16.2195C21.421 16.3602 21.5 16.551 21.5 16.7499C21.5 16.9488 21.421 17.1396 21.2803 17.2802C21.1397 17.4209 20.9489 17.4999 20.75 17.4999H1.25C1.05109 17.4999 0.860322 17.4209 0.71967 17.2802C0.579018 17.1396 0.5 16.9488 0.5 16.7499Z"
                fill="black"
              />
            </svg>
            <p className="mb-2 pt-2 text-lg font-semibold text-center">
              {" "}
              Create New Dish
            </p>
          </div>
        </div>
      </div>
      {isCreatingNewDish && (
        <Modal>
          <div className="relative">
            <div onClick={() => setIsCreatingNewDish(false)} className="z-100 cursor-pointer outline outline-1 rounded-full hover:bg-green absolute top-4 right-4 w-fit ">
              <Icon size="lg" name="close"  />
            </div>
            <CreateDish onClose={handleCloseCrateNewDish}/>
          </div>
        </Modal>
      )}
      {itemDeleting ? (
        <Modal>
          <h3 className="text-heading-3 py-4 font-bold w-fit mx-auto text-center text-black">
            Do you want to delete {itemDeleting.name} ?
          </h3>
          <div className="w-full border-b-2 h-1  border-gray " />
          <div className={`rounded-3xl  px-4 mt-4 `}>
            <Image
              className="rounded-2xl w-60 h-40 object-cover mx-auto "
              width={300}
              height={400}
              src={process.env.NEXT_PUBLIC_S3_BASE_URL + itemDeleting.url}
              alt="IM_Sample_food"
            />
            <h2 className="text-brown text-xl text-center mt-4 font-semibold">
              {itemDeleting.name}
            </h2>
            <p className="text-center text-sm">{itemDeleting.description}</p>
          </div>
          <div className="flex justify-evenly p-4">
            <Button
              onClick={() => setItemDeleting(null)}
              style="primary"
              className="mr-4"
            >
              Close
            </Button>
            <Button onClick={handleDeleteDish} style="dangerous">
              Delete
            </Button>
          </div>
        </Modal>
      ) : null}

      {/* <Navigation className="mt-16 mx-auto w-fit" /> */}
      <Pagination
        className="w-fit mx-auto"
        currentPage={data.page}
        totalCount={data.totalResults}
        pageSize={data.limit}
        onPageChange={onchangePage}
        siblingCount={1}
      />
    </div>
  );
};





export default Menu;

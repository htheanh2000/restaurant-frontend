import Card from "@/components/card";
import Navigation from "@/components/navigation";
import { initArray } from "@/utils/array";
import { Key, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getMenuAction } from "@/store/features/menu/menuSlice";
import Pagination from "@/components/pagination";

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

const Menu = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || CATAGORIES[0]?.value;
  const page = searchParams.get("page") || 1;
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.menu);
  const LIMIT = 8
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

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

  const fetchMenu = (params: unknown) => {
    dispatch(getMenuAction(params));
  };
  return (
    <div className="mb-20">
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
        {data.results.map((dish: any, index: Key | null | undefined) => (
          <Card className="mx-auto" {...dish} key={index} />
        ))}
      </div>

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

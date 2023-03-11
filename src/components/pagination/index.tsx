import { usePagination, DOTS } from '../../hooks/usePagination';
import Icon from '../icon';

type Props = {
  onPageChange: (arg0: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange:  (any)  = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });


  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={`flex list-none justify-center mt-8 ${className}`}
    >
      {/* Left navigation arrow */}
      <li
        className={`w-10 h-10 text-bold text-xl flex justify-center items-center text-white text-center m-2 bg-orange rounded cursor-pointer ${
          currentPage === 1 ? 'pointer-events-none text-gray-400' : 'hover:bg-green'
        }`}
        onClick={onPrevious}
      >
        <Icon name='left' className="w-4 h-4" />
      </li>

      {paginationRange.map((pageNumber: any) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        // if (pageNumber === DOTS) {
        //   return (
        //     <li
        //       key={pageNumber}
        //       className="p-2 h-8 text-center m-2 cursor-default"
        //     >
        //       ...
        //     </li>
        //   );
        // }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={`w-10 h-10 text-bold text-xl flex justify-center items-center text-white text-center m-2 rounded cursor-pointer ${
              pageNumber === currentPage
                ? 'bg-green'
                : 'bg-orange hover:bg-green'
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber} 
          </li>
        );
      })}

      {/* Right Navigation arrow */}
      <li
        className={`w-10 h-10 text-bold text-xl flex justify-center items-center text-white text-center m-2 bg-orange rounded cursor-pointer  ${
          currentPage === lastPage ? 'pointer-events-none text-gray-400' : 'hover:bg-green'
        }`}
        onClick={onNext}
      >
        <Icon name='right' className="w-4 h-4" />
      </li>
    </ul>
  );
};

export default Pagination;
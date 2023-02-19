import React, { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface Props extends Partial<ReactDatePickerProps> {
  className?: string;
}
const CustomDatePicker = (props: Props) => {
  const { className,placeholderText = 'Date', ...rest } = props;
  const [startDate, setStartDate] = useState<Date>();
  return (
    <DatePicker
    placeholderText={placeholderText}
    className={`w-full px-4 py-3 cursor-pointer base-text
    text-gray outline rounded  outline-1 outline-gray 
    focus:outline-primary ${className}`} 
    selected={startDate} 
    {...rest}
    minDate={new Date()}
     onChange={(date) => date && setStartDate(date)} 
     />
  );
};

export default CustomDatePicker
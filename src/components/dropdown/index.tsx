import { useState } from 'react';

type Props = {
    className?: string;
    options?: Option[]
    placeholder?: string;
}

export type Option = {
    value: unknown,
    label: string
}

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<Option>()
  const {options = [], placeholder = 'Select option'} = props;

  const {className} = props

    const onchange = (option: Option) => {
        setIsOpen(false)
        setValue(option)
    }
  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full px-4 py-3 cursor-pointer base-text text-gray outline rounded  outline-1 outline-gray focus:outline-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value.label : placeholder}
      </div>
      {isOpen && (
        <div className={`absolute z-10 rounded-md shadow-lg
         bg-white ring-1 ring-black ring-opacity-5`}>
          {options.map((option) => (
            <p
              onClick={() => onchange(option)}
              key={option.label}
              className="cursor-pointer block px-4 py-2 font-normal text-base hover:bg-orange/50"
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

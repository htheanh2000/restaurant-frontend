import { forwardRef, HTMLInputTypeAttribute, useImperativeHandle, useRef } from 'react'

type Props = {
  placeholder?: string
  label?: string
  className?: string
  name?: string
  onChange?: () => void
  type?: HTMLInputTypeAttribute
  defaultValue?: string
}

const Input = forwardRef((props: Props, ref, ) => {
  const { placeholder, label, className, onChange, name, type , defaultValue } = props
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    value: inputRef?.current?.value,
  }))

  return (
    <div className={`${className}`}>
      <label htmlFor={label} className="lead">
        {label}
      </label>
      <div className="mt-4">
        <input
          onChange={onChange}
          type={type}
          id={label}
          name={name}
          ref={inputRef}
          className={`w-full px-4 py-2 cursor-pointer base-text text-gray outline rounded  outline-1 outline-gray focus:outline-primary`}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  )
})

export default Input

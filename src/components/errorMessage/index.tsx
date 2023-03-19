import { ErrorMessage } from 'formik'

interface Props {
  name: string
  className?: string
}

const Error = (props: Props) => {
  return (
    <>
      <ErrorMessage
        name={props.name}
        component="div"
        className={` capitalize px-4 py-3 mt-3 ring-1 ring-red-400
              rounded bg-red-100 text-red text-xs ${props.className}`}
      />
    </>
  )
}

export default Error

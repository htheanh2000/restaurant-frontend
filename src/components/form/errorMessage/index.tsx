import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Error = ({children}: Props) => {
  return (
      <div className="px-4 py-3 mt-3 outline outline-1 outline-red-400 
                rounded bg-red-100 text-red-900 text-xs">{children}</div>
  )
}

export default Error

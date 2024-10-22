import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className: React.ReactNode;
}

export default function Button({className,...rest}: ButtonProps) {
  return (
    <button
    className={`flex  h-10 justify-center items-center rounded-lg bg-[rgba(57,205,204,1)] font-medium text-white ${className}`}
    {...rest}
    />
  )
}

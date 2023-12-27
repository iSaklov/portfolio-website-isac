type Variants = {
  primary: string
  secondary: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof Variants
  children: React.ReactNode
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  const styles: Variants = {
    primary:
      'border border-transparent bg-primary-dark text-white active:bg-accent-orange enabled:hover:bg-highlight-gray disabled:bg-light-gray disabled:text-mid-gray',
    secondary:
      'text-primary-dark disabled:text-mid-gray enabled:hover:animate-[wiggle_1s_ease-in-out_infinite]'
  }

  return (
    <button
      className={`relative flex items-center justify-center px-12 py-3 text-center transition-all duration-200 focus:z-10 focus:outline-none focus:ring-4 disabled:pointer-events-none md:px-16 md:py-4 ${styles[variant]} ${className}`}
      {...props}
    >
      <span className='text-base font-light lg:text-[1.375rem]'>
        {children}
      </span>
    </button>
  )
}

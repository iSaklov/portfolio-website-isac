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
      'bg-primary-dark text-white disabled:bg-light-gray disabled:text-mid-gray enabled:hover:bg-highlight-gray enabled:active:scale-95 transition',
    secondary:
      'ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] tracking-normal transition-all enabled:active:scale-90 enabled:active:tracking-widest enabled:hover:tracking-widest before:pointer-events-none before:top-0 before:absolute before:h-px before:bg-primary-dark before:block before:w-0 before:left-1/2 enabled:before:hover:w-full enabled:before:hover:left-0 after:pointer-events-none after:bottom-0 after:absolute after:h-px after:bg-primary-dark after:block after:w-0 after:left-1/2 enabled:after:hover:w-full enabled:after:hover:left-0 before:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] after:duration-[400ms] before:duration-[400ms] enabled:before:active:w-full enabled:before:active:left-0 enabled:after:active:w-full enabled:after:active:left-0'
  }

  return (
    <button
      className={`relative max-w-64 select-none border-none bg-none px-12 py-3 text-base font-light text-inherit disabled:pointer-events-none md:max-w-72 md:text-lg xl:max-w-80 xl:text-xl ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

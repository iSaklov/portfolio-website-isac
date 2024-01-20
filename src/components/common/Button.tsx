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
      'bg-primary-dark text-white disabled:bg-light-gray disabled:text-mid-gray enabled:hover:bg-highlight-gray enabled:active:bg-accent-orange',
    secondary:
      'tracking-normal transition-all duration-300 ease-in-out before:relative before:block before:backface-hidden before:bottom-0 before:mx-auto before:mb-2 before:w-0 before:border before:border-solid before:border-primary-dark before:opacity-0 before:transition-all before:duration-300 before:ease-in-out after:relative after:block after:backface-hidden after:bottom-0 after:mx-auto after:mt-2 after:w-0 after:border after:border-solid after:border-primary-dark after:opacity-0 after:transition-all after:duration-300 after:ease-in-out enabled:active:tracking-widest enabled:active:before:-left-[10%] enabled:active:before:w-[120%] enabled:active:before:opacity-100 enabled:active:after:-left-[10%] enabled:active:after:w-[120%] enabled:active:after:opacity-100 md:enabled:hover:tracking-widest md:enabled:hover:before:-left-[10%] md:enabled:hover:before:w-[120%] md:enabled:hover:before:opacity-100 md:enabled:hover:after:-left-[10%] md:enabled:hover:after:w-[120%] md:enabled:hover:after:opacity-100'
  }

  return (
    <button
      className={`relative w-full max-w-[240px] border border-transparent px-6 py-3 text-center text-base font-light focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none md:max-w-[260px] md:px-8 md:py-4 md:text-lg xl:max-w-[280px] xl:text-xl ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

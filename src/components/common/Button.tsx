type Variants = {
  primary: string
  secondary: string
}

interface ButtonProps {
  variant: keyof Variants
  type: 'submit' | 'button' | 'reset'
  children: React.ReactNode
}

export default function Button({ variant, type, children }: ButtonProps) {
  const styles: Variants = {
    primary:
      'bg-primary-dark hover:bg-service-gray target:bg-highlight-gray target:border-accent-orange target:border-2 disabled:bg-light-gray disabled:cursor-not-allowed disabled:text-mid-gray active:bg-accent-orange text-white',
    secondary:
      'text-primary-dark target:border-accent-orange target:border-2 disabled:cursor-not-allowed disabled:text-mid-gray hover:underline hover:underline-offset-8 active:decoration-accent-orange'
  }

  return (
    <button type={type} className={`w-72 py-5 ${styles[variant]}`}>
      <span className='__poppins_light_high'>{children}</span>
    </button>
  )
}

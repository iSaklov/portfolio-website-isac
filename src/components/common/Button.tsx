interface TypeVariants {
  primary: string
  secondary: string
}

const typeVariants: TypeVariants = {
  primary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
  secondary: 'bg-gray-400 hover:bg-gray-100 focus:ring-gray-500'
}

export default function Button({
  type,
  children
}: {
  type: keyof TypeVariants
  children: React.ReactNode
}) {
  return (
    <button
      className={`inline-flex items-center rounded-md border border-transparent ${typeVariants[type]}`}
    >
      {children}
    </button>
  )
}

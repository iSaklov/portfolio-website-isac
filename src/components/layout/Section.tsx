export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className='container mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24 lg:max-w-7xl lg:px-8 lg:py-32'
    >
      <div className='mb-20 text-center'>
        <h2 className='font-serif text-[2.75rem] font-normal md:text-5xl lg:text-7xl'>{`${title.toLowerCase()}.`}</h2>
        {subtitle && (
          <h3 className='text-lg font-extralight leading-snug md:text-xl lg:text-3xl'>
            {subtitle}
          </h3>
        )}
      </div>
      {children}
    </section>
  )
}

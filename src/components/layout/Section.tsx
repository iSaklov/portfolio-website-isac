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
    <section id={id} className='w-full bg-white'>
      <div className='container mx-auto max-w-3xl px-4 pb-16 pt-20 md:px-6 md:pb-20 md:pt-24 lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-28'>
        <div className='text-center'>
          <h2 className='font-serif text-[2.75rem] font-normal md:text-5xl lg:text-7xl'>{`${title.toLowerCase()}.`}</h2>
          {subtitle && (
            <h3 className='text-lg font-extralight leading-snug md:text-xl lg:text-3xl'>
              {subtitle}
            </h3>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

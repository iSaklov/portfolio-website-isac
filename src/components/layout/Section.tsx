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
      className='container mx-auto my-20 min-h-screen max-w-7xl px-1'
    >
      <div className='mb-20 text-center'>
        <h2 className='__heading-2'>{`${title.toLowerCase()}.`}</h2>
        {subtitle && <h3 className='__heading-3'>{subtitle}</h3>}
      </div>
      {children}
    </section>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <>
      <Link href='/projects'>Projects</Link>
      <h1>Hello Next.js</h1>
    </>
  )
}

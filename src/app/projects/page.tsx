import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <h1>Hello, Project Page!</h1>
      <Suspense fallback={<p>Loading feed...</p>}>{/* <Feed /> */}</Suspense>
    </>
  )
}

import Link from 'next/link'

interface Post {
  id: number
  slug: string
  title: string
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/projects/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}

// 'use client'

// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// export function Links() {
//   const pathname = usePathname()

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`link ${pathname === '/about' ? 'active' : ''}`}
//             href='/about'
//           >
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

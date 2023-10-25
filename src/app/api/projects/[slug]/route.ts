export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug // 'a', 'b', or 'c'
}

// export async function GET(request: Request) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,

//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//     }
//   })
//   const data = await res.json()
//   return Response.json({ data })
// }

// import { table, minifyItems } from '@/database/airtable'

// export default async (_req, res) => {
//   try {
//     const records = await table.select({}).firstPage()
//     const minfiedItems = minifyItems(records)
// 		res.status(200).json(minfiedItems)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ msg: 'Something went wrong! 😕' })
//   }
// }

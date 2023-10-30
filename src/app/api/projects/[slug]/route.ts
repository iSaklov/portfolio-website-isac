import { table, getMinifiedItem } from '@/database/airtable'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id // 'a', 'b', or 'c'

  try {
    const record = await table.find(id)
    const minifiedRecord = getMinifiedItem(record)

    return Response.json(minifiedRecord)
  } catch (error) {
    console.error(error)

    return Response.json(error)
  }
}

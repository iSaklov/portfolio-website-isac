import { NextResponse } from 'next/server'
import { table, minifyItems } from '@/database/airtable'

export async function GET () {
  try {
    const records = await table.select({}).firstPage();
		const minifiedRecords = minifyItems(records);

		return Response.json(minifiedRecords)
  } catch (error) {
    console.error(error);

		// return Response.json(error)

		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

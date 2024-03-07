import {
  base,
  RecordDataType,
  RecordType,
  projectRecordType,
  techRecordType
} from './airtable'

export const getTable = <T extends RecordDataType, U>(
  recordType: RecordType<T, U>
) => {
  if (recordType.isType === projectRecordType.isType) {
    // Reference a Projects table
    return base(process.env.AIRTABLE_PROJECTS_TABLE_ID)
  } else if (recordType.isType === techRecordType.isType) {
    // Reference a Tech table
    return base(process.env.AIRTABLE_TECH_STACK_TABLE_ID)
  }
}

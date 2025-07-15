export interface ExtractedData {
  entities: {
    names: string[]
    dates: string[]
    addresses: string[]
    phoneNumbers: string[]
  }
  tables: Array<{
    headers: string[]
    rows: string[][]
  }>
  formFields: Record<string, string>
  documentStructure: {
    title?: string
    sections: string[]
  }
}

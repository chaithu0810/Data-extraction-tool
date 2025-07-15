import type { ExtractedData } from "@/types/extractedData"

export const mockExtractedData: ExtractedData = {
  entities: {
    names: ["John Doe", "Jane Smith", "ABC Corporation"],
    dates: ["01/15/2024", "12/31/2023", "March 15, 2024"],
    addresses: ["123 Main St, New York, NY 10001", "456 Oak Ave, Los Angeles, CA 90210"],
    phoneNumbers: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  tables: [
    {
      headers: ["Item", "Description", "Quantity", "Price", "Total"],
      rows: [
        ["Widget A", "Premium widget with advanced features", "2", "$25.00", "$50.00"],
        ["Service B", "Professional consultation service", "1", "$100.00", "$100.00"],
        ["Product C", "Standard product package", "3", "$15.00", "$45.00"],
      ],
    },
  ],
  formFields: {
    "Invoice Number": "INV-2024-001",
    "Customer Name": "John Doe",
    "Due Date": "02/15/2024",
    "Total Amount": "$195.00",
    "Payment Terms": "Net 30",
  },
  documentStructure: {
    title: "Invoice Document",
    sections: [
      "Header Information",
      "Customer Details",
      "Itemized Services",
      "Payment Information",
      "Terms and Conditions",
    ],
  },
}

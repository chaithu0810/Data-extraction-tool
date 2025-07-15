"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertCircle, Database } from "lucide-react"
import type { ExtractedData } from "@/types/extractedData"

interface Props {
  data: ExtractedData | null
}

export default function ExtractedDataView({ data }: Props) {
  if (!data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Extracted Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-gray-500">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Upload and process a document to see extracted data</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          Extracted Data
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 max-h-96 overflow-y-auto text-xs">
        <div>
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Entities</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="font-medium">Names:</span>
              <ul className="list-disc list-inside ml-2 text-gray-600">
                {data.entities.names.map((name, i) => <li key={i}>{name}</li>)}
              </ul>
            </div>
            <div>
              <span className="font-medium">Dates:</span>
              <ul className="list-disc list-inside ml-2 text-gray-600">
                {data.entities.dates.map((date, i) => <li key={i}>{date}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Tables</h4>
          {data.tables.map((table, i) => (
            <div key={i} className="overflow-x-auto mb-2">
              <table className="w-full text-xs border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    {table.headers.map((h, j) => (
                      <th key={j} className="border px-2 py-1">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, j) => (
                    <tr key={j}>
                      {row.map((cell, k) => <td key={k} className="border px-2 py-1">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Form Fields</h4>
          {Object.entries(data.formFields).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-600">{key}:</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Raw JSON Output</h4>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-xs">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

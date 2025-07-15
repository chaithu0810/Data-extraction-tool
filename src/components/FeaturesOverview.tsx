"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FileText, Database, CheckCircle, ArrowRight } from "lucide-react"

export default function FeaturesOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Supported Extraction Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <FileText className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h4 className="font-semibold">Text Entities</h4>
            <p className="text-sm text-gray-600">Names, dates, addresses, phone numbers</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <Database className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <h4 className="font-semibold">Table Data</h4>
            <p className="text-sm text-gray-600">Headers, rows, structured table content</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <h4 className="font-semibold">Form Fields</h4>
            <p className="text-sm text-gray-600">Key-value pairs from forms</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <ArrowRight className="w-8 h-8 mx-auto mb-2 text-orange-500" />
            <h4 className="font-semibold">Document Structure</h4>
            <p className="text-sm text-gray-600">Hierarchy, sections, organization</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

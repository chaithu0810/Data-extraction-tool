"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import PipelineFlow from "@/components/PipelineFlow"
// Also import UploadSection, ExtractedDataView, FeaturesOverview if modularized

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Data Extraction Tool</h1>
          <p className="text-lg text-gray-600">
            Extract structured data from PDF documents and images using advanced OCR technology
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Extraction Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PipelineFlow />
          </CardContent>
        </Card>

        {/* UploadSection, ExtractedDataView, FeaturesOverview go here */}
      </div>
    </div>
  )
}

"use client"

import { Upload, FileText, Database } from "lucide-react"
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState } from "reactflow"
import "reactflow/dist/style.css"

const initialNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 50, y: 100 },
    data: {
      label: (
        <div className="flex items-center gap-2 p-4">
          <Upload className="w-6 h-6 text-blue-500" />
          <div>
            <div className="font-semibold">Document Input</div>
            <div className="text-sm text-gray-500">PDF/Image Upload</div>
          </div>
        </div>
      ),
    },
    style: { width: 200, height: 80 },
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: {
      label: (
        <div className="flex items-center gap-2 p-4">
          <FileText className="w-6 h-6 text-orange-500" />
          <div>
            <div className="font-semibold">OlmOCR Processing</div>
            <div className="text-sm text-gray-500">Text & Structure Extraction</div>
          </div>
        </div>
      ),
    },
    style: { width: 200, height: 80 },
  },
  {
    id: "3",
    type: "output",
    position: { x: 650, y: 100 },
    data: {
      label: (
        <div className="flex items-center gap-2 p-4">
          <Database className="w-6 h-6 text-green-500" />
          <div>
            <div className="font-semibold">Structured Output</div>
            <div className="text-sm text-gray-500">JSON Data</div>
          </div>
        </div>
      ),
    },
    style: { width: 200, height: 80 },
  },
]

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 2 },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 2 },
  },
]

export default function PipelineFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="h-64 border rounded-lg bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}


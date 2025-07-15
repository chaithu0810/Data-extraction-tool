
import React, { useState } from 'react';
import './styles.css';
import FileUpload from './components/FileUpload';
import PipelineFlow from './components/PipelineFlow';
import OutputPanel from './components/OutputPanel';

function App() {
  const [extractedData, setExtractedData] = useState(null);

  return (
    <div className="container">
      <h1>📄 OlmOCR Data Extractor</h1>
      <FileUpload onResult={setExtractedData} />
      <div className="main-content">
        <PipelineFlow />
        {extractedData && <OutputPanel data={extractedData} />}
      </div>
    </div>
  );
}

export default App;




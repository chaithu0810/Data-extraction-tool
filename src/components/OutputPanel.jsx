outpanel
import React from 'react';

const OutputPanel = ({ data }) => {
  return (
    <div className="output-panel">
      <h3>Extracted JSON Output:</h3>
      <pre style={{ background: '#f4f4f4', padding: '10px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default OutputPanel;
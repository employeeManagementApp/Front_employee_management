import React, { useState } from 'react';
import './ProgressBar.css'; 

const ProgressBar = ({ percentage }) => {
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;

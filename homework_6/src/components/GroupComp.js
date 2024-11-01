import React, { useState } from 'react';
import { useBlender } from '../context/BlenderContext';

const GroupComp = ({ node, path = [] }) => {
  const { toggleNumber, selectedNumbers } = useBlender();
  const [expanded, setExpanded] = useState(false);

  const handleGroupClick = () => {
    if (node.children || node.numbers) {
      setExpanded(!expanded);
    }
  };

  const handleNumberClick = (num) => {
    toggleNumber(num);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h3 onClick={handleGroupClick} style={{ cursor: 'pointer' }}>
        {node.label}
      </h3>
      
      {expanded && node.children && node.children.map((childNode, index) => (
        <GroupComp key={index} node={childNode} path={[...path, node.label]} />
      ))}

      {expanded && node.numbers && (
        <div style={{ marginLeft: '20px' }}>
          {node.numbers.map((num, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(num)}
              style={{
                backgroundColor: selectedNumbers.includes(num) ? 'lightblue' : 'white'
              }}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupComp;

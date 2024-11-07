import React, { useState } from 'react';
import { useBlender } from '../context/BlenderContext';

interface Node {
  label: string;
  children?: Node[];
  numbers?: number[];
}

const GroupComp = ({ node, path = [] }: { node: Node, path?: string[] }) => {
  const { toggleNumber, selectedNumbers } = useBlender();
  const [expanded, setExpanded] = useState(false);

  const handleGroupClick = () => {
    if (node.children || node.numbers) {
      setExpanded(!expanded);
    }
  };

  const handleNumberClick = (num: number) => {
    toggleNumber(num);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h3 onClick={handleGroupClick} style={{ cursor: 'pointer' }}>
        {node.label}
      </h3>
      
      {expanded && node.children && node.children.map((childNode: Node, index: number) => (
        <GroupComp key={index} node={childNode} path={[...path, node.label]} />
      ))}

      {expanded && node.numbers && (
        <div style={{ marginLeft: '20px' }}>
          {node.numbers.map((num: number, index: number) => (
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
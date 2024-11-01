import React, { useState } from 'react';
import { useBlender } from '../context/BlenderContext';

const ResultComp = () => {
  const { selectedNumbers } = useBlender();
  const [operation, setOperation] = useState('sum');

  const calculateResultComp = () => {
    if (selectedNumbers.length === 0) return 0;

    switch (operation) {
      case 'sum':
        return selectedNumbers.reduce((acc, num) => acc + num, 0);
      case 'product':
        return selectedNumbers.reduce((acc, num) => acc * num, 1);
      default:
        return 0;
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Результат комбинирования:</h2>
      
      <div>
        <label>
          <input
            type="radio"
            value="sum"
            checked={operation === 'sum'}
            onChange={() => setOperation('sum')}
          /> Сумма
        </label>
        <label>
          <input
            type="radio"
            value="product"
            checked={operation === 'product'}
            onChange={() => setOperation('product')}
          /> Произведение
        </label>
      </div>

      <p>
        {selectedNumbers.length > 0 
          ? `${selectedNumbers.join(' + ')} -> ${calculateResultComp()}` 
          : 'Не выбрано ни одного числа'}
      </p>
    </div>
  );
};

export default ResultComp;
import React from 'react';
import NumberSelector from './components/NumberSelector';
import OperationSelector from './components/OperationSelector';
import ResultComp from './components/ResultComp';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Блендер чисел с MobX</h1>
    <NumberSelector />
    <OperationSelector />
    <ResultComp />
  </div>
);

export default App;
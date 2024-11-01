import React from 'react';
import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/BlenderStore';

const OperationSelector = observer(() => (
  <div>
    <h3>Выберите операцию:</h3>
    <label>
      <input
        type="radio"
        value="sum"
        checked={blenderStore.operation === 'sum'}
        onChange={() => blenderStore.setOperation('sum')}
      />
      Сумма
    </label>
    <label>
      <input
        type="radio"
        value="product"
        checked={blenderStore.operation === 'product'}
        onChange={() => blenderStore.setOperation('product')}
      />
      Произведение
    </label>
  </div>
));

export default OperationSelector;
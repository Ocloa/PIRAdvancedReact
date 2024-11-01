import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/BlenderStore';

const NumberSelector = observer(() => {
  const numbers = [1, 2, 3, 4, 5]; // Пример чисел для выбора

  return (
    <div>
      <h3>Выберите числа:</h3>
      {numbers.map(num => (
        <button
          key={num}
          onClick={() => blenderStore.toggleNumber(num)}
          style={{
            backgroundColor: blenderStore.selectedNumbers.includes(num) ? 'lightblue' : 'white',
            margin: '5px'
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
});

export default NumberSelector;
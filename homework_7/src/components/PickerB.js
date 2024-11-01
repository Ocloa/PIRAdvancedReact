import React from 'react';
import { useBlender } from '../context/BlenderContext';

const PickerB = () => {
    const { selectB } = useBlender();
    const numbersB = [6, 7, 8, 9, 10]; // Пример чисел для выбора

    return (
        <div>
            <h2>Выберите число B</h2>
            {numbersB.map((num, index) => (
                <button key={index} onClick={() => selectB(num)}>
                    {num}
                </button>
            ))}
        </div>
    );
};

export default PickerB;
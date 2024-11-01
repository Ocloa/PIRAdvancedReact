import React from 'react';
import { useBlender } from '../context/BlenderContext';

const PickerA = () => {
    const { selectA } = useBlender();
    const numbersA = [1, 2, 3, 4, 5]; // Пример чисел для выбора

    return (
        <div>
            <h2>Выберите число A</h2>
            {numbersA.map((num, index) => (
                <button key={index} onClick={() => selectA(num)}>
                    {num}
                </button>
            ))}
        </div>
    );
};

export default PickerA;
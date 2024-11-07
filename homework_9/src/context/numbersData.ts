export const numberTree = {
    label: 'Все числа',
    children: [
      {
        label: 'Положительные',
        children: [
          { label: 'Четные', numbers: [0, 4, 6] },
          { label: 'Нечетные', numbers: [1, 3] }
        ]
      },
      {
        label: 'Отрицательные',
        children: [
          { label: 'Четные', numbers: [-2] },
          { label: 'Нечетные', numbers: [-5] }
        ]
      }
    ]
  };
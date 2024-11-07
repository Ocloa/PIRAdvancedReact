import { blenderStore } from './BlenderStore';
import { IBlenderStore } from './IBlenderStore';

describe('BlenderStore', () => {
  let store: IBlenderStore;

  beforeEach(() => {
    store = blenderStore;
  });

  test('добавление и удаление чисел', () => {
    store.toggleNumber(5);
    expect(store.selectedNumbers).toContain(5);

    store.toggleNumber(5);
    expect(store.selectedNumbers).not.toContain(5);
  });

  test('выбор операции', () => {
    store.setOperation('product');
    expect(store.operation).toBe('product');

    store.setOperation('sum');
    expect(store.operation).toBe('sum');
  });

  test('вычисление результата для суммы', () => {
    store.setOperation('sum');
    store.toggleNumber(2);
    store.toggleNumber(3);
    expect(store.result).toBe(5);
    store.toggleNumber(2);
    store.toggleNumber(3);
    expect(store.result).toBe(0)
  });

  test('вычисление результата для произведения', () => {
    store.setOperation('product');
    store.toggleNumber(3);
    store.toggleNumber(2);
    expect(store.result).toBe(6);
  });
});
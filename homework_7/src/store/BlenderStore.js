import { makeAutoObservable } from 'mobx';

class BlenderStore {
  selectedNumbers = [];
  operation = 'sum';

  constructor() {
    makeAutoObservable(this);
  }

  toggleNumber(number) {
    if (this.selectedNumbers.includes(number)) {
      this.selectedNumbers = this.selectedNumbers.filter(num => num !== number);
    } else {
      this.selectedNumbers.push(number);
    }
  }

  setOperation(operation) {
    this.operation = operation;
  }

  get result() {
    if (this.selectedNumbers.length === 0) return 0;

    switch (this.operation) {
      case 'sum':
        return this.selectedNumbers.reduce((acc, num) => acc + num, 0);
      case 'product':
        return this.selectedNumbers.reduce((acc, num) => acc * num, 1);
      default:
        return 0;
    }
  }
}

export const blenderStore = new BlenderStore();
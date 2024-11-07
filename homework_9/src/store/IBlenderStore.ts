export interface IBlenderStore {
    selectedNumbers: number[];
    operation: string;
    toggleNumber: (num: number) => void;
    setOperation: (op: string) => void;
    result: number;
}
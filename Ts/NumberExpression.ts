// NumberExpression.ts
import { Expression } from './Expression';

export class NumberExpression implements Expression {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    interpret(context: string): number {
        return this.number;
    }
}

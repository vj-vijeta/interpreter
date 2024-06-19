// AdditionExpression.ts
import { Expression } from './Expression';

export class AdditionExpression implements Expression {
    private leftExpression: Expression;
    private rightExpression: Expression;

    constructor(leftExpression: Expression, rightExpression: Expression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }

    interpret(context: string): number {
        return this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
    }
}

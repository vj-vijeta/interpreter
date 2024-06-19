// InterpreterContext.ts
import { Expression } from './Expression';
import { NumberExpression } from './NumberExpression';
import { AdditionExpression } from './AdditionExpression';
import { SubtractionExpression } from './SubtractionExpression';

export class InterpreterContext {
    private expressionTree: Expression;

    constructor(expression: string) {
        this.expressionTree = this.buildExpressionTree(expression);
    }

    private buildExpressionTree(expression: string): Expression {
        const tokens = expression.split(' ');
        const stack: Expression[] = [];

        for (let token of tokens) {
            if (!isNaN(Number(token))) {
                stack.push(new NumberExpression(Number(token)));
            } else if (token === '+') {
                const right = stack.pop();
                const left = stack.pop();
                stack.push(new AdditionExpression(left!, right!));
            } else if (token === '-') {
                const right = stack.pop();
                const left = stack.pop();
                stack.push(new SubtractionExpression(left!, right!));
            }
        }

        return stack.pop()!;
    }

    interpret(): number {
        return this.expressionTree.interpret('');
    }
}

// index.ts
import { InterpreterContext } from './InterpreterContext';

const expression = "3 4 + 2 -"; // Equivalent to (3 + 4) - 2
const context = new InterpreterContext(expression);
const result = context.interpret();

console.log(`Result: ${result}`); // Output: Result: 5

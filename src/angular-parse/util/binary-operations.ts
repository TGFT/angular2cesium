export const BinaryOperations = new Map<string, any>([
    ['==', (left: any, right: any) => left == right],
    ['===', (left: any, right: any) => left === right],
    ['!=', (left: any, right: any) => left != right],
    ['!==', (left: any, right: any) => left !== right],
    ['&&', (left: any, right: any) => left && right],
    ['||', (left: any, right: any) => left || right],
    ['+', (left: any, right: any) => left + right],
    ['-', (left: any, right: any) => left - right],
    ['/', (left: any, right: any) => left / right],
    ['*', (left: any, right: any) => left * right],
    ['%', (left: any, right: any) => left % right],
    ['<', (left: any, right: any) => left < right],
    ['<=', (left: any, right: any) => left <= right],
    ['>', (left: any, right: any) => left > right],
    ['>=', (left: any, right: any) => left >= right],
]);

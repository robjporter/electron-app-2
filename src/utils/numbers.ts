export const either = (f: Function, g: Function) => (...args: any[]) => f(...args) || g(...args);
export const numberRandom = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const isEven = (num: number) => num % 2 === 0;
export const isPositive = (num: number) => num > 0;
export const isPositiveOrEven = either(isPositive, isEven);
export const numberToSafeInteger = (num:number) => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

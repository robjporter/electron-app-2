export const norm = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export function optionalize<T, R>(fn: (arg: T) => R): (arg?: T) => R | undefined {return (arg?: T): R | undefined => (arg === undefined ? undefined : fn(arg));}
export const mergeArrs = (...args) => args.reduce((a, b) => a.map((v, i) => ({ ...v, ...b[i] })));
export function flatten<U>(source: U[][]): U[] { return (<U[]>[]).concat(...source); } 
export type Func<T = any> = (...args: T[]) => any;
export type Predicate = (...item: any[]) => boolean;

// Tested
export const arrayCast = (val: any): any[] => Array.isArray(val) ? val : [val];

// Todo
export const arrayMerge = (...args:any[]) => args.reduce((a, b) => a.map((v:any, i:any) => ({ ...v, ...b[i] })));
export const arrayFromCSV = (data: string, delimiter = ",", omitFirstRow = false) => data.slice(omitFirstRow ? data.indexOf("\n") + 1 : 0).split("\n").map((v) => v.split(delimiter));
export const arrayToCSV = (arr: (string | number)[][], delimiter = ",") => arr.map((v) => v.map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)).join("\n");
export const uniqueBy = (arr: any[], fn: Predicate) =>arr.reduce((acc, v) => {if (!acc.some((x: any) => fn(v, x))) acc.push(v); return acc;}, []);
export const arrayDeepFlatten = (arr: any[]): any[] => { if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity); return [].concat(...arr.map((v: any) => (Array.isArray(v) ? arrayDeepFlatten(v) : v))); };
export const arrayCountBy = <T = any>(arr: T[], fn: Func<T> | string) => {const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];return arr.reduce((acc, val) => {const value = mapper(val);acc[value] = (acc[value] || 0) + 1;return acc;}, {} as any);};
export const ArrayCountValues = <T = any>(arr: T[], val: T) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Unsure how to test
// export const arrayChunk = (arr: any[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) => arr.slice(i * size, i * size + size));
// export function arrayFlatten<U>(source: U[][]): U[] { return (<U[]>[]).concat(...source); } 

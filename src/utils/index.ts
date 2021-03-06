export * from './arrays';
export * from "./conversion";
export * from "./numbers";
export * from "./strings";

export type Func<T = any> = (...args: T[]) => any;
export type StringMap<T = string> = { [key: string]: T };
type ConstructorType<T = any> = new (...args: any[]) => T;
export type Predicate = (...item: any[]) => boolean;

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export function optionalize<T, R>(fn: (arg: T) => R): (arg?: T) => R | undefined {return (arg?: T): R | undefined => (arg === undefined ? undefined : fn(arg));}
export const attempt = (fn: (...args: any[]) => any, ...args: any[]) => {try {return [fn(...args), null];} catch (e:any) {return [null, e instanceof Error ? e : new Error(e)];}};
export const booleanAnd = <T = any>(a: T, b: T) => Boolean(a) && Boolean(b);




export const not = (a: any) => !a;
export const or = (a:any, b:any) => a || b;

export function isValidDate(date: Date) {return date instanceof Date && !isNaN(date.getTime());}
export const dayOfYear = (date: Date | string): number => {if (isString<Date>(date)) {date = new Date(date);}if (!isValidDate(date)) throw new Error(`Invalid Date string`);return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /1000 /60 /60 /24);};

export const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent) ? "Mobile" : "Desktop";

export const objectGet = (from: any, selector: string, defaultValue: any = undefined) => selector.replace(/\[([^\[\]]*)\]/g, ".$1.").split(".").filter((t) => t !== "").reduce((prev, cur) => prev && prev[cur], from) || defaultValue;
export const objectGetAll = (from: any, ...selectors: string[]) =>[...selectors].map((s) => objectGet(from, s));

export const size = (val: any) => Array.isArray(val) ? val.length : val && typeof val === "object" ? val.size || val.length || Object.keys(val).length : typeof val === "string" ? new Blob([val]).size : 0;
export function isString<T = any>(str: string | T): str is string {return typeof str === "string";}

export const isUndefined = (val:any) => val === undefined;
export const is = (type: ConstructorType | string, val: any) => ![, null].includes(val) && (isString(type) ? val.constructor.name === type : val.constructor === type);
export const isAbsoluteURL = (str:string) => /^[a-z][a-z0-9+.-]*:/.test(str);
export const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;
export const isBeforeDate = (dateA: Date, dateB: Date) => dateA < dateB;
export const isBrowser = () => ![typeof window, typeof document].includes("undefined");
export const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length;
export const isLeapYear = (year:number) => new Date(year, 1, 29).getMonth() === 1;
export const isNil = (val:any) => val === undefined || val === null;
export const isNull = (val:any) => val === null;
export const isNumber = (val: any) => typeof val === "number" && val === val;
export const isObject = (obj:any) => obj === Object(obj);
export const isWeekday = (t = new Date()) => {return t.getDay() % 6 !== 0;};
export const isWeekend = (t = new Date()) => { return t.getDay() % 6 === 0;};
export const mask = (cc: number | string, num = 4, mask = "*") => String(cc).slice(-num).padStart(String(cc).length, mask);


export const toCurrency = (n: number, curr: string, LanguageFormat: string = "") => Intl.NumberFormat(LanguageFormat, {style: "currency",currency: curr,}).format(n);


export const UUIDGeneratorBrowser = () => (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) => ( Number(c) ^(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16));




const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;

  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();

export const color = colorize;
import { arrayCast, arrayMerge } from './arrays';

let str = "test";
let arr = ['a','b','c','d'];
let arr2 = ['e','f','g','h'];

test('arrayCast: Valdiate array and size', () => {
    expect(arrayCast(arr)).toBeArray();
    expect(arrayCast(str)).toBeArray();
    expect(arrayCast(arr)).toBeArrayOfSize(4);
})

test('arrayMerge: ', () => {
    expect(arrayMerge(arr, arr2)).toBeArray();
    expect(arrayMerge(arr, arr)).toBeArrayOfSize(8);
})
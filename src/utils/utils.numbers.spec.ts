import { numberRandom } from './numbers';

test('numberRandom: Generate random number between 1 and 10', () => {
    expect(numberRandom(1,10)).toBeWithin(1,10);
})

test('numberRandom: Generate random number between 1 and 10', () => {
    expect(numberRandom(1,100)).toBeWithin(1,100);
})
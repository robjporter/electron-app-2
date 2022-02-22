import '@testing-library/jest-dom/extend-expect';
// add all jest-extended matchers
// import * as matchers from 'jest-extended/all';
const matchers = require('jest-extended/all');

// interface CustomMatchers<R = unknown> {
//   toBeWithinRange(floor: number, ceiling: number): R;
// }

// declare global {
//   namespace jest {
//     interface Expect extends CustomMatchers {}
//     interface Matchers<R> extends CustomMatchers<R> {}
//     interface InverseAsymmetricMatchers extends CustomMatchers {}
//   }
// }

expect.extend(matchers);

// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () =>
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       };
//     }
//   },
// });
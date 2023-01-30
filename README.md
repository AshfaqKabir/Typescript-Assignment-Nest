# Vanilla Typescript Jest Boilerplate - [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

#### A Code Boilerplate Setup for Vanilla Typescript and Jest for Testing

## Getting Started

##### Clone The Typescript Jest Boilerplate

```bash
git clone https://github.com/AshfaqKabir/Typescript-Jest-Boilerplate.git
```

##### Go to the project directory

```bash
  cd project-folder
```

##### Install dependencies

```bash
  npm install or yarn
```

##### Start Typescript Compiler Globally

```bash
 yarn start
```

##### Go to `src/` create new file `substract.ts`

```code
export const substract = (x: number, y: number): number => {
  return x - y
}
```

##### Create New File `substract.test.ts` in `src/__tests__` directory

```code
import { substract } from "../substract";

describe("test substract function", () => {
  it("should return 5 for substract(10,5)", () => {
    expect(substract(10, 5)).toBe(5);
  });

  it("should return 7 for substract(14,7)", () => {
    expect(substract(14, 7)).toBe(7);
  });
});
```

##### Run The Jest Tests

```bash
 yarn test
```

### Advanced

##### To create coverage report

```bash
npm run test:coverage or yarn test:coverage
```

##### To to build the project

```bash
npm run build or yarn build
```

## Author

Follow [@AshfaqKabir](https://github.com/AshfaqKabir)

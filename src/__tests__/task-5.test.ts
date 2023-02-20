import { duckLewisCalc } from "../task-5";

describe("Duck Lewis Calculator Functions", () => {
  it("should Return the Target Score for Second team of 182 as it id for Standard Calculation", () => {
    expect(duckLewisCalc(212, 94.7, 81.2, false)).toBe(182);
  });

  it("should Return the Target Score for Second team of 182 If it is for Professional Calculation", () => {
    expect(duckLewisCalc(180, 31.2, 54.7, true, 150)).toBe(216);
  });
});

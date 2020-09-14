import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() =>
  {
    acceptInjection: mockAcceptInjection
    getHasAntibodies: mockGetHasAntibodies
  }

  )
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new vaccineTest();
    vaccineTest.inject();
    expect(acceptInjection).toHaveBeenCalledWith(expect.any(vaccine));

  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    let mockGetHasAntibodies = js.fn().mockImplementation(()=>true);
    const result = vaccineTest.getHasAntibodies();
    expect(getHasAntibodies).toHaveBeenCalled();
    expect(result).toEqual("Vaccine Test Success")
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    let mockGetHasAntibodies = js.fn().mockImplementation(()=>false);
    const result = vaccineTest.getHasAntibodies();
    expect(getHasAntibodies).toHaveBeenCalled();
    expect(result).toEqual("Vaccine Test Failed")
  });
});

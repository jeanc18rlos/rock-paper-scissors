import pickRandom from "./pickRandom";

describe("pickRandomOption", () => {
  it("should return an option from the original array", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const randomOption = pickRandom<string>(options);

    expect(options.includes(randomOption)).toBeTruthy();
  });
});

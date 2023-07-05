import classNames from "./classNames"; // Use the actual path to your file

describe("classNames", () => {
  it("should return a single string for one class", () => {
    expect(classNames("class1")).toBe("class1");
  });

  it("should return a space-separated string for multiple classes", () => {
    expect(classNames("class1", "class2", "class3")).toBe(
      "class1 class2 class3"
    );
  });

  it("should return an empty string for no classes", () => {
    expect(classNames()).toBe("");
  });

  it("should ignore empty classes and still separate valid classes with a space", () => {
    expect(classNames("class1", "", "class3")).toBe("class1  class3");
  });
});

import { expect } from "chai";
import jsDom from "jsdom";
import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsDom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users");
    dom.window.close();
  });
});

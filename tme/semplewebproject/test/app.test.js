const { italic } = require("chalk");
const render = require("../../render");

const assert = require("assert");

it("has a text input", async () => {
  const dom = await render("index.html");

  const input = dom.window.document.querySelector("input");

  assert(input);
});

it("shows a sucess mesage", async () => {
  const dom = await render("index.html");

  const input = dom.window.document.querySelector("input");
  input.value = "asdasda@sas.com";

  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");
  console.log("h1 content ", h1.innerHtml);
});

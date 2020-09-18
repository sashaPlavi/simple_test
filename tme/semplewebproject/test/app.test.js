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
  input.value = "asdasda@sasa.com ";

  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  assert.strictEqual(h1.innerHTML, "Looks good");
});
it("shows a fail message on invalid message", async () => {
  const dom = await render("index.html");

  const input = dom.window.document.querySelector("input");
  input.value = "asdasda ";

  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  assert.strictEqual(h1.innerHTML, "Invalid email");
});

const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 3000);
  });
};

beforeEach(() => {
  document.querySelector("#target").innerHTML = "";
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        {
          Title: "Avengers",
        },
        {
          Title: "Not Avengers",
        },
        {
          Title: "Some Avengers",
        },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});
it("dropdown starts closed", () => {
  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).not.to.include("is-active");
});

it("after searching, dopdown open", async () => {
  const input = document.querySelector("input");
  input.value = "avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).to.include("is-active");
});

import { render, screen } from "@testing-library/vue";
import { rest } from "msw";
import App from "../App.vue";

describe("App", () => {
  it("renders the footer text", async () => {
    const footerText = "Task Board by Nikhil D Anand";
    render(App);
    const app = await screen.findByText(footerText);
    expect(app.innerText).contains(footerText);
  });
  it("matches snapshot", async () => {
    const wrapper = render(App);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders a loading message when the todo items are being loaded", async () => {
    const loadingText = "Loading...";
    render(App);
    const app = await screen.findByText(loadingText);
    expect(app.innerText).contains(loadingText);
  });

  it("renders an error message if there is an error while loading the todo items", async () => {
    render(App);

    rest.get("https://dummyjson.com/todos", (_, res) =>
      res.networkError("Failed to connect")
    );
    const expectedText = "Oops! Unexpected error occurs!";

    const value = await screen.findByText(expectedText);
    expect(value.innerText).toBe(expectedText);
  });

  it("renders a message if there are no todo items", async () => {
    render(App);

    rest.get("https://dummyjson.com/todos", (_, res, ctx) => res(ctx.json([])));
    const expectedText = "Hurray! I have cleared all todos.";
    const value = await screen.findByText(expectedText);
    expect(value.innerText).contains(expectedText);
  });
});

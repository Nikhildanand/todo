import { render } from "@testing-library/vue";
import App from "../App.vue";

test("it should work", () => {
  const { getByText } = render(App)
  // assert output
getByText("To do App");

})
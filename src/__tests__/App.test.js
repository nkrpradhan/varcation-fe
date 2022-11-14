import { screen, render, debug } from "@testing-library/react-native";

import App from "../../App";
describe("App component", () => {
  test("Check for search text in app component", async () => {
    const component = <App />;

    render(component);
    const searchBtn = await screen.findAllByText(/search/i);
    expect(searchBtn.length).toBe(1);
  });
});

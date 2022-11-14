import { screen, render, debug } from "@testing-library/react-native";

import App from "../../App";
describe("first", () => {
  test("should check for app component nav links", async () => {
    const component = <App />;

    render(component);
    const searchBtn = await screen.findAllByText(/search/i);
    expect(searchBtn.length).toBe(1);
  });
});

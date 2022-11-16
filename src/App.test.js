import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders text", () => {
  render(<App />);
  const linkElement = screen.getByText("Edit src/App.js and save to reload");
  expect(linkElement).not.toBeInTheDocument();
});

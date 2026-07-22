import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the application", () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "../styles/styles";

describe("Button", () => {
  test("Return the background color of the button: #135846", () => {
    render(
      <Button>
        Example of a button
      </Button>
    );

    expect(screen.getByText("Example of a button")).toHaveStyle(
      "backgroundColor: #135846"
    );
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "../styles/styles";

describe("Button", () => {
  test("Return the color: #00000", () => {
    render(
      <Button style={{
          backgroundColor: "#00000"
      }}>
        Example of a button
      </Button>
    );

    expect(screen.getByText("Example of a button")).toHaveStyle(
      "backgroundColor: '#333' "
    );
  });
});

import { screen, render } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("greet component", () => {
  test("greeting", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const hello = screen.getByText("Hello World!");
    expect(hello).toBeInTheDocument();
  });

  test("renders if not clicked", () => {
    render(<Greeting />);
    const output = screen.getByText("It's good to see you!");
    expect(output).toBeInTheDocument();
  });

  test("renders if clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const output = screen.queryByText("good to see you", { exact: false });
    expect(output).toBeNull();
  });
});

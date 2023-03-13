import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("fff", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolveValueOnce({
      json: async () => [{ id: "p1", title: "t1" }],
    });
    render(<Async />);

    const listItemELem = await screen.findAllByRole("listitem");
    expect(listItemELem).not.toHaveLength(0);
  });
});

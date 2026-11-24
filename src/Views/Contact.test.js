import React, { StrictMode } from "react";
import { act, render, screen } from "@testing-library/react";
import Contact from "./Contact";

beforeEach(() => jest.useFakeTimers());
afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
});

test("switching away from Contact cancels its pending typewriter", () => {
    const view = render(<Contact />);
    view.unmount();
    expect(() => act(() => jest.runAllTimers())).not.toThrow();
    expect(jest.getTimerCount()).toBe(0);
});

test("a remounted Contact owns its text and timer, including Strict Mode", () => {
    const first = render(<Contact />);
    first.unmount();
    const second = render(<StrictMode><Contact /></StrictMode>);
    act(() => jest.runAllTimers());
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Thank you for Visiting!");
    second.unmount();
    expect(jest.getTimerCount()).toBe(0);
});

import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./Menu";
import SideBar from "./SideBar";

test("page destinations are native buttons that retain selection and close the sidebar", () => {
  const setPageNumState = jest.fn();
  const setIsOpen = jest.fn();
  const aside = document.createElement("aside");
  aside.className = "is-active";
  const rightSide = document.createElement("aside");
  rightSide.className = "rightSide open";
  document.body.append(aside, rightSide);
  try {
    render(<Menu isOpen setPageNumState={setPageNumState} setIsOpen={setIsOpen} />);
    ["Welcome", "About Me", "Projects", "Updates", "TheEnd."].forEach((name, index) => {
      const control = screen.getByRole("button", { name });
      expect(control.tagName).toBe("BUTTON");
      expect(control.type).toBe("button");
      fireEvent.click(control);
      expect(setPageNumState).toHaveBeenLastCalledWith(index + 1);
      expect(setIsOpen).toHaveBeenLastCalledWith(false);
    });
    expect(aside.classList.contains("is-active")).toBe(false);
    expect(rightSide.classList.contains("close")).toBe(true);
    expect(rightSide.classList.contains("open")).toBe(false);
  } finally {
    aside.remove();
    rightSide.remove();
  }
});

test("social destinations are named native links using the existing authored URLs", () => {
  render(<Menu isOpen setPageNumState={jest.fn()} setIsOpen={jest.fn()} />);
  const links = [
    ["Email", "mailto:houchic@bu.edu?subject=Subject&body=message"],
    ["LinkedIn", "https://www.linkedin.com/in/hou-chi-chan-4570001b3/"],
    ["GitHub", "https://github.com/SciencePotato"],
  ];
  links.forEach(([name, href]) => {
    const link = screen.getByRole("link", { name });
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe(href);
  });

});

test("the native menu toggle exposes controls only while open and regains focus after selection", () => {
    const setPageNumState = jest.fn();
    render(<SideBar pageNumVal={1} setPageNumState={setPageNumState} />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    const menu = document.getElementById("site-menu");
    expect(menu.hasAttribute("inert")).toBe(true);
    expect(screen.queryByRole("button", { name: "Projects" })).toBe(null);
    fireEvent.click(toggle);
    expect(menu.hasAttribute("inert")).toBe(false);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Projects" }));
    expect(setPageNumState).toHaveBeenLastCalledWith(3);
    expect(menu.hasAttribute("inert")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(toggle);
});

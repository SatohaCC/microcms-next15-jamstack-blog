import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
    it("renders button with children", () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByText("Test Button")).toBeInTheDocument();
    });

    it("applies solid variant styles", () => {
        render(<Button visual="solid">Solid Button</Button>);
        const button = screen.getByText("Solid Button");
        expect(button).toHaveClass("button--visual_solid");
    });

    it("applies outline variant styles", () => {
        render(<Button visual="outline">Outline Button</Button>);
        const button = screen.getByText("Outline Button");
        expect(button).toHaveClass("button--visual_outline");
    });

    it("applies text variant styles", () => {
        render(<Button visual="text">Text Button</Button>);
        const button = screen.getByText("Text Button");
        expect(button).toHaveClass("button--visual_text");
    });

    it("applies size variants correctly", () => {
        const { rerender } = render(<Button size="lg">Large Button</Button>);
        expect(screen.getByText("Large Button")).toHaveClass("button--size_lg");

        rerender(<Button size="sm">Small Button</Button>);
        expect(screen.getByText("Small Button")).toHaveClass("button--size_sm");
    });

    it("is disabled when isDisabled prop is true", () => {
        render(<Button isDisabled>Disabled Button</Button>);
        expect(screen.getByText("Disabled Button")).toBeDisabled();
    });

    it("applies both visual and size variants correctly", () => {
        const { rerender } = render(
            <Button visual="solid" size="lg">
                Large Solid Button
            </Button>
        );
        expect(screen.getByText("Large Solid Button")).toHaveClass(
            "button--visual_solid",
            "button--size_lg"
        );

        rerender(
            <Button visual="outline" size="sm">
                Small Outline Button
            </Button>
        );
        expect(screen.getByText("Small Outline Button")).toHaveClass(
            "button--visual_outline",
            "button--size_sm"
        );

        rerender(
            <Button visual="text" size="xs">
                XS Text Button
            </Button>
        );
        expect(screen.getByText("XS Text Button")).toHaveClass(
            "button--visual_text",
            "button--size_xs"
        );
    });
});

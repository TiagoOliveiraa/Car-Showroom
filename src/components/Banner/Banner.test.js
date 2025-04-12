import {render, screen} from "@testing-library/react";
import {Banner} from "./Banner"

describe("Test Banner Component", () => {
    test("Render text sent by prop", () => {
        render(<Banner heading="Find Your Dream Car Here."/>);
        expect(screen.getByText("Find Your Dream Car Here.")).toBeInTheDocument();
    })

    test("Render alt sent by prop", () => {
        render (<Banner imgUrl="testImage.png" alt="Test Image"/>);
        expect(screen.getByAltText("Test Image")).toHaveAttribute('src','testImage.png');
    })
})
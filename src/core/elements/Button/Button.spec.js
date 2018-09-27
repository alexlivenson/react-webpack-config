import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
    let mountedButton;

    beforeEach(() => {
        mountedButton = undefined;
    });

    const button = () => {
        if (mountedButton) {
            return mountedButton;
        }

        mountedButton = mount(<Button>Hi friend</Button>);
        return mountedButton;
    };

    it("always renders a <button>", () => {
        const buttons = button().find("button");
        expect(buttons.length).toBeGreaterThan(0);
    });
});

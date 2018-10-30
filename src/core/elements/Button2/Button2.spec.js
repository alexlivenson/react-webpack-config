import React from "react";
import { mount } from "enzyme";
import Button2 from "./Button2";

describe("Button2", () => {
    let mountedButton;

    beforeEach(() => {
        mountedButton = undefined;
    });

    const button = () => {
        if (mountedButton) {
            return mountedButton;
        }

        mountedButton = mount(<Button2>Hi friend</Button2>);
        return mountedButton;
    };

    it("always renders a <button>", () => {
        const buttons = button().find("button");
        expect(buttons.length).toBeGreaterThan(0);
    });
});

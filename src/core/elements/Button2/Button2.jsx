import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./button2.scss";

class Button2 extends Component {
    render() {
        const { children, className, variation, size } = this.props;
        const btnClass = classnames({
            [`button-${variation}`]: variation ? true : false,
            [`button-${size}`]: size ? true : false,
            button: true,
            [className]: className ? true : false
        });
        return <button className={btnClass}>{children}</button>;
    }
}

Button2.Styles = {
    primary: "primary",
    secondary: "secondary"
};

Button2.Sizes = {
    small: "small",
    medium: "medium",
    large: "large"
};

Button2.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.any,
    variation: PropTypes.oneOf(Object.values(Button2.Styles))
};

Button2.defaultProps = {
    children: "Click Me",
    variation: Button2.Styles.primary,
    size: Button2.Sizes.medium
};

export default Button2;

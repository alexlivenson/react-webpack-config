import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./button.scss";

class Button extends Component {
    render() {
        console.log(styles)
        const { children, className, variation, size } = this.props;
        const btnClass = classnames({
            [styles[`button-${variation}`]]: variation ? true : false,
            [`button-${size}`]: size ? true : false,
            [`${styles.button}`]: true,
            [className]: className ? true : false
        });
        return <button className={btnClass}>{children}</button>;
    }
}

Button.Styles = {
    primary: "primary",
    secondary: "secondary"
};

Button.Sizes = {
    small: "small",
    medium: "medium",
    large: "large"
};

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.any,
    variation: PropTypes.oneOf(Object.values(Button.Styles))
};

Button.defaultProps = {
    children: "Click Me",
    variation: Button.Styles.primary,
    size: Button.Sizes.medium
};

export default Button;

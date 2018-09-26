import React from "react";
import PropTypes from "prop-types";
import "../../scss/link.scss"

const propTypes = {
    children: PropTypes.any
};

function Link({ children }) {
    return <a className="link">{children}</a>;
}

Link.propTypes = propTypes;

export default Link;

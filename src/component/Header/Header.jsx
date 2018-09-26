import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

function Header({ children }) {
    return <div className="header">{children}</div>;
}

Header.propTypes = {
    children: PropTypes.node
};

export default Header;

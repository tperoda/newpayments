import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderComponent = () => (
  <Menu pointing className="payment-header">
    <Menu.Item>
      <h4>
        <Link to="/">Payment Calculator</Link>
      </h4>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item className="login-link">
        <h4>
          <Link to="/login">Login</Link>
        </h4>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default HeaderComponent;

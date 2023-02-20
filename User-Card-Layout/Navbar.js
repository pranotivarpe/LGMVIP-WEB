import React from "react";
import { Navbar, Button} from "react-bootstrap";

function CustomNavbar({ onGetUsersClick }) {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
    <nav className="nav-container">
        <div className="nav-item">
      <Navbar.Brand id="brand_name">Aurora</Navbar.Brand>
      <Button id="button" variant="primary" onClick={onGetUsersClick}> Get Users</Button>
      </div>
    </nav>
  </Navbar>
  );
}

export default CustomNavbar;

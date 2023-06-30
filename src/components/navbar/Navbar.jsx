import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import DropDownTool from "../DropDown/DropDownTool";
import { useState } from "react";

const NavbarTool = () => {
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        {/* <Navbar.Brand>
    
        </Navbar.Brand> */}
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="/">Home</Navbar.Link>
          {/* <Navbar.Link href="#">About</Navbar.Link> */}
          <DropDownTool />
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default NavbarTool;

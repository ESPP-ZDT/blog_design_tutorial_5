import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNavbar = styled(Navbar)`
  background-color: gray;
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out;
  animation: ${fadeInDown} 0.5s ease-in-out;

  &:hover {
    background-color: pink;
  }
`;
const TopBar = () => {
    return (
      <>
        <StyledNavbar>
          <Navbar.Brand>
            {" "}
            <Link to="/">
            Precyzja Pokory <FontAwesomeIcon icon={faHome} />
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">
              Home <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/pasja">
              Pasja <FontAwesomeIcon icon={faStar} />{" "}
            </Link>
          </Nav>
        </StyledNavbar>
      </>
    );
  };


// const TopBar = () => {
//   return (
//     <>
//       <StyledNavbar>
//         <Navbar.Brand>
//           {" "}
//           <Link to="/">
//           Precyzja Pokory <FontAwesomeIcon icon={faHome} />
//           </Link>
//         </Navbar.Brand>
//         <Nav className="mr-auto">
//           <Link to="/">
//             Home <FontAwesomeIcon icon={faHome} />
//           </Link>
//           <Link to="/pasja">
//             Pasja <FontAwesomeIcon icon={faStar} />{" "}
//           </Link>
//         </Nav>
//       </StyledNavbar>
//     </>
//   );
// };

export default TopBar;

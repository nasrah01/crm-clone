import { BiPlus } from 'react-icons/bi'
import { SiDatabricks } from 'react-icons/si'
import { HiOutlineUserGroup } from "react-icons/hi";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <Header>
        <Icon>
          <HiOutlineUserGroup />
        </Icon>
      </Header>
      <Controls>
        <Projects>
          <NavLink to='/ticket'>
            <BiPlus />
          </NavLink>
          <NavLink to='/'>
            <SiDatabricks />
          </NavLink>
        </Projects>
      </Controls>
    </Nav>
  );
}

export default NavBar

const Nav = styled.div`
  height: 100vh;
  width: 70px;
  background: #0073e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

const Controls = styled.div`
  cursor: pointer;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  a {
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: #fff;
    margin-top: .5rem;
    padding: .5rem;
    width: 70%;
    border-radius: 10px;

  }

  .active {
    background-color: #fff;
    color: #0073e6;
  }

  @media screen and (max-width: 600px) {
    padding: 5rem 0;
  }
`;

const Icon = styled.div`
  color: #fff;
  font-size: 32px;
`
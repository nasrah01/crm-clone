import { CgMenuCake } from 'react-icons/cg';
import { BiPlus } from 'react-icons/bi'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {

  const navigate = useNavigate();
  return (
    <Nav>
      <Icon>
        <CgMenuCake size={30} color="#fff"/>
      </Icon>
      <Controls>
        <Icon onClick={() => navigate("/ticket")}><BiPlus size={20} color="#fff"/></Icon>
        <Icon onClick={() => navigate("/")}><MdOutlineArrowBackIosNew size={20} color="#fff"/></Icon>
      </Controls>
    </Nav>
  );
}

export default NavBar

const Nav = styled.div`
height: 100vh;
width: 50px;
background: #0f1048;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const Controls = styled.div`
padding-bottom: 1rem;
`;

const Icon = styled.div`
padding-top: 1rem;
`;
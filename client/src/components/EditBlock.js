import styled from 'styled-components'
import {useState, useEffect, useRef} from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios'

const EditBlock = (_id) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();

  const handleOpen = () => {
    setIsMenuOpen((oldState) => !oldState);
  };

  const uniqueId = _id.id;

  const deleteTicket = async() => {
    const id = _id.id
    const response = await axios.delete(`http://localhost:5000/ticket/${id}`);

    if(response.status === 201) {
      window.location.reload();
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <EditContainer ref={ref}>
      <ListBlock onClick={handleOpen}>
        <BsThreeDotsVertical />
      </ListBlock>

      {isMenuOpen ? (
        <OpenList>
          <StyledLink to="/" onClick={deleteTicket}>
            <MdOutlineDeleteOutline />
            <p>Delete</p>
          </StyledLink>
          <StyledLink to={`/ticket/${uniqueId}`} id="link">
            <MdModeEditOutline />
            <p>Edit</p>
          </StyledLink>
        </OpenList>
      ) : null}
    </EditContainer>
  );
}

export default EditBlock

const EditContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ListBlock = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: .4rem;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const OpenList = styled.div`
  width: 100px;
  position: absolute;
  right: 20px;
  top: 35px;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  z-index: 3;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }

  p {
    padding-left: 10px;
  }
`;
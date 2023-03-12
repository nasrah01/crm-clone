import { useState, useEffect } from 'react'
import TicketCard from '../components/TicketCard'
import styled from "styled-components"
import axios from 'axios'
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import {MdAdd} from 'react-icons/md'

const Dashboard = () => {
  const [tickets, setTickets] = useState(null)
  // eslint-disable-next-line no-unused-vars

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {

      if(window.innerWidth <= 750) {
      setDisplay(true);
      } else {
        setDisplay(false)
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  console.log(display)

  const results = async () => {
    const response = await axios.get("http://localhost:5000/ticket");

    const data = response.data;
    setTickets(data)
    console.log(data)
  };
  
  useEffect(() => {
    results()
  }, [])

  const headings = ['Task', 'End Date', 'Status', 'Progress', 'Priority', 'Owner']

  const MobileHeadings = ['Task', 'Status', 'Owner']
  
  return (
    <DashboardContainer>
      <h1>Tasks</h1>
      <TicketContainer>
        <TicketHeader>
          {display
            ? MobileHeadings.map((title) => <p>{title}</p>)
            : headings.map((title) => <p>{title}</p>)}
          <BsThreeDots />
        </TicketHeader>
        <StyledLink to={`/ticket`} id="link">
          <Icon>
            <MdAdd />
          </Icon>
          <p>Add New Task</p>
        </StyledLink>
        {tickets?.map((ticket, _index) => (
          <TicketCard key={_index} id={ticket._id} ticket={ticket} />
        ))}
      </TicketContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 100%;
  background-color: #fafafa;

  h1 {
    font-weight: 500;
    color: #404040;
    background-color: #fff;
    padding: 2rem 2rem 0 2rem;
  }
`;

const TicketContainer = styled.div`
  height: 80vh;
  padding: 1rem;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const TicketHeader = styled.div`
  display: grid;
  grid-template-columns: 30% repeat(5, 1fr) 30px;
  padding: 1rem 0.5rem;
  color: #333333;
  font-weight: 600;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(6, 1fr) 30px;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr) 30px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 1px dashed #32cd32;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;

  p {
    padding-top: 0.3rem;
    color: #333333;
    font-weight: 600;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
  padding-right: 0.2rem;
  color: #40bf77;
  font-size: 20px;
`;
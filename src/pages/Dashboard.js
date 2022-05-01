import { useState, useEffect, useContext } from 'react'
import TicketCard from '../components/TicketCard'
import CategoryContext from '../context'
import styled from "styled-components"
import axios from 'axios'

const Dashboard = () => {
  const [tickets, setTickets] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const { categories, setCategories } = useContext(CategoryContext);

  const results = async () => {
    const response = await axios.get("http://localhost:5000/ticket");

    const data = response.data;
    setTickets(data)
  };

  useEffect(() => {
    results()
  }, [])
  
    useEffect(() => {
      setCategories([...new Set(tickets?.map(({ category }) => category))]);
    }, [setCategories, tickets]);

  const colors = ["#1a1aff", "#8a2be2", "#228b22", "#c71585", "#4d4dff"];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ];
  return (
    <DashboardContainer>
      <h1>My Projects</h1>
      <TicketContainer>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, index) => (
            <Category key={index}>
              <Header>
                <h3>{uniqueCategory}</h3>
                <p>Owner</p>
                <p>Status</p>
                <p>Priority</p>
                <p>Progress</p>
                <p>Delete</p>
              </Header>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={filteredTicket._id}
                    color={colors[index] || colors[2]}
                    ticket={filteredTicket}
                  />
                ))}
            </Category>
          ))}
      </TicketContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
padding: 2rem;
width: 100%;
`

const TicketContainer = styled.div`
  height: 80vh;
  padding: 1rem 0;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Category = styled.div`
padding-bottom: 2rem;
`

const Header = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`
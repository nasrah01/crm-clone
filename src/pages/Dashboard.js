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
      <h1>Monthly overview</h1>
      <TicketContainer>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, index) => (
            <CategoryContainer>
              <CategoryTitle>
                <h2 style={{ color: colors[index] || colors[2] }}>
                  {uniqueCategory}
                </h2>
              </CategoryTitle>
              <Category key={index}>
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
            </CategoryContainer>
          ))}
      </TicketContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
  width: 100%;

  h1 {
    font-weight: 500;
    color: #404040;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem 0 0 0;

    h1 {
      margin-left: 1rem;
      font-size: 26px;
    }
  }
`;

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

const CategoryContainer = styled.div`
  margin: 1rem 0;
`;

const Category = styled.div`
  padding-bottom: 2rem;
`

const CategoryTitle = styled.div`
  padding-left: 12px;

  h2 {
    margin-bottom: 0.5rem;
    font-size: clamp(12px, 1.5vw, 24px);
  }
`;
import TicketCard from '../components/TicketCard';
import styled from "styled-components";

const tickets = [
  {
    category: "This month",
    color: "#0a9bf5",
    title: "PGT line launch",
    owner: "Nasrah",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMZQTZ10-Af45Zu-gzX7KmQDQdllbsw2oMQ&usqp=CAU",
    status: "Done",
    priority: 5,
    porgress: 40,
    description: "Plan a strategy to launch new PGT line",
    timestamp: "2022-04-11T07:36:17+0000",
  },
  {
    category: "This month",
    color: "#0a9bf5",
    title: "PGT line launch",
    owner: "Nasrah",
    avatar: "",
    status: "Working on it",
    priority: 3,
    porgress: 60,
    description: "Plan a strategy to launch new PGT line",
    timestamp: "2022-04-11T07:36:17+0000",
  },
  {
    category: "Next month",
    color: "#0a9bf5",
    title: "PGT line progress",
    owner: "Nasrah",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMZQTZ10-Af45Zu-gzX7KmQDQdllbsw2oMQ&usqp=CAU",
    status: "Stuck",
    priority: 2,
    porgress: 10,
    description: "Go over last months kpi's",
    timestamp: "2022-05-11T07:36:17+0000",
  },
];

const colors = ["#1a1aff", "#8a2be2", "#228b22", "#c71585", "#4d4dff"];

const uniqueCategories = [
  ...new Set(tickets?.map(({category}) => category))
]

console.log(uniqueCategories)

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>My Projects</h1>
      <TicketContainer>
        {
          tickets && uniqueCategories?.map((uniqueCategory, index) => (
            <div key={index}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                <TicketCard id={_index} color={colors[index] || colors[2]} ticket={filteredTicket} />
              ))}
            </div>
          ))
        }
        
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
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
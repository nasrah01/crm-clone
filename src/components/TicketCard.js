import { Link } from 'react-router-dom'
import AvatarDisplay from '../components/Displays/AvatarDisplay'
import ProgressDisplay from "../components/Displays/ProgressDisplay";
import StatusDisplay from "../components/Displays/StatusDisplay";
import PriorityDisplay from "../components/Displays/PriorityDisplay";
import DeleteBlock from "../components/DeleteBlock";
import styled from 'styled-components'


const TicketCard = ({color, ticket}) => {

  const { title, owner, avatar, status, priority, progress} = ticket;

  return (
    <Card>
      <Indicator style={{backgroundColor: color}}></Indicator>
      <StyledLink to="/" id="link">
        <h3>{title}</h3>
        <AvatarDisplay owner={owner} avatar={avatar}/>
        <StatusDisplay status={status}/>
        <PriorityDisplay priority={priority}/>
        <ProgressDisplay color={color} progress={progress}/>
      </StyledLink>
      <DeleteBlock />
    </Card>
  );
}

export default TicketCard

const Card = styled.div`
display: flex;
width: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #000;

  > * {
    background: #f2f2f2;
    margin: 2px 2px 2px 0;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  h3 {
  }
`;

const Indicator = styled.div`
width: 12px;
margin: 2px 0;
`
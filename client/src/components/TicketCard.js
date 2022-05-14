import { Link } from 'react-router-dom'
import AvatarDisplay from './Displays/AvatarDisplay'
import ProgressDisplay from "./Displays/ProgressDisplay";
import StatusDisplay from "./Displays/StatusDisplay";
import PriorityDisplay from "./Displays/PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import styled from 'styled-components'


const TicketCard = ({color, ticket}) => {

  const { _id, title, owner, avatar, status, priority, progress} = ticket;

  return (
    <Card>
      <Indicator style={{backgroundColor: color}}></Indicator>
      <StyledLink to={`/ticket/${_id}`} id="link">
        <h3>{title}</h3>
        <AvatarDisplay owner={owner} avatar={avatar}/>
        <StatusDisplay status={status}/>
        <PriorityDisplay priority={priority}/>
        <ProgressDisplay color={color} progress={progress}/>
      </StyledLink>
      <DeleteBlock id={_id}/>
    </Card>
  );
}

export default TicketCard

const Card = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #000;

  > * {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #f2f2f2;
    margin: 2px 2px 2px 0;
    padding: 10px;
    width: 100%;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #404040;
    font-weight: normal;
    font-size: clamp(10px, 1vw, 16px);
  }
`;

const Indicator = styled.div`
  margin: 2px 0;
  padding: 6px;

  @media screen and (max-width: 550px) {
    padding: 3px;
  }
`
import ProgressDisplay from "./Displays/ProgressDisplay";
import StatusDisplay from "./Displays/StatusDisplay";
import PriorityDisplay from "./Displays/PriorityDisplay";
import EditBlock from "./EditBlock";
import styled from 'styled-components'
import CalanderDisplay from './Displays/CalanderDisplay';


const TicketCard = ({ticket}) => {

  const { _id, owner, task, end, status, priority, progress} = ticket;

  return (
    <Card>
      <p>{task}</p>
      <CalanderDisplay end={end} />
      <StatusDisplay status={status} />
      <ProgressDisplay progress={progress} />
      <PriorityDisplay priority={priority} />
      <p>{owner}</p>
      <EditBlock id={_id} />
    </Card>
  );
}

export default TicketCard

const Card = styled.div`
  display: grid;
  grid-template-columns: 30% repeat(5, 1fr) 30px;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #f2f2f2;
  border-left: 5px solid #f2138e;
  border-radius: 5px;
  background: #ffffff;

  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(6, 1fr) 30px;
  }
`;
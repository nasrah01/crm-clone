import styled from 'styled-components'
import {BsFlagFill} from 'react-icons/bs'

const PriorityDisplay = ({priority}) => {

    const levels = (priority) => {
      let color;
      switch (priority) {
        case 1:
          color = "#40bf77";
          break;
        case 2:
          color = "#ffa500";
          break;
        case 3:
          color = "#dc143c";
          break;
        default:
          color = "rgb(30, 144, 255)";
          break;
      }

      return color;
    };

  return (
    <PriorityContainer>
      <PriorityFlag>
        <BsFlagFill fill={levels(priority)} />
      </PriorityFlag>
    </PriorityContainer>
  );
};

export default PriorityDisplay;

const PriorityContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const PriorityFlag = styled.div`
  padding-left: 1.5rem;
`;
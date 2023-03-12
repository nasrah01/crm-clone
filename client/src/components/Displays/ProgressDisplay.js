import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressDisplay = ({progress}) => {

  return (
    <ProgressContainer>
      <ProgressBar>
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "#32cd32",
            trailColor: "#d9d9d9",
          })}
        />
      </ProgressBar>
      <Indicator>
        <p>{progress}%</p>
      </Indicator>
    </ProgressContainer>
  );
};

export default ProgressDisplay;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const ProgressBar = styled.div`
  width: 40px;
`;

const Indicator = styled.div`
  font-size: 14px;
  padding-left: .5rem;
`

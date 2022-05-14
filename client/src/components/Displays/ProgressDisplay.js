import styled from 'styled-components'

const ProgressDisplay = ({color, progress}) => {

  return (
    <ProgressContainer>
      <ProgressBar>
        <Indicator style={{backgroundColor: color, width: progress + "%"}}></Indicator>
      </ProgressBar>
    </ProgressContainer>
  )
};

export default ProgressDisplay;

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    display: none !important;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: #cccccc;
  border-radius: 15px;
  overflow: hidden;
`;

const Indicator = styled.div`
height: 100%;
`;

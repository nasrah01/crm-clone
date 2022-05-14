import styled from 'styled-components'

const PriorityDisplay = ({priority}) => {
  return (
    <PriorityContainer>
      <StarContainer>
        <h3 style={{ color: priority >= 1 ? "#ffd700" : "#b3b3b3" }}>&#9733;</h3>
        <h3 style={{ color: priority >= 2 ? "#ffd700" : "#b3b3b3" }}>&#9733;</h3>
        <h3 style={{ color: priority >= 3 ? "#ffd700" : "#b3b3b3" }}>&#9733;</h3>
        <h3 style={{ color: priority >= 4 ? "#ffd700" : "#b3b3b3" }}>&#9733;</h3>
        <h3 style={{ color: priority >= 5 ? "#ffd700" : "#b3b3b3" }}>&#9733;</h3>
      </StarContainer>
    </PriorityContainer>
  );
};

export default PriorityDisplay;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const StarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
import styled from 'styled-components'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color;
    switch (status) {
      case "not started":
        color = "#ff571a"
        break;
      case "in progress":
        color = "#0080ff"
        break;
      case "in review":
        color = "#ffa500"
        break;
      case "completed":
        color = "#2db92d"
        break;
      default:
        color = "#e60000";
        break;
    }

    return color
  };

  function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StatusContainer>
      <p style={{ backgroundColor: getColor(status) }}>{firstLetter(status)}</p>
    </StatusContainer>
  );
};

export default StatusDisplay;

const StatusContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;

  p {
    padding: .5rem .8rem .3rem .8rem;
    border-radius: 5px;
  }
`;

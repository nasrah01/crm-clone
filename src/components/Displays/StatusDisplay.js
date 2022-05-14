import styled from 'styled-components'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color;
    switch (status) {
      case "done":
        color = "#40bf77"
        break;
      case "working on it":
        color = "#ffa500"
        break;
      case "stuck":
        color = "#d62929"
        break;
      default:
        color = "rgb(30, 144, 255)";
        break;
    }

    return color
  };
  return (
    <StatusContainer style={{backgroundColor: getColor(status)}}>
      {status}
    </StatusContainer>
  )
};

export default StatusDisplay;

const StatusContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: clamp(10px, 1vw, 16px);
`;

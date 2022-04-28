import styled from 'styled-components'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color;
    switch (status) {
      case "Done":
        color = "#40bf77"
        break;
      case "Working on it":
        color = "#ffa500"
        break;
      case "Stuck":
        color = "#d62929"
        break;
      default:
        color = "rgb(186, 255, 255)"
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
`

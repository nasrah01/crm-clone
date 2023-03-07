import styled from "styled-components";

const CalanderDisplay = ({ end }) => {
  const splitDate = end.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateDisplay = `${months[Number(splitDate[1])]} ${splitDate[2]}, ${
    splitDate[0]
  }`;

  return (
    <DateContainer>
      <p>{dateDisplay}</p>
    </DateContainer>
  );
};

export default CalanderDisplay;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`

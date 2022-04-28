import styled from 'styled-components'
import { TiDelete } from 'react-icons/ti'

const DeleteBlock = () => {

  const deleteTicket = () => {
    console.log("delete")
  }
  return (
    <DeleteContainer onClick={deleteTicket}>
      <TiDelete size={18}/>
    </DeleteContainer>
  )
}

export default DeleteBlock

const DeleteContainer = styled.div`
  background: #f2f2f2;
  margin: 2px 2px 2px 0;
  padding: 10px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
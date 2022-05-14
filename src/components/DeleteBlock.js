import styled from 'styled-components'
import { TiDelete } from 'react-icons/ti'
import axios from 'axios'

const DeleteBlock = (_id) => {

  const deleteTicket = async() => {
    const id = _id.id
    const response = await axios.delete(`http://localhost:5000/ticket/${id}`);

    if(response.status === 201) {
      window.location.reload()
    }
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
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
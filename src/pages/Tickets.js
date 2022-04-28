import styled from 'styled-components'
import { useState } from 'react'

const Tickets = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  console.log(formData);

  const editMode = false;

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted")
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <TicketContainer>
      <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
      <TicketBlock>
        <Form onSubmit={submitForm}>
          <div>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' type='text' required value={formData.title} onChange={handleChange}/>
          
            <label htmlFor='description'>Description</label>
            <input id='description' name='description' type='text' required value={formData.description} onChange={handleChange}/>
         
            <label>Category</label>
            <select name='category' value={formData.category} onChange={handleChange}>
              
            </select>

            <label htmlFor='new-category'>New Category</label>
            <input id='new-category' name='category' type='text' required value={formData.category} onChange={handleChange}/>
          </div>
        </Form>
      </TicketBlock>
    </TicketContainer>
  )
}

export default Tickets

const TicketContainer = styled.div``

const TicketBlock = styled.div``

const Form = styled('form')``
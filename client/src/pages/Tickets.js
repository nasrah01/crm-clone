/* eslint-disable eqeqeq */
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Tickets = ({ editMode }) => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  // eslint-disable-next-line no-unused-vars


  const navigate = useNavigate();

  let { id } = useParams();

  const submitForm = async (e) => {
    console.log(formData)
  
    e.preventDefault();

     const config = {
       header: {
         "Content-Type": "application/json",
       },
     };

     try {
       if(!editMode) {
         const response = await axios.post(
           "http://localhost:5000/ticket",
           { formData },
           config
         );

         const success = response.status === 201;
         if(success) {
          navigate('/')
         }
       }

       if (editMode) {
         const response = await axios.put(
           `http://localhost:5000/ticket/${id}`,
           { formData },
           config
         );

         const success = response.status === 201;
         if (success) {
            navigate("/");
         }
       }
     } catch (error) {
       console.log(error)
     }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/ticket/${id}`);

    if(response.status === 201) {
      const data = await response.data;
      setFormData(data[0])  
    }
  }

  useEffect(() => {
    if(editMode) {
      getData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TicketContainer>
      <HeaderBlock>
        <Header>
          <TaskLink to={`/`}>Task Dashboard</TaskLink>
        </Header>
        <TicketHeader>{editMode ? "Update task" : "Add New Task"}</TicketHeader>
      </HeaderBlock>
      <TicketBlock>
        <Form onSubmit={submitForm}>
          <FormSection>
            <label htmlFor="task">Task</label>
            <input
              id="task"
              name="task"
              type="text"
              required={true}
              value={formData.task}
              onChange={handleChange}
            />

            <label htmlFor="end">Due Date</label>
            <input
              id="end"
              name="end"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
            />

            <label>Priority</label>
            <div>
              <input
                id="pr-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="pr-1">Low</label>
              <input
                id="pr-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="pr-2">Normal</label>
              <input
                id="pr-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="pr-3">High</label>
            </div>

            {editMode && (
              <>
                <label htmlFor="progress">Progress</label>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  min="0"
                  max="100"
                  onChange={handleChange}
                />

                <label>Status</label>
                <select
                  name="status"
                  vlaue={formData.status}
                  onChange={handleChange}
                >
                  <option value="not started">Not Started</option>
                  <option value="in progress">In Progress</option>
                  <option value="in review">In Review</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </>
            )}
            <Buttons>
              <input type="submit" value="Save Task" />
            </Buttons>
          </FormSection>
          <FormSection>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="text"
              required
              value={formData.owner}
              onChange={handleChange}
            />
          </FormSection>
        </Form>
      </TicketBlock>
    </TicketContainer>
  );
}

export default Tickets

const TicketContainer = styled.div`
  width: 100%;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TaskLink = styled(Link)`
  background-color: #189a18;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.8rem 0.8rem 0.5rem 0.8rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  width: max-content;

  &:hover {
    background-color: #116e11;
  }
`;

const TicketHeader = styled.h2`
  color: #333333;
  font-weight: 600;
  font-size: 1.8rem;
  padding-top: .5rem;
`;

const TicketBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 0;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  border: 2px solid #f2f2f2;
  border-radius: 25px;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin: .5rem;
  }
`;

const FormSection = styled("section")`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 400px;

  label {
    margin: 1.5rem 0 0.5rem 0;
    font-weight: 700;
  }

  select,
  input {
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px;
  }

  input[type="submit"] {
    width: max-content;
    margin: 2rem 0;
    border-radius: 30px;
    font-weight: 600;
    padding: 0.8rem 0.8rem 0.5rem 0.8rem;
    background: #0073e6;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s ease;
    border: none;

    &:hover {
      background-color: #3333ff;
    }
  }

  input[type="radio"] {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1000px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 0;
  }
`;

const Buttons = styled.div`
  
`
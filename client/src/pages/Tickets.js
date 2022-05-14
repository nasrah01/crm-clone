/* eslint-disable eqeqeq */
import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import CategoryContext from '../context'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Tickets = ({ editMode }) => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  // eslint-disable-next-line no-unused-vars
  const { categories, setCategories } = useContext(CategoryContext);

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
      <h1>{editMode ? "Update your Ticket" : "Create a Ticket"}</h1>
      <TicketBlock>
        <Form onSubmit={submitForm}>
          <FormSection>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              required={true}
              value={formData.title}
              onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              required={true}
              value={formData.description}
              onChange={handleChange}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              value={formData.category}
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
              <label htmlFor="pr-1">1</label>
              <input
                id="pr-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="pr-2">2</label>
              <input
                id="pr-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="pr-3">3</label>
              <input
                id="pr-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="pr-4">4</label>
              <input
                id="pr-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="pr-5">5</label>
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
                  <option value="done">Done</option>
                  <option value="working on it">Working on it</option>
                  <option value="stuck">Stuck</option>
                  <option value="not started">Not started</option>
                </select>
              </>
            )}
            <input type="submit" value="Submit" />
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

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              value={formData.avatar}
              onChange={handleChange}
              required={false}
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
  padding: 2rem 2rem 0 2rem;
  height: 90vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-weight: 500;
    color: #404040;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 26px;
    }
  }
`;

const TicketBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 0;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  box-shadow: rgba(230, 230, 255, 0.5) 0px 22px 70px 4px;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
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
    margin: 2rem 0;
    padding: 6px 16px;
    background-color: #6c6cff;
    color: #fff;
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 550px) {
    width: 80vw;
  }
`;
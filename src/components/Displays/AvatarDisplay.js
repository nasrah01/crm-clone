import styled from 'styled-components'
const blankAvatar = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png";


const AvatarDisplay = ({owner, avatar}) => {
  return (
    <ImageContainer>
      <Image>
        <img src={avatar ? avatar : blankAvatar} alt={`${owner} avatar`} />
      </Image>
    </ImageContainer>
  )
};

export default AvatarDisplay;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
width: 80px;
`

const Image = styled.div`
width: 50px;
height: 50px;
border-radius: 25px;
overflow: hidden;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

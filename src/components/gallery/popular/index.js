import { styled } from "styled-components";
import Title from "../../title";
import photos from "../../../popular-photos.json";

const PhotosColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Popular = () => {
  return (
    <section>
      <Title $align="center">Populares</Title>
      <PhotosColumn>
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </PhotosColumn>
      <Button>Ver mais</Button>
    </section>
  );
};

export default Popular;

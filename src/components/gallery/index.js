import { styled } from "styled-components";
import Title from "../title";
import Tags from "./tags";
import Popular from "./popular";
import Image from "./image";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({
  photos = [],
  onPhotoExpanded,
  onPhotoFavorited,
  setTag,
}) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                onExpanded={onPhotoExpanded}
                onFavorited={onPhotoFavorited}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;

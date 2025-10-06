import styled from "styled-components";
import GlobalStyles from "./components/global-styles";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import bannerBackground from "./assets/banner.png";
import Banner from "./components/banner";
import Gallery from "./components/gallery";

import photos from "./photos.json";
import { useEffect, useState } from "react";
import Modal from "./components/modal";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [expandedPhoto, setExpandedPhoto] = useState(null);

  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filtredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filtredPhotos);
  }, [filter, tag]);

  const onPhotoFavorited = (photo) => {
    if (photo.id === expandedPhoto?.id) {
      setExpandedPhoto({
        ...expandedPhoto,
        favorite: !expandedPhoto.favorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((p) => {
        return {
          ...p,
          favorite: p.id === photo.id ? !photo.favorite : p.favorite,
        };
      })
    );
  };

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              j
              backgroundImage={bannerBackground}
            />
            <Gallery
              photos={galleryPhotos}
              onPhotoExpanded={(photo) => setExpandedPhoto(photo)}
              onPhotoFavorited={onPhotoFavorited}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <Modal
        photo={expandedPhoto}
        onCloseModal={() => setExpandedPhoto(null)}
        onPhotoFavorited={onPhotoFavorited}
      />
    </GradientBackground>
  );
};

export default App;

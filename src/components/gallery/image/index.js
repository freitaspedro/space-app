import { styled } from "styled-components";
import IconButton from "../../icon-button";

const Figure = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({ photo, expanded = false, onExpanded, onFavorited }) => {
  const favoriteIcon = photo.favorite
    ? "/icons/favorite.png"
    : "/icons/favorite-disabled.png";

  return (
    <Figure $expanded={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.src}</h4>
          <IconButton onClick={() => onFavorited(photo)}>
            <img src={favoriteIcon} alt="Icone de favorito" />
          </IconButton>
          {!expanded && (
            <IconButton
              aria-hidden={expanded}
              onClick={() => onExpanded(photo)}
            >
              <img src="/icons/expand.png" alt="Icone de expandir" />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;

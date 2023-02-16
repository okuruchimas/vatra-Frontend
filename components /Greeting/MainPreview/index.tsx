import styled from "@emotion/styled";
import { fadeInUp } from "react-animations";
import { keyframes } from "@emotion/react";
const fadeInUpAnimation = keyframes`${fadeInUp}`;

const MainPreview = () => {
  return (
    <Wrap>
      <Img src="/icons/logo/preview.webp" />
      {/*<Video autoPlay playsInline controls loop muted>*/}
      {/*  <source*/}
      {/*    src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"*/}
      {/*    type="video/mp4"*/}
      {/*  />*/}
      {/*</Video>*/}
    </Wrap>
  );
};

export default MainPreview;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 45px;
  width: 92vw;
  padding: 2vw 0;
  @media (max-width: 960px) {
    animation: 1s ${fadeInUpAnimation};
    padding: 4vw 0;
    border-radius: 30px;
    aspect-ratio: 350/313;
  }
`;

const Video = styled.video`
  width: 88vw;
  height: auto;
  border-radius: 30px;
  outline: none;
  @media (max-width: 960px) {
    object-fit: cover;
    width: 80vw;
    aspect-ratio: 302/265;
  }
`;

const Img = styled.img`
  width: 88vw;
  height: auto;
  border-radius: 30px;
  outline: none;
  @media (max-width: 960px) {
    object-fit: cover;
    width: 80vw;
    aspect-ratio: 302/265;
  }
`;
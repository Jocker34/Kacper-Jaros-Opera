import { useState, useRef } from 'react';
import styled from 'styled-components';

interface Slide {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}

interface ImageSliderProps {
  slides: Slide[];
  width: number;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ slides, width }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = (index: number) => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.src = slides[index].audioURL;
      audioElement.play();
    }
  };

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    playAudio(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    playAudio(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    playAudio(index);
  };

  const getSlideStyle = (index: number) => ({
    backgroundImage: `url(${slides[index].imageURL})`,
    width: `${width}px`,
  });

  const getContainerSlidesStyles = () => ({
    width: width * slides.length,
    transform: `translateX(${-(currentIndex * width)}px)`,
  });

  return (
    <Slider>
      <LeftArrow onClick={previousSlide}>←</LeftArrow>
      <RightArrow onClick={nextSlide}>→</RightArrow>
      <OverflowSlides>
        <ContainerSlides style={getContainerSlidesStyles()}>
          {slides.map((slide, index) => (
            <div key={slide.id}>
              <p>{slide.text}</p>
              <Slides style={getSlideStyle(index)}></Slides>
            </div>
          ))}
        </ContainerSlides>
      </OverflowSlides>
      <DotsContainer>
        {slides.map((slide, index) => (
          <Dots key={slide.id} onClick={() => goToSlide(index)}>
            ●
          </Dots>
        ))}
      </DotsContainer>
      <audio ref={audioRef} autoPlay />
    </Slider>
  );
};

const Slides = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
`;

const Slider = styled.div`
  height: 100%;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const LeftArrow = styled(Arrow)`
  left: 32px;
`;

const RightArrow = styled(Arrow)`
  right: 32px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Dots = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
`;

const ContainerSlides = styled.div`
  display: flex;
  height: 100%;
  transition: transform ease-out 0.3s;
`;

const OverflowSlides = styled.div`
  overflow: hidden;
  height: 100%;
`;

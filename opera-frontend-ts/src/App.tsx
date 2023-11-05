import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageSlider } from './components/ImageSlider';
import styled from 'styled-components';

interface Slide {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}

export const App: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Slide[]>(
          'http://localhost:3000/slides'
        );
        setSlides(response.data);
      } catch (err) {
        setError(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>React Slider</h1>
      <Container>
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ImageSlider slides={slides} width={800} />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 800px;
  height: 500px;
  margin: 0 auto;
`;

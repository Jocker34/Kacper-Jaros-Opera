import { render, screen } from '@testing-library/react';
import { ImageSlider } from './ImageSlider';

const mockSlides = [
  {
    id: 1,
    text: 'Slide 1',
    imageURL: 'slide1.jpg',
    audioURL: 'audio1.mp3',
  },
  {
    id: 2,
    text: 'Slide 2',
    imageURL: 'slide2.jpg',
    audioURL: 'audio2.mp3',
  },
];

test('renders ImageSlider component with initial slide', () => {
  render(<ImageSlider slides={mockSlides} width={800} />);

  const slide1 = screen.getByText('Slide 1');
  const rightArrow = screen.getByText('→');
  const dot1 = screen.getAllByText('●')[0];

  expect(slide1).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
  expect(dot1).toBeInTheDocument();
});

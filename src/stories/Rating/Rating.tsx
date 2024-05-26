import './Rating.css';
import { MouseEventHandler, useState } from 'react';
import { FaStar } from 'react-icons/fa';

export type StarProps = {
  selected: boolean;
  onSelect?: MouseEventHandler<SVGElement>;
};

export type RatingProps = {
  number?: number;
};

const Star = ({ selected, onSelect = (f) => f }: StarProps) => (
  <FaStar className='star' color={selected ? '#cc55cc' : '#f2f2f2'} onClick={onSelect} />
);

export default function Rating({ number = 10 }: RatingProps) {
  const [selected, setSelected] = useState(0);

  return [...Array(number)].map((_, i) => (
    <Star key={i} onSelect={() => setSelected(i + 1)} selected={i < selected} />
  ));
}

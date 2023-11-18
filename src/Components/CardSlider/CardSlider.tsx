import React, {FC, useState} from 'react';
import styles from './CardSlider.module.css';
import {MovieType} from "../../types";
interface IProps {
  items: MovieType[];
  onSelect: (movie: MovieType) => void
}

const CardSlider: FC<IProps> = ({ items, onSelect }) => {
  const itemsPerPage = 8;
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (items.length + 1 - itemsPerPage));
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? items.length - itemsPerPage : prevIndex - 1));
  };

  const handleSelect = (movie: MovieType) => () => {
    onSelect(movie)
  }

  return (
    <div className={styles.cardSlider}>
      <button className={styles.prevButton} onClick={prevItems}>
        {'<'}
      </button>

      <div className={styles.cardsContainer}>
        {visibleItems.map((item) => (
          <div className={styles.card} key={item.id} onClick={handleSelect(item)}>
            <img src={`/assets/${item.coverImage}`} alt="" />
          </div>
        ))}
      </div>

      <button className={styles.nextButton} onClick={nextItems}>
        {'>'}
      </button>
    </div>
  );
};

export default CardSlider;
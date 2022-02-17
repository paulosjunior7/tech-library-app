import React, { useState, createContext } from 'react';

import { books } from '../utils';

export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [firstSlotBook, setFirstSlotBook] = useState(books);
  const [secondSlotBook, setSecondSlotBook] = useState([]);
  const [currentSort, setCurrentSort] = useState('default');
  const [upDirection, setUpDirection] = useState(true);

  const handleOrderBy = (type) => {
    let nextSort = 'default';

    if (type === 'size') {
      if (currentSort === 'sizeUp') {
        nextSort = 'sizeDown'
        setUpDirection(false);
      } else if (currentSort === 'sizeDown') {
        nextSort = 'sizeUp'
        setUpDirection(true);
      } else {
        nextSort = 'sizeUp'
        setUpDirection(true);
      }
    }

    if (type === 'color') {
      if (currentSort === 'colorUp') {
        nextSort = 'colorDown'
        setUpDirection(false);
      } else if (currentSort === 'colorDown') {
        nextSort = 'colorUp'
        setUpDirection(true);
      } else {
        nextSort = 'colorUp'
        setUpDirection(true);
      }
    }

    if (type === 'alphabetic') {
      if (currentSort === 'alphabeticUp') {
        nextSort = 'alphabeticDown'
        setUpDirection(false);
      } else if (currentSort === 'alphabeticDown') {
        nextSort = 'alphabeticUp'
        setUpDirection(true);
      } else {
        nextSort = 'alphabeticUp'
        setUpDirection(true);
      }
    }

    setCurrentSort(nextSort);
  }

  return (
    <StoreContext.Provider
      value={{
        firstSlotBook,
        setFirstSlotBook,
        secondSlotBook,
        setSecondSlotBook,
        currentSort,
        setCurrentSort,
        upDirection,
        setUpDirection,
        handleOrderBy
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

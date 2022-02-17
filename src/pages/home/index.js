import React from 'react';
import { useDrop } from 'react-dnd';
import {
  Container, Lady, BookCase,
  ContainerRoof, ContainerGround, ContainerBooks, ContainerBooks2, Logo
} from './styles';

import Clock from '../../components/Clock';
import Board from '../../components/Board';
import Book from '../../components/Book';

import useStore from '../../hooks/useStore';

import { sortTypes } from '../../utils';

const Home = () => {
  const { setSecondSlotBook, setFirstSlotBook, firstSlotBook, secondSlotBook, currentSort, upDirection } = useStore();
  const [{ isOverSecond }, firstDropSloot] = useDrop({
    accept: 'book',
    drop: (item) => {
      if(!firstSlotBook.find((a) => item.alphabetic === a.alphabetic)) {
        setFirstSlotBook((firstSlotBook) => !firstSlotBook.includes(item) ? [...firstSlotBook, item] : firstSlotBook);
        setSecondSlotBook(secondSlotBook.filter((p) => p.alphabetic !== item.alphabetic));
      }
    },
    collect: (monitor) => ({
      isOverSecond: monitor.isOver()
    })
  })

  const [{ isOrverFirst }, secondDropSlot] = useDrop({
    accept: 'book',
    drop: (item) => {
      if(!secondSlotBook.find((a) => item.alphabetic === a.alphabetic)) {
        setSecondSlotBook((secondSlotBook) => !secondSlotBook.includes(item) ? [...secondSlotBook, item] : secondSlotBook);
        setFirstSlotBook(firstSlotBook.filter((p) => p.alphabetic !== item.alphabetic));
      }
    },
    collect: (monitor) => ({
      isOrverFirst: monitor.isOver()
    })
  })

  return (
    <Container>
      <ContainerRoof />
      <Clock />
      <Logo />
      <BookCase>
      <ContainerBooks ref={firstDropSloot} Up={upDirection}>
        {
          [...firstSlotBook].sort(sortTypes[currentSort].fn).map((props, index) => (
            <Book props={props} id={index} />
          ))
        }
      </ContainerBooks>
      
      <ContainerBooks2 ref={secondDropSlot} Up={!upDirection}>
        {
          [...secondSlotBook].sort(sortTypes[currentSort].fn).reverse().map((props, index) => (
            <Book props={props} id={index} />
          ))
        }
      </ContainerBooks2> 
      </BookCase>
      <ContainerGround />
      <Board  />
      <Lady />
    </Container >
  );
}

export default Home;


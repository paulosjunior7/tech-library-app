import React, { useState } from 'react';

import { 
  Container, 
  Content, 
  Button, 
  ImgBoard, 
  ButtonOrganize, 
  ContainerButtons, 
  Hr,  
  FilterColors,
  FilterAlphabetic,
  FilterSizes,
  FilterButton,
  FilterButtonActive,
  Organize
 } from './styles';

 import useStore from '../../hooks/useStore';

const Board = () => {
  const [order, setOrder ] = useState('');
  const { handleOrderBy } = useStore();

  return (
    <Container>
      <Content>
        <p>SORT  BY</p>
        <ContainerButtons>
          <Button onClick={() => setOrder('alphabetic')}>
            <FilterAlphabetic />
            {order === 'alphabetic' ? <FilterButtonActive /> :  <FilterButton /> }
          </Button>
          <Button onClick={() => setOrder('color')}>
            <FilterColors />
            {order === 'color' ? <FilterButtonActive /> :  <FilterButton /> }
          </Button>
          <Button onClick={() => setOrder('size')}>
            <FilterSizes />
            {order === 'size' ? <FilterButtonActive /> :  <FilterButton /> }
          </Button>
        </ContainerButtons>
        <Hr />
        <ButtonOrganize onClick={() => handleOrderBy(order)} >
          <Organize />
        </ButtonOrganize>
      </Content>
      <ImgBoard />
    </Container >
  );
}

export default Board;

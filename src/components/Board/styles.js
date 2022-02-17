import styled from 'styled-components';


import BoardImg from '../../assets/board.svg';
import ButtonSVG from '../../assets/filter_button.svg';
import OrganizeSVG from '../../assets/button.svg';
import ButtonActiveSVG from '../../assets/filter_button_active.svg';
import FilterColorSVG from '../../assets/filter_colors.svg';
import FilterSizesSVG from '../../assets/filter_sizes.svg';
import FilterAlphabeticSVG from '../../assets/filter_alphabetic.svg';

export const Container = styled.div`
   display: flex;
   position: absolute;
   z-index: 6;
   flex-direction: row;
   justify-content: end;
   width: 55rem;
   height: 21rem;
   background-color: transparent;
   bottom: 5rem;
   left: 5rem;
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  width: 22rem;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 2rem;

  p {
    color: #CABFD8;
    font-size: 1.5rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 44px;
  justify-content: space-between;
`;

export const ImgBoard = styled.img.attrs({
  src: `${BoardImg}`
})``;

export const FilterButton = styled.img.attrs({
  src: `${ButtonSVG}`
})`
  width: 50px;
  height: 50px;
`;



export const FilterButtonActive = styled.img.attrs({
  src: `${ButtonActiveSVG}`
})`
  width: 50px;
  height: 50px;
`;

export const FilterColors = styled.img.attrs({
  src: `${FilterColorSVG}`
})`
  width: 20px;
  position: absolute;
`;

export const FilterAlphabetic = styled.img.attrs({
  src: `${FilterAlphabeticSVG}`
})`
  width: 10px;
  position: absolute;
`;

export const FilterSizes = styled.img.attrs({
  src: `${FilterSizesSVG}`
})`
  width: 20px;
  position: absolute;
`;


export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonOrganize = styled.button`
  background-color: #22C93B;
  width: 170px;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  
  &:hover {
    cursor: pointer;
  }
  
  p {
    color: rgb(231,223,239)
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Organize = styled.img.attrs({
  src: `${OrganizeSVG}`
})`
  width: 180px;
  height: 50px;
  
  &:hover {
    cursor: pointer;
      margin-top: 2px;
    }
`;


export const Hr = styled.hr`
  width: 80%;
  height: 5px;
  background-color: rgb(231,223,239);
  margin-top: 12px;
  border:0;
`;

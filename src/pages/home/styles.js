import styled from 'styled-components';

import BgStripes from '../../assets/bg_stripes.svg';
import GroudImg from '../../assets/ground.svg';
import BoardImg from '../../assets/board.svg';
import LadyImg from '../../assets/lady.svg';
import BookCaseImg from '../../assets/bookcase.svg';
import LogoImg from '../../assets/logo.svg';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   z-index: 1;
   width: 100vw;
   height: 100vh;
`;

export const ContainerRoof = styled.div`
   display: flex;
   width: 100%;
   height: 50%;
   min-width: 650px;
   @media (max-width: 600px) {
      min-height: 735px;
    }
   background: url(${BgStripes}) center center;
`;

export const ContainerGround = styled.div`
   display: flex;
   width: 100%;
   height: 50%;
   min-width: 655px;
   
   @media (max-width: 600px) {
      min-height: 735px;
    }
   background: url(${GroudImg}) center center;
`;

export const Roof = styled.img.attrs({
   src: `${BgStripes}`
})`
   width:100%;
   object-fit: cover;
   background-size: 100% 100%;
`;

export const Ground = styled.img.attrs({
   src: `${GroudImg}`

})`
   width:100%;
   object-fit: cover;
   transform: rotate(180deg);
`;

export const Board = styled.img.attrs({
   src: `${BoardImg}`
})`
   
`;

export const DivBoard = styled.div`
   position: relative;
   display: 'flex';
   flex-direction: row;
   width: 30%;
   height: 30%;
   margin-left: 32px;
   margin-bottom: 32px;
`;


export const Lady = styled.img.attrs({
   src: `${LadyImg}`
})`
   width: 40rem;
   position: absolute;
   left: 0px;
   bottom: 0px;
   z-index: 6;
`;

export const Logo = styled.img.attrs({
   src: `${LogoImg}`
})`
   height: 20rem;
   width: 20rem;
   top: 10%;
   right: 10%;
   display: flex;
   position: absolute;
   z-index: 99;
`;


export const BookCase = styled.div`
   position: fixed;
   width: 75rem;
   height: 45rem;
   margin: auto auto auto auto;
   left: 32%;
   top: 20%;
   background: url(${BookCaseImg}) no-repeat center center;
`;

export const ContainerBooks2 = styled.div`
   display: flex;
   flex-direction: row;
   height: 12rem;
   margin-top: 5rem;
   margin-left: 7rem;
   margin-right: 22rem;
   justify-content: ${props => (props.Up ? 'start' : 'end')};
`;

export const ContainerBooks = styled.div`
   display: flex;
   flex-direction: row;
   height: 12rem;
   margin-top: 12rem;
   margin-left: 7rem;
   margin-right: 22rem;
   justify-content: ${props => (props.Up ? 'start' : 'end')};
`;


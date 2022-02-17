import styled from 'styled-components';
import ClockBaseImg from '../../assets/clock_base.svg';

export const ClockBase = styled.div`
  border-radius: 100%;
  position: relative;
  top: 10%;
  left: 10%;
  position: fixed;
  height: 20rem;
  width: 20rem;
  background: url(${ClockBaseImg}) no-repeat center center;

  @media (max-width: 648px) {
      display: none;
    }
`;

export const Hour = styled.div`
  border: 2px solid #633585;
  background-color: #633585;
  top: 50%;
  left: 50%;
  width: 30%;
  position: relative;
  transform: rotate(${props => (props.rotateHour)}deg);
  transform-origin: 0% 0%;
`;

export const Minute = styled.div`
  border: 2px solid #9A6CBE;
  background-color: #9A6CBE;
  top: 50%;
  width: 35%;
  left: 50%;
  position: relative;
  transform: rotate(${props => (props.rotateMinute)}deg);
  transform-origin: 0% 0%;
`;

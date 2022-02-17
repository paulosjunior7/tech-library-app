import styled from 'styled-components';

export const BookComponent = styled.img.attrs({
  src: `${props => (props.source)}`
})`
  width:100%;
  object-fit: cover;
`;

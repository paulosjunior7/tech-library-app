import { React } from 'react';
import { useDrag } from 'react-dnd';

const Book = ({id, props }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'book',
    item: { id, ...props},
    collect: (monitor) => ({
        isDragging: monitor.isDragging()
    })
})
  return (
    <div ref={dragRef} >
        {props.name}
        <img src={`${props.source}`} style={{ width: '3.5rem' }} />
    </div>
  );
}

export default Book;

export const ItemTypes = {
  BOX: 'box',
}


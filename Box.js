import React from 'react';
import Item from './Item';

export default function Box(props) {
  const handleDelete = (index) => {
    const updatedTodos = props.data.filter((_, i) => i !== index);
    props.updateTodos(updatedTodos);
  };

  const items = props.data.map((singleData, index) => (
    <Item
      key={index}
      index={index}
      item={singleData.item}
      time={singleData.time}
      handleDelete={handleDelete}
    />
  ));

  return <div className='p-3'>{items}</div>;
}












// import React from 'react';
// import Item from './Item';

//  export default function Box(props) {
//    const items = props.data.map((singleData, key) => (
//      <Item key={key} item={singleData.item} time={singleData.time} />
//    ));

//    return <div className='p-3'>{items}</div>;
//  }

import React from 'react';

const ProductCard = ({ item }) => {
  console.log("item", item);
  return (
    <div className='main-product'>
      <img src={item?.img} width={250} />
      <div>{item?.choice ? 'Conscious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? '신제품' : ''}</div>
    </div>
  )
}

export default ProductCard
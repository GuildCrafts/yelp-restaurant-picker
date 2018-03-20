import React, { Component } from 'react'

export default (props) => {
  console.log('props:', props);
  const { location, name} = props.restaurant
  const { address1, address2, city } = location
  return (
    <div>
      <span>Yayy you are going to have a fabulous meal at {name}!</span>
      <div>Address:</div>
      <div>{address1}</div>
      <div>{address2}</div>
      <div>{city}</div>
    </div>
  )
}

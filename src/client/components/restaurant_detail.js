import React from 'react'

export default (props) => {
  console.log('props:', props);
  const { location, name} = props.restaurant
  const { address1, address2, city } = location
  return (
    <div>
      <span>Yayy you are going to have a fabulous meal at {name}!</span>
      Address:
      {address1}
      {address2}
      {city}
    </div>
  )
}

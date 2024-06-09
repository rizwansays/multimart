import React from 'react'

export default function Helmet(props) {
  document.title = 'Maltimart -' + props.title;
  return (
    <div className=''>
      {props.children}
    </div>
  )
}

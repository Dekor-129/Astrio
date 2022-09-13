import React from 'react'

export default function CardImage(props) {
  return (
    <img src={props.src} alt={props.title} title={props.title}/>
  )
}

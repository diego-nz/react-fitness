import React from 'react'
import ButtonImg from '../assets/images/add.png'
import { Link } from 'react-router-dom'

export default function AddButton() {
  return (
    <Link to='/exercise/new'>
      <img className='mx-auto d-block img-fluid' src={ButtonImg} alt='Botón de agregar'></img>
    </Link>
  )
}

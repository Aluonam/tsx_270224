import React from 'react'

const ImageList = () => {


  return (
    <div>
    <h3>¿Cuántas imágenes deseas mostrar?</h3>
    <input type='number' max={50}></input>
    <button>mostrar</button>
    </div>
  )
}

export default ImageList
import React, { useState } from 'react'

const ImageList = () => {

    type imagePrototype = [
        {
            id: number,
            author: string,
            width: number,
            height: number,
            url: string,
            download_url: string
        }
    ]

    const [allImages, setAllImages] = useState<imagePrototype>()

  return (
    <div>
    <h3>¿Cuántas imágenes deseas mostrar?</h3>
    <input type='number' max={50}></input>
    <button>mostrar</button>
    </div>
  )
}

export default ImageList
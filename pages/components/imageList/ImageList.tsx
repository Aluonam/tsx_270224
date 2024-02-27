import React, { useState } from 'react'

const ImageList = () => {

    type imagePrototype = [
        {
            "id": "102",
            "author": "Ben Moore",
            "width": 4320,
            "height": 3240,
            "url": "https://unsplash.com/photos/pJILiyPdrXI",
            "download_url": "https://picsum.photos/id/102/4320/3240"
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
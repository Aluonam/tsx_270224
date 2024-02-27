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

    const [allImages, setAllImages] = useState<imagePrototype>() //GUARDA LISTA QUE RECIBE DE LA API
    const [userNumber, setUserNumber] = useState<number>() //GUARDA NUMERO QUE HA ESCRITO EL USUARIO

  return (
    <div>
    <h3>¿Cuántas imágenes deseas mostrar?</h3>
    <input type='number' max={50} min={0} onChange={(e)=>setUserNumber(parseInt(e.target.value))} value={userNumber}></input>
    <button>mostrar</button>
    {userNumber}
    </div>
  )
}

export default ImageList
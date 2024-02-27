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
    const [userNumber, setUserNumber] = useState<number>(5) //GUARDA NUMERO QUE HA ESCRITO EL USUARIO

    const apiCall = async (numImages:number)=>{
        try{
            const url = await fetch(`https://picsum.photos/v2/list?page=2&limit=${numImages}`);
            const data = await url.json();
            console.log(data)
        }catch(error:any){console.log(error,"error")}
    }

  return (
    <div>
    <h3>¿Cuántas imágenes deseas mostrar?</h3>
    <input type='number' max={50} min={0} onChange={(e)=>setUserNumber(parseInt(e.target.value))} value={userNumber}></input>
    <button onClick={()=>{apiCall(userNumber)}}>mostrar</button>
    {userNumber}
    </div>
  )
}

export default ImageList
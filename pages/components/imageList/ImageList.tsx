import React, { useState } from 'react'
import styleImg from './ImageList.module.css'

const ImageList = () => {

    type imagePrototype = 
        {
            id: number,
            author: string,
            width: number,
            height: number,
            url: string,
            download_url: string
        }
    

    const [allImages, setAllImages] = useState<imagePrototype[]>() //GUARDA LISTA QUE RECIBE DE LA API
    const [userNumber, setUserNumber] = useState<number>(5) //GUARDA NUMERO QUE HA ESCRITO EL USUARIO

    const apiCall = async (numImages:number)=>{
        try{
            const url = await fetch(`https://picsum.photos/v2/list?page=2&limit=${numImages}`);
            const data = await url.json();
            setAllImages(data)
            console.log(data) 
        }catch(error:any){console.log(error,"error")}
    }

    const showImages = allImages?.map((oneImg)=>{
        return(
            <img src={oneImg.download_url} key={oneImg.id} className={styleImg.image}></img>
        )
    })

  return (
    <div className={styleImg.generalBox}>
        <h3>¿Cuántas imágenes deseas mostrar?</h3>
        <div className={styleImg.buttonsBox}>
            <input type='number' max={50} min={0} onChange={(e)=>setUserNumber(parseInt(e.target.value))} value={userNumber}></input>
            <button onClick={()=>{apiCall(userNumber)}}>mostrar</button>
        </div>
        <div className={styleImg.imagesList}>
           {showImages} 
        </div>
        
    </div>
  )
}

export default ImageList
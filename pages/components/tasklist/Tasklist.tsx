import React, { useState } from 'react'

  type taskPrototype = {
        id: number,
        text: string,
        done: true
    }

export const Tasklist = () => {

    const [listOfTask, setListOfTask] = useState<taskPrototype[]>(        
       [ {
        id: 0,
        text: "tarea por defecto",
        done: true
        }]
    )
    const [inputText, setInputText] = useState<string>("ejemplo de tarea")

    const handleAddTask = ()=>{
        setListOfTask([...listOfTask,{
            id: 0,
            text: inputText,
            done: true
        }])
        console.log(listOfTask)
        setInputText("")
    }

  return (
    <div>
    <h2>Tasklist example with TS and React</h2>
    <h3>Escribe una tarea</h3>
    <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}></input>
    <button onClick={()=>{handleAddTask()}}>send</button>
    <br></br>
    <h3>Tareas:</h3>
    </div>
  )
}


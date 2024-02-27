import React, { useState } from 'react'

const Tasklist = () => {

    type taskPrototype = {
        id: number,
        text: string,
        done: true
    }

    const [taskList, setTaskList] = useState<taskPrototype>(        
        {
        id: 0,
        text: "tarea por defecto",
        done: true
        }
    )
    const [inputText, setInputText] = useState<string>("ejemplo de tarea")

  return (
    <div>
    <h2>Tasklist example with TS and React</h2>
    <h3>Escribe una tarea</h3>
    <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}></input>
    <button>send</button>
    <br></br>
    <h3>Tareas:</h3>
    {taskList.text}
    </div>
  )
}

export default Tasklist
import React, { useState } from 'react'

const Tasklist = () => {

    type taskPrototype = {
        id: number,
        text: string,
        done: true
    }

    const [taskList, setTaskList] = useState<taskPrototype>()
    const [inputText, setInputText] = useState<string>("ejemplo de tarea")

  return (
    <div>Tasklist

    <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}></input>

    </div>
  )
}

export default Tasklist
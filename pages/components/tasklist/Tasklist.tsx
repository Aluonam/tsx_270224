import React, { useState } from 'react'
import style from './Tasklist.module.css'

  type taskPrototype = {
        id: number,
        text: string,
        done: boolean
    }

export const Tasklist = () => {

    const [listOfTask, setListOfTask] = useState<taskPrototype[]>(        
       [ {
        id: 0,
        text: "tarea por defecto",
        done: false
        }]
    )
    const [inputText, setInputText] = useState<string>("ejemplo de tarea")

    const handleAddTask = ()=>{
        setListOfTask([...listOfTask,{
            id: listOfTask.length,
            text: inputText,
            done: false
        }])
        console.log(listOfTask) 
        setInputText("")
    }

    const handleTaskDone = (idTask:number) => {
        const newData = listOfTask.map((oneTask)=>{
        if(oneTask.id === idTask){
            oneTask.done = !oneTask.done
        }
        return oneTask
        })

        setListOfTask(newData)
    }

    const showTaskList = listOfTask.map((oneTask)=>{
        return(
            <>
            <li className={oneTask.done ? style.taskTextDone : style.taskTextNotDone}>
                {oneTask.text}
                <button onClick={()=>handleTaskDone(oneTask.id)}>Done</button>
            </li>
            </>
        )
    })


  return (
    <div>
    <h2>Tasklist example with TS and React</h2>
    <h3>Escribe una tarea</h3>
    <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}></input>
    <button onClick={()=>{handleAddTask()}}>send</button>
    <br></br>
    <h3>Tareas:</h3>
    <ul>
        {showTaskList}
    </ul>
    </div>
  )
}


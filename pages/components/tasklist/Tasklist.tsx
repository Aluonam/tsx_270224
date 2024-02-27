import React, { useState } from 'react'

const Tasklist = () => {

    type taskPrototype = {
        id: number,
        text: string,
        done: true
    }

    const [taskList, setTaskList] = useState<taskPrototype>()

  return (
    <div>Tasklist</div>
  )
}

export default Tasklist
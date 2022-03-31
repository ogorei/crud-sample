
import React, { ChangeEvent, useState } from 'react'
import {IoIosAddCircle} from 'react-icons/io'

type Props = {}

export default function TaskForm({}: Props) {
  const [task, setTask]= useState({
    title:'',
    desc:''
  })
  //es necesario declarar el tipo de dato de 'e', ChangeEvent es una interface de react, y dentro le definimos que el evento viene de un elemento HTML
  //en este caso el changeEvent aceptara como valido un input y un textarea nadamas
  const handleInput = (e : ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) =>{
    // setTask({...task,[title]: e.target.value})
    console.log(e.target.name);
    console.log(e.target.value);
  }

// basado en el name al momento de tipear se va  a llenar la variable
  return (
    <div className="card mb-4 card-body bg-secondary">
        <h1 className='text-black text-center my-4'>Form</h1>
          <form action="">
            <input
              type="text"
              name='title'
              placeholder='write a task'
              className="form-control mb-6 rounded-0 border-1"
              onChange={handleInput}  
            />

              <textarea
                name="desc"
                id="desc"
                rows={5}
                className="rounded-0 my-2 form-control border-1"
                placeholder='write a description'
                onChange={handleInput}    
              >
              </textarea>

              <button
                className="btn-secondary border-1 my-4 p-2 item-center"
              >
                <IoIosAddCircle/>
                  Save
              </button>
          </form>

    </div>
  )
}

import React from 'react'

type Props = {}

export default function TaskForm({}: Props) {
  return (
    <div className="card mb-4 card-body bg-secondary">
        <h1>Form</h1>
          <form action="">
            <input 
              type="text" 
              placeholder='write a task'
              className="form-control mb-6 rounded-0 border-1" />
          </form>

    </div>
  )
}

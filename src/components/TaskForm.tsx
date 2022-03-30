import React from 'react'
import {} from 'react-icons'

type Props = {}

export default function TaskForm({}: Props) {
  return (
    <div className="card mb-4 card-body bg-secondary">
        <h1 className='text-white'>Form</h1>
          <form action="">
            <input
              type="text"
              placeholder='write a task'
              className="form-control mb-6 rounded-0 border-1" />

              <textarea
                name="desc"
                id="desc"
                rows={5}
                className="rounded-0 form-control"
                placeholder='write a description'></textarea>

                <button
                  className="btn-secondary border-1 m-2 "
                >
                  Save
                </button>
          </form>

    </div>
  )
}

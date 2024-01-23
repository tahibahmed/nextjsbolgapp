import { addPost, deletePost } from '@/lib/action'
import React from 'react'


const ServerAction = () => {
  return (
    <div>
        <form action={addPost}>
            <input type='text' name='title'/>
            <input type='text' name='desc'/>
            <input type='text' name='slug'/>
            <input type='text' name='userId'/>
            <button>Create</button>
        </form>
        <form action={deletePost}>
            <input type='text' name='id'/>
            <button>delete</button>
        </form>

    </div>
  )
}

export default ServerAction
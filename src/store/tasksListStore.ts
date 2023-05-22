import { Category, Task } from '@/classes/Task'
import { MouseEventHandler } from 'react'
import {create} from 'zustand'
import {persist}  from 'zustand/middleware'

interface TaskObject {
   id: number 
   category: Category
   name: string
   description: string
   dateLimit: Date
   importantNumber: number
}



interface TaskListStorage {
    tasksList: TaskObject[]
    taskNumber: number
    addTask: (tarea: TaskObject) => void
    deleteTask: (id: number) => void
    deleteAll: (e:[]) => void
}


export const useTasksListStore = create(persist<TaskListStorage>
    ((set, get) => ({
    tasksList: [],
    taskNumber: 100,
    addTask: (tarea:TaskObject) => {
        const { tasksList, taskNumber } = get()
        
        set({tasksList: [...tasksList].
                         concat(tarea).
                         map(e => ({...e, importantNumber: Math.round(e.dateLimit.getTime()/1000/60/60 - new Date().getTime()/1000/60/60)})).
                         sort((a,b)=> {
            return a.importantNumber - b.importantNumber
          }), taskNumber: taskNumber + 1})
    },
    deleteTask: (id: number) =>{
        const {tasksList} = get()
        
        set({tasksList: [...tasksList].filter(e => e.id !== id)})
    } ,
        deleteAll: (e:[]) => {
        const { tasksList } = get()
        
        set({tasksList: e})
    } 
    }), {
        name: "tasks-dalowa"
    }
))
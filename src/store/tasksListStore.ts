import { Task } from '@/classes/Task'
import { MouseEventHandler } from 'react'
import {create} from 'zustand'
import {persist}  from 'zustand/middleware'
import TaskList from '../components/TaskList';



interface TaskListStorage {
    tasksList: Task[]
    taskNumber: number
    addTask: (tarea: Task) => void
    deleteTask: (id: number) => void
    deleteAll: (e:[]) => void
}


export const useTasksListStore = create(persist<TaskListStorage>
    ((set, get) => ({
    tasksList: [],
    taskNumber: 100,
    addTask: (tarea:Task) => {
        const { tasksList, taskNumber } = get()
        set({tasksList: [...tasksList].concat(tarea).sort((a,b)=> {
            return b.importantNumber - a.importantNumber
          }), taskNumber: taskNumber + 1})
    },
    deleteTask: (id: number) =>{
        const {tasksList} = get()
        set({tasksList: [...tasksList].filter(e => e.id !== id)})
    } ,
    deleteAll: (e:[]) => {
        const { tasksList } = get()
        
        set({tasksList: e})
    }, sortList: () => {
        const { tasksList } = get()
        set({tasksList: tasksList})
    }  
    }), {
        name: "tasks-dalowa"
    }
))
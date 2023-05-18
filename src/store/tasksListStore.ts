import {create} from 'zustand'


interface Task {
    id: number
    name: string
    description: string
    category: string
    priority: number;
}

interface TasksList {
    tasksList: Task[]
    addTask: (t: Task) => void
    
}



export const useTasksListStore = create<TasksList>((set, get) => ({
    tasksList: [],
    addTask: (t:Task) => {
        const { tasksList } = get()
        set({tasksList: tasksList})
    }
}))
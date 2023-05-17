import {create} from 'zustand';

interface SelectStore {
    index: number;
    changeIndex: (i: number) => void;
}


export const useSelectStore = create<SelectStore>((set, get)=>({
    index: 0,
    changeIndex: (i:number) => {
        const { index } = get()
        set({index: i})
    }
}));

/* changeIndex: (i:number) => {
        const { index } = get()
        set({index: index + i})
    }  */

    /* changeIndex: (i:number) => set((state) => ({index: i})) */
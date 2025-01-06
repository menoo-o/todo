import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface toggleTheme{
    theme: 'light' | 'dark',
    toggleFn: ()=> void
}

export const useTheme = create <toggleTheme>()(
    persist(
        (set)=>({
            theme: 'light',
            toggleFn: ()=> set((state)=>({
                theme: state.theme === 'light' ? 'dark' : 'light',
            }))
        }), 
        {
            name:"theme switches",
            storage: createJSONStorage(()=>localStorage),
        }       
    )
)
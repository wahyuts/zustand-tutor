import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'

// const store = (set) => ({
//     people: [],
//     addPerson: (person) => set ((state) => ({ people: [...state.people, person] })),
// })

// const useStore = create(
//     devtools(store)
// )

let settingsStore = (set) => ({
    
    dark: false,
    toggleDarkMode: () => set((state) => ({dark: !state.dark}))

})

let peopleStore = (set) => ({ 
    people: [],
    addPerson: (person) => set ((state) => ({ people: [...state.people, person] })),
})

settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, { name: 'user_settings'})

peopleStore = devtools(peopleStore)

export const useSettingsStore = create(settingsStore)
export const usePeopleStore = create(peopleStore)




// keterangan kode 
// 1. command create set ini adalah perintah untuk membuat state didalam zustand
//    state didalam zustand terletak langsung (code nya) didalam store
// 2. people: ['John Doe', 'Jane Doe']  ini adalah contoh state nya yang berisi array nama
// 3. addPerson: (person) => set ((state) => ({ people: [...state.people, person] })
//    ini adalah state yang berisi fungsi yang mana akan mengubah state people
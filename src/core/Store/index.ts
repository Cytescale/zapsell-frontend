//@ts-ignore
//@ts-nocheck
import { create } from 'zustand'
import { initialNodes,initialEdges } from '../Controllers/initialData'

export enum canvasLeftPaneModeEnum  {
    add,
    edit
}
export const useTree = create((set,get) => ({
    selectedNode: null,
    canvasLeftPaneMode: canvasLeftPaneModeEnum.add,
    canvasLeftPaneVisi: false,
    toggCanvasLeftPane: () => {
        set((st) =>({canvasLeftPaneVisi:!st.canvasLeftPaneVisi}))
    },
    setSelectedNode: (id) => {
        set((st) => ({selectedNode:id}))
    },
    setCanvasLeftPane: (b: boolean) => {
        set((st) =>({canvasLeftPaneVisi:b}))
    },
    setCanvasLeftPaneMode(m: canvasLeftPaneModeEnum) {
        set((st) =>({canvasLeftPaneMode:m}))
    }, 
}))
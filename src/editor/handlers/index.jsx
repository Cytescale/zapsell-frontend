/** @format */

import {
   RichUtils,
   EditorState,
   Modifier,
   getDefaultKeyBinding,
} from 'draft-js'
import { toContinueBlocks, HeaderBlocks } from '../constants'
import {
   afterWholeBlockSelected,
   skipEntityBackspace,
   wholeBlockSelected,
} from './utils'
import {
   insertDivider,
   insertProperBlock,
   insertNewBlock,
   toggleProperBlock,
   toggleBlockWithType,
} from '../commands'
import { SelectionState } from 'draft-js'
import { removeBlockTypes } from './utils'
import { getSelectedBlock, getSelectionText } from 'draftjs-utils'

export function ReturnHandler(e, eState, editorStateChange) {
   const editorState = eState
   const currBlockType = RichUtils.getCurrentBlockType(editorState)
   const isContinousBlock = toContinueBlocks.indexOf(currBlockType) > -1
   const isAtStart = editorState.getSelection().getAnchorOffset() === 0

   if (e.shiftKey) {
      const newEditorState = RichUtils.insertSoftNewline(editorState)
      if (newEditorState !== editorState) {
         editorStateChange(newEditorState)
      }
   } else if (afterWholeBlockSelected(editorState)) {
      let eState = editorState
      let curr_selec = eState.getSelection()
      let newEs = EditorState.push(
         eState,
         Modifier.removeRange(
            editorState.getCurrentContent(),
            curr_selec,
            'backward',
         ),
         'remove-text',
      )
      newEs = insertNewBlock(newEs)
      editorStateChange(newEs)
      return 'handled'
   } else {
      const currentContent = editorState.getCurrentContent()
      const selection = editorState.getSelection()
      const textWithEntity = Modifier.splitBlock(currentContent, selection)
      var nState = EditorState.push(editorState, textWithEntity, 'split-block')
      if (!isContinousBlock && !isAtStart) {
         nState = RichUtils.toggleBlockType(nState, 'unstyled')
      }
      if (isAtStart && editorState.getSelection().isCollapsed()) {
         const currSelc = nState.getSelection()
         const befselc = nState.getCurrentContent().getSelectionBefore()
         nState = EditorState.forceSelection(nState, befselc)
         nState = RichUtils.toggleBlockType(nState, 'unstyled')
         nState = EditorState.forceSelection(nState, currSelc)
      }
      editorStateChange(nState)
   }

   return 'handled'
}

const backspaceHandler = (eState, editorStateChange) => {
   const edtrState = eState
   const currSelec = edtrState.getSelection()
   if (currSelec.isCollapsed() && currSelec.getFocusOffset() === 0) {
      const contState = edtrState.getCurrentContent()
      const blockKey = currSelec.getFocusKey()
      const block = contState.getBlockForKey(blockKey)
      if (HeaderBlocks.includes(block.getType())) {
         let newEs = EditorState.push(
            eState,
            Modifier.setBlockType(contState, currSelec, 'unstyled'),
            'change-block-type',
         )
         const currSelc = newEs.getSelection()
         const befselc = newEs.getCurrentContent().getSelectionBefore()
         newEs = EditorState.forceSelection(newEs, befselc)
         newEs = RichUtils.toggleBlockType(newEs, 'unstyled')
         newEs = EditorState.forceSelection(newEs, currSelc)
         editorStateChange(newEs)
         return 'handled'
      }
      try {
         const prvBlock = contState.getBlockBefore(blockKey)
         const ent = contState.getEntity(prvBlock.getEntityAt(0))
         if (ent) {
            const newState = skipEntityBackspace(
               edtrState,
               contState,
               block,
               blockKey,
               prvBlock,
            )
            editorStateChange(newState)
            return 'handled'
         }
      } catch (e) {
         //  console.log(e);
      }
   }
   return 'not-handled'
}

export function KeyCommandHandler(command, eState, editorStateChange) {
   switch (command) {
      case 'backspace': {
         return backspaceHandler(eState, editorStateChange)
         break
      }
      default: {
         return 'not-handled'
      }
   }
}

export function KeyBinderHandle(e) {
   switch (e.keyCode) {
      default: {
         return getDefaultKeyBinding(e)
      }
   }
}

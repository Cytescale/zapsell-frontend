/** @format */

import react, { useState, useEffect } from 'react'
import {
   Editor,
   EditorState,
   EditorBlock,
   RichUtils,
   convertFromHTML,
   ContentState,
   Draft,
   DefaultDraftBlockRenderMap,
   convertToRaw,
   getDefaultKeyBinding,
   KeyBindingUtil,
   EditorChangeType,
   Modifier,
   AtomicBlockUtils,
   removeTextWithStrategy,
   ContentBlock,
   genKey,
   SelectionState,
} from 'draft-js'
import { insertNewBlock } from '../commands'
import { EditorLockState } from '../constants'
import { lockScroll } from '../handlers/utils'

function getPlaceholderData(blocktype) {
   switch (blocktype) {
      case 'header-one': {
         return ['forcePlaceholderH1', 'Heading 1']
      }
      case 'header-two': {
         return ['forcePlaceholderH2', 'Header 2']
      }
      case 'unstyled': {
         return ['forcePlaceholderUS', 'Type / to add open menu']
      }
      case 'blockquote': {
         return ['forcePlaceholderBQ', 'Type any quote']
      }
      case 'unordered-list-item': {
         return ['forcePlaceholderUOL', 'Unordered list item']
      }
      case 'ordered-list-item': {
         return ['forcePlaceholderOL', 'Ordered list item']
      }
      default: {
         return ['', '']
      }
   }
}

function BlockWrapper(props) {
   return <div className={`sienna-editor-master-wrapper`}>{props.children}</div>
}

function Header1BlockRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className="sienna-editor-header-1-block">
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}
function Header2BlockRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className="sienna-editor-header-2-block">
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}

function UnstyledBlockRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className={`sienna-editor-unstyle-block`}>
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}
function BlockBlockRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className="sienna-editor-block-block">
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}
function BlockCodeRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className="sienna-editor-block-code">
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}

function BlockUOLRender(props) {
   return (
      <BlockWrapper {...props}>
         <div data-before="&#8226;" className="sienna-editor-UOL-block">
            <div
               data-before="&#8226;"
               contenteditable="false"
               className="sienna-editor-UOL-block-cir"
            />
            <EditorBlock {...props}>hello world</EditorBlock>
         </div>
      </BlockWrapper>
   )
}

function BlockOLRender(props) {
   return (
      <BlockWrapper {...props}>
         <div className="sienna-editor-OL-block">
            <div className="sienna-editor-OL-block-count" />
            <EditorBlock {...props} />
         </div>
      </BlockWrapper>
   )
}

function AtomicBlockRender(props) {
   const type = props.contentState.getEntity(props.block.getEntityAt(0)).type
   const data = props.contentState
      .getEntity(props.block.getEntityAt(0))
      .getData()
   const handleDividerClick = (e) => {
      // props.blockProps.editorStateChage(EditorState.forceSelection(props.blockProps.editorState, props.selection))
   }

   switch (type) {
      case 'divider': {
         return (
            <BlockWrapper {...props}>
               <div
                  className="sienna-editor-divider-block-cont"
                  onClick={handleDividerClick}
                  contentEditable={false}
               >
                  <div className="sienna-editor-divider-block" />
               </div>
            </BlockWrapper>
         )
      }
      default: {
         break
      }
   }
}

export {
   AtomicBlockRender,
   BlockOLRender,
   BlockUOLRender,
   BlockCodeRender,
   BlockBlockRender,
   Header2BlockRender,
   Header1BlockRender,
   UnstyledBlockRender,
}

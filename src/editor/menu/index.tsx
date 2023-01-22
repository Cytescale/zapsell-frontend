import { useState, useEffect, useRef } from 'react'
import {
   RichUtils,
   EditorState,
   Modifier,
   getDefaultKeyBinding,
   SelectionState,
} from 'draft-js'
// import { MButton, MInput, MPopover } from '../../UI/newindex'
import {
   insertBlockWithType,
   insertDivider,
   insertLinkEntity,
} from '../commands'
import { getTextSelection } from '../handlers/utils'

const EditorMenuButt = (props: any) => {
   //    console.log(props.selected)
   return (
      <button
         {...props}
         className={`
    app-edit-menu-butt
    ${props.selected ? 'app-edit-menu-butt-selec' : null}
    `}
      >
         {props.icon}
      </button>
   )
}

const block_type_array = [
   'unstyled',
   'header-one',
   'header-two',
   'blockquote',
   'unordered-list-item',
]

const EditorMenuCont = (props: any) => {
   const [bld, setbld] = useState(false)
   const [itl, setitl] = useState(false)
   const [uld, setuld] = useState(false)
   const [stk, setstk] = useState(false)
   const [cde, setcde] = useState(false)
   const [block_type_index, setblock_type_index] = useState(null)

   const [linkPopVisi, setLinkPopVisi] = useState(null)
   const handleLinkPopClose = () => {
      props.setReadOnly(false)
      setLinkPopVisi(null)
   }
   const [linkDisplayText, setLinkDisplayText] = useState(null)
   const sortLinkVisiBool = Boolean(linkPopVisi)
   const editorState = props.editorState
   const editorStateChage = props.editorStateChage

   useEffect(() => {
      const currContent = editorState.getCurrentContent()
      const selc = editorState.getSelection()
      var currBlockType: any = null
      try {
         currBlockType = RichUtils.getCurrentBlockType(editorState)
         //  const ent = currContent.getEntity(selc.getAnchorKey())
      } catch (e) {
         console.log('no entr' + e)
      }

      const block_ind: any = block_type_array.findIndex(
         (element) => element == currBlockType,
      )
      setblock_type_index(block_ind)

      const anchorKey = editorState.getSelection().getAnchorKey()
      const currContentBlock = currContent.getBlockForKey(anchorKey)
      const inlineStyle = currContentBlock.getInlineStyleAt(
         editorState.getSelection().getAnchorOffset(),
      )
      //   console.log(inlineStyle)
      setbld(inlineStyle.has('BOLD'))
      setitl(inlineStyle.has('ITALIC'))
      setuld(inlineStyle.has('UNDERLINE'))
      setstk(inlineStyle.has('STRIKETHROUGH'))
      setcde(inlineStyle.has('CODE'))
   }, [props.editorState])

   return (
      <div className="app-edit-menu-main-cont">
         {/* <MPopover
            open={sortLinkVisiBool}
            handleClose={handleLinkPopClose}
            childRef={linkPopVisi}
         >
            <LinkAddPopover
               linkDisplayText={linkDisplayText}
               editorStateChage={editorStateChage}
               editorState={editorState}
               handleLinkPopClose={handleLinkPopClose}
            />
         </MPopover> */}
         <EditorMenuButt
            icon={<i className="ri-h-1"></i>}
            selected={block_type_index == 1}
            onClick={(e: any) => {
               if (block_type_index == 1) {
                  editorStateChage(
                     RichUtils.toggleBlockType(editorState, 'unstyled'),
                  )
               } else {
                  editorStateChage(
                     RichUtils.toggleBlockType(editorState, 'header-one'),
                  )
               }
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-h-2"></i>}
            selected={block_type_index == 2}
            onClick={(e: any) => {
               if (block_type_index == 2) {
                  editorStateChage(
                     RichUtils.toggleBlockType(editorState, 'unstyled'),
                  )
               } else {
                  editorStateChage(
                     RichUtils.toggleBlockType(editorState, 'header-two'),
                  )
               }
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-bold"></i>}
            selected={bld}
            onClick={(e: any) => {
               editorStateChage(
                  RichUtils.toggleInlineStyle(editorState, 'BOLD'),
               )
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-italic"></i>}
            selected={itl}
            onClick={(e: any) => {
               editorStateChage(
                  RichUtils.toggleInlineStyle(editorState, 'ITALIC'),
               )
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-underline"></i>}
            selected={uld}
            onClick={(e: any) => {
               editorStateChage(
                  RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'),
               )
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-strikethrough-2"></i>}
            selected={stk}
            onClick={(e: any) => {
               editorStateChage(
                  RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'),
               )
            }}
         />
         <EditorMenuButt icon={<i className="ri-list-ordered"></i>} />
         <EditorMenuButt
            icon={<i className="ri-list-unordered"></i>}
            selected={block_type_index == 4}
            onClick={(e: any) => {
               if (block_type_index == 4) {
                  editorStateChage(
                     RichUtils.toggleBlockType(editorState, 'unstyled'),
                  )
               } else {
                  editorStateChage(
                     RichUtils.toggleBlockType(
                        editorState,
                        'unordered-list-item',
                     ),
                  )
               }
            }}
         />
         {/* <div className="app-edit-menu-hr-cont"/> */}
         <EditorMenuButt
            icon={<i className="ri-link"></i>}
            onClick={(e: any) => {
               const selecData = getTextSelection(
                  editorState.getCurrentContent(),
                  editorState.getSelection(),
               )
               setLinkDisplayText(selecData)
               props.setReadOnly(true)
               setLinkPopVisi(e.currentTarget)
               //    editorStateChage(insertLinkEntity(editorState, selecData))
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-separator"></i>}
            onClick={(e: any) => {
               editorStateChage(insertDivider(editorState))
            }}
         />
         <EditorMenuButt
            icon={<i className="ri-double-quotes-l"></i>}
            selected={block_type_index == 3}
            onClick={(e: any) => {
               editorStateChage(
                  RichUtils.toggleBlockType(editorState, 'blockquote'),
               )
            }}
         />
         <EditorMenuButt icon={<i className="ri-image-2-line"></i>} />
         <EditorMenuButt icon={<i className="ri-video-line"></i>} />
      </div>
   )
}

export default EditorMenuCont

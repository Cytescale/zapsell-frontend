/** @format */

import react from 'react'
import template_page_code from './templatePage'
import {
   Editor,
   EditorState,
   convertFromHTML,
   ContentState,
   CompositeDecorator,
} from 'draft-js'
import { BlockRenderer, extendedBlockRenderMap } from './block'
import { ReturnHandler, KeyCommandHandler, KeyBinderHandle } from './handlers'
import { selectionCorrection } from './handlers/utils'
// import Handlers from './handlers'
import EditorMenuCont from './menu'
import { lockScroll } from './handlers/utils'
import { findLinkEnti, LinkDeco } from './block/decorator'

export const compositeDecorator = new CompositeDecorator([
   {
      strategy: findLinkEnti,
      component: LinkDeco,
   },
])

export default class SiennaEditor extends react.Component {
   constructor(props) {
      super(props)
      const blocksFromHTML = convertFromHTML(template_page_code)
      const state = ContentState.createFromBlockArray(
         blocksFromHTML.contentBlocks,
         blocksFromHTML.entityMap,
      )

      this.state = {
         editorState: EditorState.createWithContent(state, compositeDecorator),
         readOnly: false,
         focused: false,
      }
      this.setReadOnly = this.setReadOnly.bind(this)
      this.setDomEditorRef = (ref) => (this.domEditor = ref)
      this.editorStateChage = this.editorStateChage.bind(this)
      this.EditorblurHandle = this.EditorblurHandle.bind(this)
      this.EditorfocusHandle = this.EditorfocusHandle.bind(this)
      this.rootFocusHandle = this.rootFocusHandle.bind(this)
      this.setFocus = this.setFocus.bind(this)
   }

   async rootFocusHandle(e) {
      if (this.domEditor) {
         if (!this.state.focused) {
            this.domEditor.focus()
         }
      }
   }

   setFocus(val) {
      this.setState({ focused: val })
   }

   setReadOnly(val) {
      this.setState({ readOnly: val })
   }

   async EditorfocusHandle(e) {
      if (!this.state.focused) {
         this.setFocus(true)
      }
   }
   async EditorblurHandle(e) {
      if (this.state.focused) {
         this.setFocus(false)
      }
   }

   componentDidMount() {
      this.domEditor.focus()
   }
   componentWillUnmount() {}

   BlockAdderStateChange(blockadderstate) {
      this.setState({ BlockAdderState: blockadderstate })
   }

   editorStateChage(edtState) {
      edtState = selectionCorrection(edtState)
      this.setState({ editorState: edtState })
   }

   render() {
      return (
         <>
            <div
               className="sienna-editor-main-cont"
               onFocus={this.rootFocusHandle}
               //  onClick={this.rootFocusHandle.bind(this)}
            >
               <EditorMenuCont
                  domEditor={this.domEditor}
                  editorStateChage={this.editorStateChage}
                  editorState={this.state.editorState}
                  editorRef={this.domEditor}
                  readOnly={this.state.readOnly}
                  setReadOnly={this.setReadOnly}
               />
               <Editor
                  readOnly={this.state.readOnly}
                  ref={this.setDomEditorRef}
                  placeholder="Type anything here"
                  className="sienna-editor-root"
                  editorState={this.state.editorState}
                  onChange={this.editorStateChage}
                  // onFocus={this.EditorfocusHandle}
                  // onBlur={this.EditorblurHandle}
                  plugins={[compositeDecorator]}
                  handleKeyCommand={(c) => {
                     return KeyCommandHandler(
                        c,
                        this.state.editorState,
                        this.editorStateChage,
                     )
                  }}
                  handleReturn={(e, es) => {
                     return ReturnHandler(e, es, this.editorStateChage)
                  }}
                  keyBindingFn={(e) => {
                     return KeyBinderHandle(e)
                  }}
                  blockRenderMap={extendedBlockRenderMap}
                  blockRendererFn={(contntBlock) => {
                     return BlockRenderer(
                        contntBlock,
                        this.state.editorState,
                        this.editorStateChage,
                     )
                  }}
               />
            </div>
         </>
      )
   }
}

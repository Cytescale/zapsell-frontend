export const findLinkEnti = (contentBlock, callback, contentState) => {
   contentBlock.findEntityRanges((char) => {
      const entityKey = char.getEntity()
      return (
         entityKey !== null &&
         contentState.getEntity(entityKey).getType() === 'LINK'
      )
   }, callback)
}

export const LinkDeco = (props) => {
   const { url, linkText } = props.contentState
      .getEntity(props.entityKey)
      .getData()
   return (
      <a href={url} className="sienna-editor-link-deco">
         {linkText || props.children}
      </a>
   )
}

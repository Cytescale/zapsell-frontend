export const findLinkEnti = (
   contentBlock: any,
   callback: any,
   contentState: any,
) => {
   contentBlock.findEntityRanges((char: any) => {
      const entityKey = char.getEntity()
      return (
         entityKey !== null &&
         contentState.getEntity(entityKey).getType() === 'LINK'
      )
   }, callback)
}

export const LinkDeco = (props: any) => {
   const { url, linkText } = props.contentState
      .getEntity(props.entityKey)
      .getData()
   return (
      <a href={url} className="sienna-editor-link-deco">
         {linkText || props.children}
      </a>
   )
}

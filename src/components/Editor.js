import React, { useRef, useState, useMemo } from 'react'
import JoditEditor from 'jodit-react'

const Editor = (props) => {
  //contents is the dynamic value from parent
  const { contents, getValue } = props
  const editor = useRef(null)
  const config = {
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'ul',
      'ol',
      '|',
      'center',
      'left',
      'right',
      'justify',
      '|',
      'link',
      // 'image',
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ['brush', 'file', 'image'],
  }

  return useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={contents}
        config={config}
        onChange={(content) => getValue(content)}
      />
    ),
    []
  )
}

export default Editor

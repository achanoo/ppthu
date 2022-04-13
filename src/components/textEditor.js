import React, {useState, useRef, useMemo} from 'react';
import JoditEditor from "jodit-react";

 const Editor = ({placeholder,sendData}) => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = useMemo({
        readonly: false // all options from https://xdsoft.net/jodit/doc/,
        placeholder: placeholder || 'Start typings...'
    }, [placeholder])

    return (
        <JoditEditor
            style={{width:'100%'}}
                ref={editor}
                value={content}
                config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {
                sendData(newContent);
                }}
            />
        );
 }
export default Editor;
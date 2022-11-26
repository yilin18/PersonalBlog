import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const NewBlog = ()=>{
    const [content, setContent] = useState()
    
    return (
        <div>
            <Editor
                onEditorChange={setContent}
                apiKey="l9m2rsa8g5w2zbbqmi8yxebzukqt0smx6qghi2w07wa4cyf4"
                plugins="wordcount"
            />
            <div dangerouslySetInnerHTML={{ __html: content }} >
            </div>
        </div>
    )
}

export default NewBlog
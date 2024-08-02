import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Importing CKEditor styles if needed (for custom builds only)
// import '@ckeditor/ckeditor5-build-classic/theme/ckeditor.css';  // Not needed for standard build

function Editor() {
    return (
        <div className="editor-container">
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: {
                        items: [
                            'heading', '|',
                            'bold', 'italic', 'underline', '|',
                            'link', 'bulletedList', 'numberedList', '|',
                            'insertTable', 'blockQuote', 'mediaEmbed', '|',
                            'imageUpload', 'undo', 'redo'
                        ]
                    },
                    simpleUpload: {
                        uploadUrl: 'YOUR_UPLOAD_ENDPOINT_URL', // Provide your actual endpoint
                        headers: {
                            Authorization: 'Bearer YOUR_AUTH_TOKEN' // If required
                        }
                    },
                    table: {
                        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
                    },
                    mediaEmbed: {
                        previewsInData: true
                    },
                    initialData: '<p>Start generating template</p>',
                }}
                onReady={(editor) => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    );
}

export default Editor;

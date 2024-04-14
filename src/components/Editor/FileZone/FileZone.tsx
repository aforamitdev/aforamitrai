import { Card } from "@radix-ui/themes"
import React, { useState } from 'react'
import { FileDrop } from 'react-file-drop'



type Props = {}

function FileZone({ }: Props) {
    const onTargetClick = () => { }
    const [files, setFiles] = useState<FileList[]>()
    return (
        <>
            <FileDrop
                onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                onFrameDrop={(event) => console.log('onFrameDrop', event)}
                onDragOver={(event) => console.log('onDragOver', event)}
                onDragLeave={(event) => console.log('onDragLeave', event)}
                onDrop={(files, event) => console.log('onDrop!', files, event)}>
                <div className="flex justify-center w-full px-3 py-2 mb-2 transition-all border-dashed border-2 border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30">Drag and drop</div>
            </FileDrop>

        </>
    )
}

export default FileZone
import { RenderableTreeNodes } from "@markdoc/markdoc"
import { Editor, Monaco } from "@monaco-editor/react"
import { editor } from "monaco-editor"
import React from 'react'
import { makeSuggestion } from "./snippetSuggestion"

type Props = {
    setContent: React.Dispatch<React.SetStateAction<RenderableTreeNodes>>

}


function editorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {

    monaco.languages.registerCompletionItemProvider("markdown", {
        provideCompletionItems(model, position, context, token) {
            return {
                suggestions: makeSuggestion(monaco, position, model)
            }

        }
    });

    // editor.addAction({ id: "insert-card", label: "Create Snippid" })
}

const Index = ({ setContent }: Props) => {
    return (
        <Editor height='100%' language="markdown" onChange={(e) => setContent(e || '')} onMount={editorDidMount} />
    )
}

export default Index
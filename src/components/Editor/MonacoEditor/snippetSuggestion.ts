// ts-ignore

import { Monaco } from '@monaco-editor/react';
import { Position, editor, languages } from 'monaco-editor';
export const makeSuggestion = (
  monaco: Monaco,
  position: Position,
  model: editor.ITextModel
) => {
  var word = model.getWordUntilPosition(position);
  var range = {
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: word.startColumn, // - 1, // UNCOMMENT THIS AND IT BREAKS
    endColumn: word.endColumn,
  };

  const suggestions: languages.CompletionItem[] = [
    {
      label: 'card',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: 'insert card',
      insertText: ['{%card%}', '\t', '{%/card%}'].join('\n'),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range,
    },
    {
      label: 'br',
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: 'insert line breaker',
      insertText: ['{%br/%}'].join('\n'),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range,
    },
    {
      label: 'list',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['{%ilist title=""%}', '', '{%/ilist%}'].join('\n'),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range,
    },
    {
      label: 'upload',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: ['{%upload /%}', ''].join('\n'),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range,
    },
  ];
  return suggestions;
};

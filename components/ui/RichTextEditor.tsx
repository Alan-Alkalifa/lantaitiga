'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: {
        class: 'min-h-[12rem] text-text-primary/90 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value === '') {
      editor.commands.setContent('');
    }
  }, [value, editor]);

  return (
    <div className="w-full rounded-lg border border-bg-secondary/20 hover:border-bg-secondary/50 transition-all duration-300 bg-bg-primary overflow-hidden group">
      <div className="border-b border-bg-secondary/10 bg-bg-secondary/5 p-2 flex gap-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-bg-secondary/10 transition-colors ${
            editor?.isActive('bold') ? 'text-bg-secondary' : ''
          }`}
          type="button"
          title="Bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-bg-secondary/10 transition-colors ${
            editor?.isActive('italic') ? 'text-bg-secondary' : ''
          }`}
          type="button"
          title="Italic"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M19 4h-9 M14 20H5 M15 4L9 20"/>
          </svg>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-bg-secondary/10 transition-colors ${
            editor?.isActive('bulletList') ? 'text-bg-secondary' : ''
          }`}
          type="button"
          title="Bullet List"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9 4h12M9 12h12M9 20h12M5 4v.01M5 12v.01M5 20v.01"/>
          </svg>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-bg-secondary/10 transition-colors ${
            editor?.isActive('orderedList') ? 'text-bg-secondary' : ''
          }`}
          type="button"
          title="Numbered List"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M4 18h1v-4M4 14h2"/>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <EditorContent 
          editor={editor} 
          className="[&>div]:min-h-[12rem] [&_p]:mb-2 [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4"
        />
      </div>
      <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: "${placeholder || 'Type your message here...'}";
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;

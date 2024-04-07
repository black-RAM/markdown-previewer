import { useState } from 'react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import './App.css'

function Previewer() {
  const [text, setText] = useState("")
  marked.use({breaks: true})

  const updater = (e) => {
    const result = marked(e.target.value)
    const sanitizedResult = DOMPurify.sanitize(result)
    setText(sanitizedResult)
  }

  return (
    <div>
      <textarea id="editor" cols="30" rows="10" onChange={updater}></textarea>
      <article id="preview" dangerouslySetInnerHTML={{ __html: text }}></article>
    </div>
  )
}

export default Previewer

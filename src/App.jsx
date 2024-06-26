import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import hljs from 'highlight.js'
import './App.css'

marked.use({breaks: true})

function Previewer({sample}) {
  const [text, setText] = useState(sample)
  const [parsed, setParsed] = useState("")
  useEffect(() => updater(text))

  const updater = (newText) => {
    setText(newText)
    const result = marked(newText)
    const sanitizedResult = DOMPurify.sanitize(result)
    setParsed(sanitizedResult)
    hljs.highlightAll()
  }

  return (
    <>
      <textarea id="editor" cols="30" rows="10" onChange={(e) => updater(e.target.value)} value={text}></textarea>
      <article id="preview" dangerouslySetInnerHTML={{ __html: parsed }}></article>
    </>
  )
}

Previewer.propTypes = {
  sample: PropTypes.string
}

export default Previewer

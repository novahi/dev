import { useEffect, useRef, memo } from 'react'
function Body ({ id, data }) {
  console.log("Body")
  const body = useRef()
  useEffect(() => {
    if(data?.message) {
      const div = document.createElement("div")
      div.className = `sender ${data.id == id ? "me" : "other"}`
      div.textContent = data.message
      body.current.appendChild(div)
      div.scrollIntoView()
    }
  }, [data])
  return (
      <div ref={body} className="chat-body"></div>
  )
}

export default memo(Body)

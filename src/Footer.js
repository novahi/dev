import { useRef } from 'react'

function Footer({ ws, data }) {
  console.log("footer")
  const input = useRef()
  return (
    <div className="chat-footer">
        <div className="form-message">
          <textarea ref={input} value={data.value}
          onChange={(event) => {
            const value = event.target.value
            if(!value || "" == value.trim()) {
              data.setDisabled(true)
            } else {
              data.setDisabled(false)
            }
            data.setValue(value)
          }}
          className="message" placeholder="Enter a messgae..."></textarea>
          <button onClick={
            () => {
             const sendAt = getTime()
             ws.send(JSON.stringify({
               sendAt,
               message: data.value,
               name: data.name,
               id: data.id
             }))
             data.setValue("")
             input.current.focus()
             data.setDisabled(true)
            }
          }  className="btn btn-submit"
          disabled={data.disabled}>Send</button>
        </div>
      </div>
  )
}
function getTime() {
  const options = {
    minute: "2-digit",
    second: "2-digit",
    hour: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    // timeZoneName: "long"
  };
  const date = new Date()
  const time = date.toLocaleDateString("vi-Vi", options)
  return time
}

export default Footer

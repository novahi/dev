import { useState, useEffect, useMemo} from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'

function App ({ ws }) {
  const [disabled, setDisabled] = useState(true)
  const [infoMessage, setInfoMessage] = useState({})
  const [name, setName] = useState()
  const [value, setValue] = useState()
  const id = localStorage.getItem("id") || getId()
  useEffect(() => {
    let isName = name ?? prompt("what your name")
    if(!isName || "" === isName.trim()) {
      setName(`Tôi dại dột ${id}`)
    } else {
      setName(isName)
    }
  }, [name])
  useEffect(() => {
    ws.addEventListener("open", (event) => console.log("Connected with WebSocket"))
    ws.addEventListener("message", async ({ data }) => {
      data = await convertMessage(data)
      setName(data.name)
      setInfoMessage(data)
    })
  }, [])
  return (
    <div className="content">
      <Header name={name} />
      <Body id={id} data={infoMessage} />
      <Footer ws={ws} data={{
        disabled,
        setDisabled,
        value,
        setValue,
        id,
        name
      }} />
    </div>
  )
}



function getId() {
  let id = (Math.random() + 1).toString(36).substring(2)
  localStorage.setItem("id", id)
  return id
}
async function convertMessage(blob) {
  const data = await blob.text()
  return JSON.parse(data)
}




export default App

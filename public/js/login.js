$("#form").addEventListener("submit", async (e) => {
  try {
    e.preventDefault()
    e.stopPropagation()
    const login = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: $("#email").value.trim(),
        password: $("#password").value.trim()
      })
    })
    const reponse = await login.json()
    console.log(reponse)
  } catch (e) {
    console.log(e)
    alert("error")
  }
})
 

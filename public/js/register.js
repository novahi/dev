$("#form").addEventLister("submit", async (e) => {
  try {
    e.preventDefault()
    e.stopPropagation()
    const register = await fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: $("#name").value.trim(),
        email: $("#email").value.trim(),
        password: $("#password").value.trim()
      })
    })
    const reponse = await register.json()
    console.log(reponse)
  } catch (e) {
    console.log(e)
    alert("error")
  }
})

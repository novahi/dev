$(".form").addEventListener("submit", async (e) => {
  try {
    e.preventDefault()
    e.stopPropagation()
    $("#message").textContent = "đang tải, nếu số lượng ảnh trong trang nhiều thì vui lòng đợi ít phút!"
    const data = await fetch("/tools/instagram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: $("#url").value.trim().toLowerCase()
      })
    })
      .then(res => res.json())
    console.log(data)
    const zip = new JSZip()
    if (data.status) {
      data.images.forEach((compress, i) => {
        zip.file(compress.fileName, compress.imgData, { base64: true })
      })
      const content = await zip.generateAsync({ type: "blob" })
      saveAs(content, "images.zip")
    }
    const type = "data:image/jpeg;base64"
    const resultMessage = data.status ? "alert-success" : "alert-error"
    $("#message").classList.add(resultMessage)
    $("#message").textContent = `${data.message} ${data.total ? `${data.total} image` : null}`
    data.results.forEach(x => {
      let img = document.createElement("img")
      img.className = "item"
      img.src = `${type},${x.imgData}`
      img.alt = x.name
      $(".image").appendChild(img)
    })
  } catch (e) {
    $("#message").classList.add("alert-error")
    $("#message").textContent = e.message
  }
})

class Instagram {
  async login(page) {
    try {
      await Promise.all([
				page.waitForSelector("input[name='username']"),
				page.waitForSelector("input[name='password']"),
				page.waitForSelector("button[type='submit']")
			])
      await page.type("input[name='username']", process.env.USERNAME_IG, {
        delay: 200
      });
      await page.type("input[name='password']", process.env.PASSWORD_IG, {
        delay: 200
      });
      await Promise.all([page.click("button[type='submit']"), page.waitForNavigation({
        waitUntil: "networkidle0"
      })])
    } catch (e) {
      console.log(e);
      return e
    }
  }
  async getImg(selectorAll = "img.FFVAD") {
    try {
      let storage = [];
      let allImg = document.querySelectorAll(selectorAll);
      if (allImg) {
        return await new Promise((resolve, reject) => {
          let store = storage;
          const interval = setInterval(() => {
            let loading = document.querySelector("svg.By4nA");
            if (!loading) {
              resolve(store);
              clearInterval(interval)
            };
            let loop = [...document.querySelectorAll(selectorAll)];
            loop.forEach(x => {
              let url = x.getAttribute("srcset");
              if (url) {
                url = url.split(",");
                url = url[url.length - 1].split(" ")[0];
                store.includes(url) ? null : store.push(url);
              }
            });
            window.scrollBy(0, window.innerHeight)
          })
        })
      }
    } catch (e) {
      console.log(`Error loopImg: ${e.message}`)
      return e
    }
  };
  async getBase64(listImg = []) {
    try {
      let imgs = listImg;
      let storage = [];
      if (imgs) {
        return await new Promise((resolve, reject) => {
          let store = storage;
          imgs.forEach(x => {
            let img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
              let canvas = document.createElement("canvas");
              canvas.height = img.height;
              canvas.width = img.width;
              let ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0);
              let dataUrl = canvas.toDataURL("image/jpeg");
              store.includes(dataUrl) ? null : store.push(dataUrl);
              store.length == imgs.length ? resolve(store) : null
            };
            img.src = x
          })
        })
      }
    } catch (e) {
      console.log(`Error base64: ${e.message}`)
      return e
    }
  };
}

module.exports = new Instagram()

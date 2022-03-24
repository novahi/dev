const puppeteer = require("puppeteer-core")
const Instagram = require("../util/instagram.js")
const urlLogin = "https://www.instagram.com/accounts/login/?next=/login/"
class ToolsController {
  getIG(req, res) {
    return res.status(200).render("tools/instagrams")
  }
  async postIG(req, res) {
   let { url } = req.body;
   url = url.toLowercase();
   if(!url.includes("instagram.com/")) {
     return res.status(404).json({
       "status": false,
       "message": "Invalid URL !"
     })
   }
   const browser = await puppeteer.launch({
     headless: true,
    // args: [
    //   "--no-sandbox",
    //   "--disable-setuid-sandbox"
    //   ],
     userDataDir: "c:/Program Files (x86)/Google",
       executablePath: "c:/Program Files/Google/Chrome/Application/chrome.exe"
   })
   const page = await browser.newPage()
   await page.goto(url, {
     waitUntil: "networkidle0"
   })
   const isLogin = await page.evaluate(() => window.location.href) 
   if(isLogin(urlLogin)) {
     await Instagram.login(page)
     await page.goto(url, {
       waitUntil: "networkidle0"
     })
   }
   const imgBase64 = await page.evaluate(async (Instagram) => {
     try {
       const listImg = await Instagram.getImg("img.FFVAd");
       const base64 = await Instagram.getBase64(listImg);
       return base64
     } catch (e) {
       return e
     }
   })
   await browser.close()
   console.log(imgBase64)
  }
}
module.exports = new ToolsController()

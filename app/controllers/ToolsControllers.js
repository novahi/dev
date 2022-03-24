const puppeteer = require("puppeteer-core")
const instagram = require("../util/instagram.js")
const urlLogin = "https://www.instagram.com/accounts/login/?next=/login/"
class ToolsController {
	getIG(req, res) {
		return res.status(200).render("tools/instagram.hbs")
	}
	async postIG(req, res) {
		let {
			url
		} = req.body;
		if (!url.includes("instagram.com/")) {
			return res.status(404).json({
				"status": false,
				"message": "Invalid URL !"
			})
		}
		const browser = await puppeteer.launch({
			headless: false,
			// args: [
			//   "--no-sandbox",
			//   "--disable-setuid-sandbox"
			//   ],
			userDataDir: process.env.DATA_DIR,
			executablePath: process.env.CHORME_EXE
		})
		const page = await browser.newPage()
		await page.goto(url, {
			waitUntil: "networkidle0"
		})
		const isLogin = await page.evaluate(() => window.location.href)
		if (isLogin.includes(urlLogin)) {
			await instagram.login(page)
			await page.goto(url, {
				waitUntil: "networkidle0"
			})
		}
		const imgBase64 = await page.evaluate(async () => {
			try {
				const getImg = async (selectorAll = "img.FFVAD") => {
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
				}
				const getBase64 = async (listImg = []) => {
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

				const listImg = await getImg("img.FFVAD");
				const base64 = await getBase64(listImg)
				return base64
			} catch (e) {
				return e
			}
		})
		//  await browser.close()
		console.log(imgBase64)
	}
}
module.exports = new ToolsController()

module.exports = {
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
}
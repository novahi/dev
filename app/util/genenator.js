module.exports = {
    fileName (i = 1) {
        let name = Math.floor(new Date())
        return `QIZ_IMG${name}${i}.jpg`
    }
}
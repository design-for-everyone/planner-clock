input.onButtonPressed(Button.A, function () {
    minutes = minutes + 1
    basic.showNumber(minutes)
    if (minutes == 9) {
        minutes = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    brightness = 65
    haloDisplay.clear()
    while (current <= 59) {
        brightness = brightness - 1
        haloDisplay.setZipLedColor(current, kitronik_halo_hd.colors(colors[color]))
        haloDisplay.show()
        haloDisplay.setBrightness(brightness)
        haloDisplay.show()
        current += 1
        if (current < 60) {
            basic.pause(minutes * 1000)
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    haloDisplay.setBrightness(65)
    haloDisplay.showRainbow(0, 0)
    haloDisplay.show()
    current = 0
})
input.onButtonPressed(Button.B, function () {
    color = color + 1
    if (color == colors.length) {
        color = 0
    }
    haloDisplay.clear()
    haloDisplay.setBrightness(65)
    haloDisplay.showColor(kitronik_halo_hd.colors(colors[color]))
})
let current = 0
let minutes = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let brightness = 0
let color = 0
let colors: number[] = []
brightness = 65
colors = [
ZipLedColors.Blue,
ZipLedColors.Red,
ZipLedColors.White,
ZipLedColors.Green,
ZipLedColors.Orange
]
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.clear()
minutes = 1
basic.showNumber(minutes)

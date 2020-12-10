let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    strip.showBarGraph(input.soundLevel(), 70)
    strip.show()
    basic.pause(10)
})

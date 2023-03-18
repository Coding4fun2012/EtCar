basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1000, 0, 180))
})

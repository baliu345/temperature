input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C is the temp")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
    basic.showString("F is the temp")
})

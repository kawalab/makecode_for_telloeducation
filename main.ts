input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.back(50)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
Tello.radiosetgroup(101)
let distanse = 30
basic.forever(function () {
    Tello.Setorder(5000)
})

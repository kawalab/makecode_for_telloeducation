input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Tello.forward_flip()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    Tello.xyz(
    0,
    30,
    0,
    30
    )
    basic.pause(100)
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
    basic.pause(100)
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
    basic.pause(100)
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
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    Tello.fly_or_land()
    basic.pause(100)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Tello.up(20)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
})
Tello.radiosetgroup(20)
let distanse = 30

input.onButtonPressed(Button.A, function () {
    Tello.left(50)
})
Tello.radiosetgroup(20)
basic.forever(function () {
    Tello.Setorder(1000)
})

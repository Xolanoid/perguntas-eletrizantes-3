input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let BotãoPressionado = true
basic.forever(function () {
    while (BotãoPressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            BotãoPressionado = false
        } else {
            basic.showString("B")
            music.ringTone(523)
            BotãoPressionado = false
        }
    }
})

input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    Life += -1
    basic.showIcon(IconNames.No)
    if (index < 0) {
        basic.showString("Game Over Press B to restart")
        basic.showIcon(IconNames.Yes)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
    list = 3
})
let list = 0
let index = 0
let text_list: string[] = []
text_list = [
"Apple",
"Orange",
"Mango",
"Pineapple",
"Grapes",
"Water Melon",
"Avacado",
"Statfruit",
"Stroberi"
]
let Life = 3
game.setScore(0)

basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (input.lightLevel() < 120) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Target)
    }
})

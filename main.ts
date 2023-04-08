radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setAllMotor(-100, -100)
    }
    if (receivedNumber == 2) {
        wuKong.setAllMotor(-100, 100)
    }
    if (receivedNumber == 3) {
        wuKong.setAllMotor(100, -100)
    }
    if (receivedNumber == 4) {
        wuKong.setAllMotor(100, 100)
    }
    if (receivedNumber == 5) {
        wuKong.stopAllMotor()
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
radio.setGroup(20)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(1)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(2)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(3)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(4)
    }
})

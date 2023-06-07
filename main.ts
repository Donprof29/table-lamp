let temp = 0
basic.forever(function () {
    if (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P0P1, ModuleWorld_Digatal.enButton.Press)) {
        basic.pause(100)
        while (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P0P1, ModuleWorld_Digatal.enButton.Press)) {
            basic.pause(1)
        }
        temp += 1
        if (temp > 1) {
            temp = 0
        }
    }
    if (temp == 0) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
    } else if (temp == 1) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
    }
})

let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn = document.querySelector('#click')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let item = ""
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы нажали кнопку")
        tg.MainButton.show()
    }
}
btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали голову")
        item = 'голова'
        tg.MainButton.show()
    }
}
btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали тело")
        item = 'тело'
        tg.MainButton.show()
    }
}
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item)
})


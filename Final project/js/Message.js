export default function Message(x) {
    document.getElementById("send").onclick = function () {

        //форма для ввода сообщения
        let TextForm = document.getElementById('message_form')
        //текст сообщения
        let Text = document.createTextNode(TextForm.value)
        //бокс сообщений (беседа)
        let MessageBox = document.getElementById('message_window')
        //одно сообщение
        let OneMessage = document.createElement("div")
        let OneMessage2 = document.createElement("div")

        if (Text.textContent.length != 0) {
            OneMessage.className = "OneMessage"
            OneMessage.append(Text)
            MessageBox.append(OneMessage)


            switch (x) {
                case 0:

                    OneMessage2.className = "OneMessageConsultant"
                    OneMessage2.append('Здраствуйте!')

                    MessageBox.append(OneMessage2)
                    x = 1
                    break;
                case 1:
                    OneMessage2.className = "OneMessageConsultant"
                    OneMessage2.append('Сегодня я Ваш русский консультант. Меня зовут Ольга')
                    MessageBox.append(OneMessage2)
                    x = 2
                    break;
                case 2:
                    OneMessage2.className = "OneMessageConsultant"
                    OneMessage2.append('Если Вы хотите отправить свой отзыв о нашем ресторане, напишите "Отзыв". Если увидеть мем, напишите "Мем"')
                    MessageBox.append(OneMessage2)
                    x = 3
                    break;
                case 3:
                    if ((TextForm.value != "Отзыв") && (TextForm.value != "Мем")) {
                        OneMessage2.className = "OneMessageConsultant"
                        OneMessage2.append('До свидания, всего доброго')
                        MessageBox.append(OneMessage2)
                        x = 4
                    }
                    break;

            }

            if (TextForm.value == "Отзыв") {
                document.getElementById('Feedback').style.visibility = "visible"
            } else if (TextForm.value == "Мем") {
            }

            var block = document.getElementById('message_window');
            block.scrollTop = block.scrollHeight;
        }
    }

    document.getElementById("FeedbackSend").onclick= function() {
        document.getElementById('Feedback').style.visibility = "hidden";
        alert("Successfully. Thank you for feedback");
    }

    document.getElementById("CloseButton").onclick= function() {
        document.getElementById('one_block').style.visibility = "hidden";
        document.getElementById('minimize_message_window').style.visibility = "visible";
    }

    document.getElementById("minimize_message_window").onclick= function() {
        document.getElementById('one_block').style.visibility = "visible";
        document.getElementById('minimize_message_window').style.visibility = "hidden";
    }
}
//первый чат
function FirstWindow()
{
    document.getElementById("message-form").hidden=false;
    document.getElementById("submit").hidden=false;
    document.getElementById("messages").hidden=false;

    document.getElementById("message-form2").hidden=true;
    document.getElementById("submit2").hidden=true;
    document.getElementById("messages2").hidden=true;
}
//второй чат
function SecondWindow()
{
    x=0
    document.getElementById("message-form2").hidden=false;
    document.getElementById("submit2").hidden=false;
    document.getElementById("messages2").hidden=false;

    document.getElementById("message-form").hidden=true;
    document.getElementById("submit").hidden=true;
    document.getElementById("messages").hidden=true;
}

function AddToLocalMessageAndPrint(){

    //форма для ввода сообщения
    let Form = document.getElementById('message-form')
    //текст сообщения
    let Text = document.createTextNode(Form.value)
    //бокс сообщений (беседа)
    let SmallBoxik =document.getElementById('messages')
    //одно сообщение
    let OneMes = document.createElement("div")

    if (Text.textContent.length != 0)
    {
        OneMes.className="OneMessage"
        OneMes.append(Text)
        SmallBoxik.append(OneMes)
        //добавляем в локальное хранилище
        localStorage.setItem(count, Text.textContent)
        count++
        //скролл
        var block = document.getElementById("block");
        block.scrollTop = block.scrollHeight;
    }
}

function AddToLocalMessageAndPrint2(){

    //форма для ввода сообщения
    let Form = document.getElementById('message-form2')
    //текст сообщения
    let Text = document.createTextNode(Form.value)
    //бокс сообщений (беседа)
    let SmallBoxik =document.getElementById('messages2')
    //одно сообщение
    let OneMes = document.createElement("div")
    let OneMes2 = document.createElement("div")

    if (Text.textContent.length != 0)
    {
        OneMes.className="OneMessage"
        OneMes.append(Text)
        SmallBoxik.append(OneMes)


switch (x) {
    case 0:
        OneMes2.className = "AuthorMessage"
        OneMes2.append("Здраствуйте!")

        SmallBoxik.append(OneMes2)
        x=1
        break;
    case 1:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Это консультант - Олег')
        SmallBoxik.append(OneMes2)
        x=2
        break;
    case 2:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Чем могу Вам помочь?')
        SmallBoxik.append(OneMes2)
        x=3
        break;
    case 3:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Уточните, пожалуйста')
        SmallBoxik.append(OneMes2)
        x=4
        break;
    case 4:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Вам ничем не помочь')
        SmallBoxik.append(OneMes2)
        x=5
        break;
    case 5:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('До свидания')
        SmallBoxik.append(OneMes2)
        x=6
        break;
    case 6:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Ты всё еще тут?')
        SmallBoxik.append(OneMes2)
        x=7
        break;
    case 7:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Держи другого Олега')
        SmallBoxik.append(OneMes2)
        x=8
        break;

    case 8:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Здраствуйте!')
        SmallBoxik.append(OneMes2)
        x=9
        break;


    case 9:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Это другой Олег')
        SmallBoxik.append(OneMes2)
        x=10
        break;


    case 10:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Вам всё еще не помочь')
        SmallBoxik.append(OneMes2)
        x=11
        break;


    case 11:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('До свидания')
        SmallBoxik.append(OneMes2)
        x=12
        break;

    case 12:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Лексе привет')
        SmallBoxik.append(OneMes2)
        x=13
        break;
    case 13:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Остальным соболезную')
        SmallBoxik.append(OneMes2)
        x=14
        break;


    case 14:
        OneMes2.className = "AuthorMessage"
        OneMes2.append('Держите третьего Олега')
        SmallBoxik.append(OneMes2)
        x=0
        break;
}


        var block = document.getElementById("block");
        block.scrollTop = block.scrollHeight;
    }
}

//возвращаем чат при обновлении
document.addEventListener("DOMContentLoaded", function(event) {

    if(localStorage.length != 0){

        count = localStorage.length

        for(i = 0; i<localStorage.length;i++){

            var Text = document.createTextNode(localStorage.getItem(i))
            let SmallBoxik = document.getElementById('messages')
            let OneMes = document.createElement("div")

            OneMes.className = "OneMessage"
            OneMes.append(Text)
            SmallBoxik.append(OneMes)
        }
    }
    else {
        count = 0
    }
})

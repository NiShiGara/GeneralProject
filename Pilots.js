function GoToPLay(kek) {

    key = parseInt(kek/10)*10;

     for (let i = 1; i < 5; i++) {
         key++;
          if ( document.getElementById(key.toString()).style.background != "midnightblue" )
              document.getElementById(key.toString()).style.background = "midnightblue";
         else
             document.getElementById(key.toString()).style.background = "#866919";
    }


    k = kek%10;
    for (let i = 1; i < 5; i++) {
        k=k+10;
        if ( (document.getElementById(k.toString()).style.background != "midnightblue" ) &&(k != kek))
            document.getElementById(k.toString()).style.background = "midnightblue";
        else
            if (k != kek)
            document.getElementById(k.toString()).style.background = "#866919";
     }

count = 0;
for (let i = 1; i < 5; i++) {
 for (let j = 1; j<5;j++){
     if ( document.getElementById((i*10+j).toString()).style.background == "midnightblue")
         count++;
 }
    }
console.log(count);
    if (count == 16)
    {
        alert('Поздравляю. Вы выиграли! Возьмите с полки пирожок :з А еще вот вам личная грамота! ');
        document.location.href = "https://sun9-4.userapi.com/impg/7TSo5xHQP6noJ9IsTp9Rps1MOLjET0nLIDbgmg/wBgBpMOhNjA.jpg?size=1272x1262&quality=96&sign=3ddd1acab4e3193dc3c7a3341284dbef&type=album";
    }
}

function Clear () {
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j<5;j++){
            document.getElementById((i*10+j).toString()).style.background = "#866919";
        }
    }
}



var hours=0;
var minutes=5;
var seconds=0;

window.onload = async function() {
    document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

    if (hours > 0) Hours();
    else
    {
        if (minutes > 0) Minutes();
        else Seconds();
    }
}

async function Seconds()
{

    while (seconds > 0) {

        if (seconds != 1)
        document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
        else
            document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + (seconds-1);

        seconds--;
        await sleep(1000);
    }
    if ((seconds == 0) && (hours ==0 )&& (minutes ==0))
            alert('Время закончилось');
}

async function Minutes()
{

    while (minutes >= 0) {
        if (seconds == 0) seconds = 60;

        while (seconds > 0) {
            seconds--;
            document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
            await sleep(1000);
        }

        if (minutes != 1)
            document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
        else
            document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + "0" + " Sec: " + seconds;

        minutes--;
    }

    if (minutes == -1) minutes++;

    if ((seconds == 0) && (hours ==0 )&& (minutes ==0))
        alert('Время закончилось');
}

async function Hours()
{
    while (hours >= 0) {
        if ((minutes == 0)&&(seconds == 0)) minutes= 59;

        while (minutes >= 0) {
            if (seconds == 0) seconds = 60;

            while (seconds > 0) {
                seconds--;
                document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
                await sleep(1000);
            }

            if (minutes != 1)
                document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
            else
                document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + "0" + " Sec: " + seconds;

            minutes--;
        }
        if (minutes == -1) minutes++;

        if (hours != 1)
            document.getElementById('Score').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
        else
            document.getElementById('Score').innerText = " Hours: " + "0" + " Min: " + minutes + " Sec: " + seconds;
        hours--;
    }
    if (hours == -1) hours++;

    if ((seconds == 0) && (hours ==0 )&& (minutes ==0))
        alert('Время закончилось');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


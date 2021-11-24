var hours;
var minutes;
var seconds;
function StartTimer()
{
    let HoursText =  document.getElementById("message-form1").value;
    let MinutesText = document.getElementById("message-form2").value;
    let SecondsText = document.getElementById("message-form3").value;


    var a = NaN;
    if ((HoursText < 0) || (MinutesText < 0) || (SecondsText < 0) || (HoursText == "") || (MinutesText == "") || (SecondsText == "")
        || (isNaN(HoursText)) || (isNaN(MinutesText)) || (isNaN(SecondsText)) ||
        (MinutesText > 61) || (SecondsText > 61))
    {
        alert('Ты по-моему немного перепутал. Введите нормальные данные');
    }
    else
    {
        hours = HoursText;
        minutes = MinutesText;
        seconds = SecondsText;
        Timer();

        document.getElementById("Timer").hidden=false;

        document.getElementById("start").hidden=true;
        document.getElementById("stop").hidden=false;
    }


}

function StopTimer()
{
    hours = -1;
    minutes = -1;
    seconds = -1;
    document.getElementById("Timer").hidden=true;
    document.getElementById("start").hidden=false;
    document.getElementById("stop").hidden=true;

    document.getElementById("message-form1").value = null;
    document.getElementById("message-form2").value = null;
    document.getElementById("message-form3").value = null;
}
function Timer()
{
    document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

    if (hours > 0) Hours();
    else
    {
        if (minutes > 0) Minutes();
        else Seconds();
    }
}

async function Seconds()
{

    while (seconds >= 0) {
        seconds--;

        if (seconds == -1)
            document.getElementById('Timer').innerText = " Hours: " + "0" + " Min: " + "0" + " Sec: " + "0";
        else
            document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

        await sleep(1000);
    }

    document.getElementById('Timer').innerText = " Hours: " + "0" + " Min: " + "0" + " Sec: " + "0";
    alert('Время закончилось или было обнулено');
}

async function Minutes()
{

    if ((hours == 0) && (seconds == 0))
    {
        minutes--;
    }

    while (minutes >= 0) {

        if ((seconds == 0)&&(hours == 0)) {
            seconds = 60;
        }



        while (seconds >= 0) {
            seconds--;

            if (seconds == -1)
                document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + "0";
            else
                document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

            await sleep(1000);
        }
        seconds = 0;

            document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

            minutes--;

    }
    minutes = 0;

    document.getElementById('Timer').innerText = " Hours: " + "0" + " Min: " + "0" + " Sec: " + "0";
        alert('Время закончилось или было обнулено');
}

async function Hours()
{


    while (hours >= 0) {

        if ((minutes == 0) && (seconds == 0)) {
            if (hours>0)
            hours--;
            minutes = 59;
            seconds = 60;
        }

        if ((hours == 0) && (seconds == 0))
        {
            minutes--;
        }

        while (minutes >= 0) {

            if (seconds == 0) {
                seconds = 60;
            }

            while (seconds >= 0) {
                seconds--;

                if (seconds == -1)
                    document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + "0";
                else
                    document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

                await sleep(1000);
            }
            seconds = 0;

            document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;

            minutes--;

        }
        if (minutes<0) minutes = 0;
        document.getElementById('Timer').innerText = " Hours: " + hours + " Min: " + minutes + " Sec: " + seconds;
        hours--;
        }

    hours = 0;

      document.getElementById('Timer').innerText = " Hours: " + "0" + " Min: " + "0" + " Sec: " + "0";
       alert('Время закончилось или было обнулено');

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
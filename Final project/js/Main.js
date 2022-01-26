import AJAX from '/Final project/js/AJAX.js';
import Message from '/Final project/js/Message.js';

var x = 1;

window.onload = function() {

    let top_container = document.getElementById("Top_container");
    let bottom_container = document.getElementById("Bottom_container");
    AJAX("Top_pics_for_catalog",top_container);
    AJAX("Bottom_pics_for_catalog",bottom_container);
    Message(0);



    document.getElementById("right_arrow").onclick= function() {
        if (x==1) {
            document.getElementById("pic").hidden = true;
            document.getElementById("pic2").hidden = false;
            x=0;
        }
        else
        {
            document.getElementById("pic").hidden = false;
            document.getElementById("pic2").hidden = true;
            x=1;
        }
    }
    document.getElementById("left_arrow").onclick= function() {
        if (x==1) {
            document.getElementById("pic").hidden = true;
            document.getElementById("pic2").hidden = false;
            x=0;
        }
        else
        {
            document.getElementById("pic").hidden = false;
            document.getElementById("pic2").hidden = true;
            x=1;
        }
    }

}

import AJAX from 'C:/Users/Huawei/WebstormProjects/Site/Final project/js/AJAX.js';
import Message from 'C:/Users/Huawei/WebstormProjects/Site/Final project/js/Message.js';

window.onload = function() {
    let top_container = document.getElementById("Gallery_block_pictures");
    AJAX("Gallery_pics", top_container);
    Message(0);
}

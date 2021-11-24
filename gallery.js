function AddPictures() {
    document.getElementById("button").hidden=true;
    fetch('art.json').then(response => {
        response.json().then(result => {
            let arr = [result.second, result.first,result.fourth,result.third,result.fifth];
            for (let i = 0; i < 5; i++) {
                    let pic = new Image();
                    pic.src = arr[i];
                    document.getElementById("img").append(pic);
            }
        });
    })
}

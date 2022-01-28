export default function AJAX(name, container) {
    fetch('/Final project/picture.json').then(response => {
        response.json().then(result => {
            let arr;
            switch (name) {
                case "Top_pics_for_catalog":
                    arr = [result.MainPic_dishes_1, result.MainPic_dishes_2, result.MainPic_dishes_3, result.MainPic_dishes_4];
                    break;
                case "Bottom_pics_for_catalog":
                    arr = [result.MainPic_dishes_5, result.MainPic_dishes_6];
                    break;
                case "Gallery_pics":
                    arr = [result.Gallery_pic_1, result.Gallery_pic_2, result.Gallery_pic_3, result.Gallery_pic_4, result.Gallery_pic_5];
                    break;
            }
            for (let i = 0; i < arr.length; i++) {
                let pic = new Image();
                pic.src = arr[i];
                container.append(pic);
            }

        });
    })
}

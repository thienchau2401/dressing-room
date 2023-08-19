let tryItem = (link,type) => {
    //document.getElementById('id').style.zIndex = '100';
    switch (type) {
        case "topclothes" :
            document.querySelector('.bikinitop').style.backgroundImage = `url('${link}')`;
            document.querySelector('.bikinitop').style.zIndex = '2';
            break;
        case "botclothes" :
            document.querySelector('.bikinibottom').style.backgroundImage = `url('${link}')`;
            document.querySelector('.bikinibottom').style.zIndex = '3';
            break;
        case "shoes" :
            document.querySelector('.feet').style.backgroundImage = `url('${link}')`;
            break;
        case "handbags" :
            document.querySelector('.handbag').style.backgroundImage = `url('${link}')`;
            break;
        case "necklaces" :
            document.querySelector('.necklace').style.backgroundImage = `url('${link}')`;
            break;
        case "hairstyle" :
            document.querySelector('.hairstyle').style.backgroundImage = `url('${link}')`;
            break;
        case "background" :
            document.querySelector('.background').style.backgroundImage = `url('${link}')`;
            break;

    }
}
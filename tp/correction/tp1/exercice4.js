function myColor(text, bgcolor, size=false){
    let text_mis_en_forme = text;
    if (size == 'upper') {
        text_mis_en_forme = text_mis_en_forme.toUpperCase();
    }
    else if (size == 'lower'){
        text_mis_en_forme = text_mis_en_forme.toLowerCase();
    }
    background = 'background: '+ bgcolor +';';
    console.log(background);
    return console.log(text_mis_en_forme, background);

}

myColor('HelloWorld','pink','upper')
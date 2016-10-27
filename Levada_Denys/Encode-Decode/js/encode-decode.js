function encode(msg) {
    var consta = 'Буря мглою небо кроет,Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя,То по кровле обветшалой Вдруг соломой зашумит, То, как путник запоздалый, К нам в окошко застучит. Наша ветхая лачужка И печальна и темна. Что же ты, моя старушка, Приумолкла у окна? Или бури завываньем Ты, мой друг, утомлена, Или дремлешь под жужжаньем Своего веретена? Выпьем, добрая подружка Бедной юности моей, Выпьем с горя; где же кружка? Сердцу будет веселей. Спой мне песню, как синица Тихо за морем жила; Спой мне песню, как девица За водой поутру шла.'
    consta = consta.toLowerCase();
    var key = [];
    msg = msg.toLowerCase();
    var message = msg.split("");

    var pos = 0;
    var foundChar = 0;

    // while (i <= message.length) {
    //     foundChar = consta.indexOf(message[i], pos);
    //     if (foundChar === -1) {
    //         break;
    //     }

    //     key.push
    // }


    for (var i = 0; i < message.length; i++) {
        key.push(consta.indexOf(message[i]));
        message[i] = '-';
    }

    // for (var i = 0; i < message.length; i++) {
    // 	do {
    // 		iConst++;
    // 	} while (message[i] != constArr[iConst]);
    // 	key.push (iConst);
    // 	constArr[iConst] = '-';
    // 	iConst = -1;
    // }

    return key;
}

function decode(key) {
    var consta = 'Буря мглою небо кроет,Вихри снежные крутя; То, как зверь, она завоет, То заплачет, как дитя,То по кровле обветшалой Вдруг соломой зашумит, То, как путник запоздалый, К нам в окошко застучит. Наша ветхая лачужка И печальна и темна. Что же ты, моя старушка, Приумолкла у окна? Или бури завываньем Ты, мой друг, утомлена, Или дремлешь под жужжаньем Своего веретена? Выпьем, добрая подружка Бедной юности моей, Выпьем с горя; где же кружка? Сердцу будет веселей. Спой мне песню, как синица Тихо за морем жила; Спой мне песню, как девица За водой поутру шла.'
    consta = consta.toLowerCase();
    var message = [];
    var messageStr = '';

    for (var i = 0; i < key.length; i++) {
        message.push(consta[key[i]]);
    }

    // for (var i = 0; i < key.length; i++) {
    //     do {
    //         iConst++;
    //     } while (iConst < key[i])
    //     message.push(consta[iConst]);
    //     iConst = -1;
    // }

    messageStr = message.join("");
    return messageStr;
}

var key = encode('Штирлиц никогда не был так близок к провалу');
var msg = decode(key);
console.log(key);
console.log(msg);
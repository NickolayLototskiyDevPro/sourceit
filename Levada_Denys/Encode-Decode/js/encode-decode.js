function encode (msg) {
var consta =  'буря мглою небо кроет,вихри снежные крутя;то, как зверь, она завоет, то заплачет, как дитя, то по кровле обветшалой вдруг соломой зашумит то, как путник запоздалый, к нам в окошко застучит. наша ветхая лачужка и печальна и темна. что же ты, моя старушка, приумолкла у окна? или бури завываньем ты, мой друг, утомлена, или дремлешь под жужжаньем своего веретена?';
    var key = [];
    var message = msg.split("");
    var constArr = consta.split("");;
    var iConst = -1;
	
	for (var i = 0; i < message.length; i++) {
		do {
			iConst++;
		} while (message[i] != constArr[iConst]);
		key.push (iConst);
		constArr[iConst] = '-';
		iConst = -1;
    }
    return key;
}

function decode (key) {
	var consta = 'буря мглою небо кроет,вихри снежные крутя;то, как зверь, она завоет, то заплачет, как дитя, то по кровле обветшалой вдруг соломой зашумит то, как путник запоздалый, к нам в окошко застучит. наша ветхая лачужка и печальна и темна. что же ты, моя старушка, приумолкла у окна? или бури завываньем ты, мой друг, утомлена, или дремлешь под жужжаньем своего веретена?';
	var constArr = consta.split("");
	var iConst = -1;
	var message = [];
	var messageStr = '';

	for (var i = 0; i < key.length; i++) {
		do {
			iConst++;
		} while (iConst < key[i])
		message.push(consta[iConst]);
		iConst = -1;
	}
	messageStr = message.join("");
	return messageStr;
}

var key = encode('привет, бродяга, я твой друг');
var msg = decode(key);
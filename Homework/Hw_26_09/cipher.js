	var cipher_key = 'буря мглою небо кроет,вихри снежные крутя;то, как зверь, она завоет, то заплачет, как дитя, то по кровле обветшалой вдруг соломой зашумит то, как путник запоздалый, к нам в окошко застучит. наша ветхая лачужка и печальна и темна. что же ты, моя старушка, приумолкла у окна? или бури завываньем ты, мой друг, утомлена, или дремлешь под жужжаньем своего веретена? выпьем, добрая подружка бедной юности моей, выпьем с горя; где же кружка? сердцу будет веселей. спой мне песню, как синица тихо за морем жила; спой мне песню, как девица за водой поутру шла.';
	var keyArr = cipher_key.split('');
	
	var message = [];
	var real_message = [];
	var string_message = 'декодирую тайную переписку';

	//added code function to test decoding
	function code (keyArr, string_message) {

	var split_message = string_message.split('');

	for (var i = 0; i < split_message.length; i++) {

		message.push(keyArr.indexOf(split_message[i]));

	};
	return message;
	};

	console.log(code(keyArr, string_message));


	function decode (keyArr, message) {

	for (var i = 0; i < message.length; i++) {

		real_message.push(keyArr[message[i]]);

	};
	
	real_message = real_message.join('');
	return real_message;
	}

	console.log(decode(keyArr, message));
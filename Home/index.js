'use strict'

//26.09.16


/*function k() {
	var str = 'Гуси по небу летели';
	var arena = str.split(' ');
	for (var i = 0; arena.length >= i; i++) {
		if (arena[i] === 'Гуси') {
			arena[i] = 'Лебеди';
			arena = arena.join(' ');
			console.log(arena);
			break;
		}
	}
}
k()



var a ='война и мир, Миру Мир';
function str(){
	var XXX = "Мир",
		xxx = 'мир';
	var mass = a.split(' ');
	console.log(a);
	for (var i = 0; i <= mass.length; i++) {
		if (mass[i] === XXX) {
			mass[i] = 'xxxxx';
			mass=mass.join(' ');
			console.log(mass);
		}
	}
}
str()

//пузырьковая сортировка

var mass = [];

for(var k=0; k<10; k++){
	mass.push(Math.floor(Math.random()*10));
}
function sort(){
	for(var j = 0; j < mass.length; j++){
	for(var i=0; i< mass.length-1; i++){
		if(mass[i] > mass[i+1]){
			var per = mass[i];
			mass[i] = mass[i+1];
			mass[i+1] = per;
		}
	}
}
	console.log(mass);
}
sort()

*/





//30.09.16

/*var a = [1, 2, 3, 5, 6, 9, 8, 9, 9, 9, 20];
var b = [2, 4, 6, 8, 9, 12, 15, 20];

var sum = function(){
	var mass=[];
		if(b.length > a.length){
			var minLength = a.length;
			var e = b.slice(a.length - b.length);
		}else{
			var minLength = b.length;
			e = a.slice(b.length - a.length);
		}
			for(var i = 0; i < minLength; i++){
					mass.push( a[i], b[i]);
			}
					mass = mass.concat(e);
					console.log(mass);
}
sum();*/
/*----------------------------------------------------------------------*/
/*var str = 'aa bb ab aa bb bb aa bb aa bb bb aa bb bb aa';
var str2 = 'aa bb';

var arr = str.split(' ');
var arr2 = str2.split(' ');
var iteration = function(){
	var summIter = 0,
		j=0;
		for(var i = 0; i<arr.length; i++){
		if(arr[i]===arr2[j] && arr[i + 1]===arr2[j+1]){
			summIter++;
		}
	}
	return summIter;
}
console.log(iteration());*/
/*-----------------------------------------------------------------------*/
/*function massiv(a){
	var b = '';
	if(typeof a === 'number' && a<=1000){
			for(var i=1; i<=a; i++){
				b+='b';
				console.log(b);
			}
	}else{
		console.log('error');
	}
}
massiv(10);*/
/*------------------------------------------------------------------*/
/*function arr(){
	var a = 'a';
	return function (){
		return '+a';
	};
}
var b = arr();
b();*/



/*var mass = [2, 3, 4, 5, 4, 3, 2];

var singleNumber = function(num){
	

	for(var i = 0; i< mass.length; i++){
		var z = 0;
		for(var j = 0; j<mass.length; j++){
					if(i===j){
						continue;
					}
					else if(mass[i]===mass[j]){
						z=1;
						continue;
					}
		}
					if(z===0){
						console.log(mass[i]);
						break;
					}
		
	}
}
singleNumber();*/


function Tank (ammunition){
	this.fuel = 0;
	this.life = 3;
	this.crew = 3;
	var speed = 20;
	var MAX_SPEED = 60;

	this.faster = function (speed){
		speed>=MAX_SPEED ? console.log(MAX_SPEED) : console.log(speed+1);
	};
	this.slower = function (speed){
		speed<=1 ? console.log(1) : console.log(speed-1);
	};
	this.shot = function(ammunition){
		if(speed>40){
			console.log('over speed');
		}
		else if(ammunition<=0){
			console.log('no ammunition');
		}
		else if(ammunition==null){
			console.log('no ammunition');
		}
		else{
			console.log('shot');
		}
	}
}

var mashine = new Tank();
mashine.faster(250);
mashine.faster(50);
mashine.slower(30);
mashine.slower(-1);
mashine.shot();
mashine.shot(5);
mashine.shot(0);




var str1 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str2 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str3 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str4 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str5 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str6 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str7 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str8 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str9 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')
var str10 = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam accusamus maiores mollitia, perferendis cum. Dolorem cumque architecto quos omnis velit, illo tempore beatae laboriosam ad repellendus, dolorum voluptates tenetur et nemo officiis modi nihil eaque cupiditate, soluta voluptatibus voluptate perspiciatis autem? Libero quia atque consequuntur blanditiis magnam maxime quod, sint, culpa ad delectus reprehenderit sed illo, ex esse tempora velit dolorum, commodi provident quas eum aspernatur unde ab numquam! Sed culpa, facilis officia deserunt assumenda magnam quis sint inventore! Ex repellat cupiditate non officia assumenda, saepe maxime delectus repudiandae quisquam expedita sit sequi est iste unde culpa accusantium quae nihil a aut eum hic perferendis, doloremque, nemo consequuntur! Iure voluptate, ullam reprehenderit cumque, minima at hic magnam debitis sint ratione molestias corporis! Facilis culpa ipsum, perferendis obcaecati nihil voluptatem sunt ducimus quaerat voluptate officia alias qui tempore expedita quibusdam modi, incidunt dicta amet aliquam temporibus consequuntur ipsam tempora repudiandae! Cum ipsum illum vel, recusandae atque pariatur ipsam totam, tenetur eveniet non quisquam iusto porro dolorem impedit! Dicta cupiditate natus quae veniam error saepe pariatur quas tenetur et ipsa officiis iusto totam sit, aliquid facere ex optio soluta possimus! Soluta quod tempore molestiae eos excepturi distinctio rerum veniam cupiditate quasi modi iste, similique necessitatibus cumque, atque, a expedita asperiores, ad. Nobis laudantium vel assumenda facilis aut ipsum quos repellendus inventore sint minima accusamus modi provident nisi fugit qui, officia debitis officiis expedita, nihil distinctio, repudiandae magnam, non. Nostrum, nulla repellat non facilis perspiciatis explicabo saepe, tenetur rerum, accusamus voluptatem iusto unde repudiandae repellendus dolorum perferendis cumque quia adipisci! In, amet, animi. Officiis voluptatum recusandae vero totam molestias quasi, impedit eveniet qui quo harum temporibus minima, dolorem obcaecati excepturi aut voluptas rem, explicabo nulla dicta aspernatur quisquam assumenda. Doloribus similique qui cumque, minus soluta. Eligendi id eveniet alias fugiat sunt. Numquam quam omnis iure veritatis ipsam, illo tempore iste praesentium molestiae nemo, officiis amet magnam, cupiditate quasi nisi itaque voluptatem? Delectus eligendi sed natus in nam sit similique, quisquam expedita quae reprehenderit dolorum hic a animi debitis unde quo necessitatibus accusamus, distinctio! Nulla earum maiores tempora architecto aliquid, dolorem provident dolor ipsam fugiat cupiditate libero accusamus voluptatibus ad minima totam velit odio nemo id aliquam minus, autem laudantium quasi quos? Dolor soluta dolores dolore porro, eaque, fuga ullam rerum illo cumque doloribus, veritatis qui omnis. Possimus voluptatum id vel! Ad voluptate eos in veritatis libero incidunt nulla quis unde, fuga reiciendis. Accusamus, vero, a. Dignissimos neque veritatis omnis est ea quod molestiae sequi necessitatibus modi mollitia totam, accusamus expedita consequuntur atque voluptate perspiciatis ratione culpa dolore similique dolorum reprehenderit molestias maiores. Sit laudantium doloremque autem maxime pariatur ad ullam perferendis earum assumenda consectetur, sint, accusamus, recusandae. Dolore doloribus voluptates possimus rem ea, similique, sint molestias laborum qui architecto neque? Neque veniam ullam molestias ab maxime voluptas fugiat odit sapiente reiciendis! Eaque officiis enim, eos. Magni pariatur laborum perferendis, quas, vel ipsa voluptatem suscipit adipisci facere, ut quo vero doloribus natus consequatur consequuntur perspiciatis sequi harum incidunt numquam, eaque optio aperiam possimus.')

var newStr1 =str1.split(' ');
var newStr2 = str2.split(' ');
var newStr3 = str3.split(' ');
var newStr4 = str4.split(' ');
var newStr5 = str5.split(' ');
var newStr6 = str6.split(' ');
var newStr7 = str7.split(' ');
var newStr8 = str8.split(' ');
var newStr9 = str9.split(' ');
var newStr10 = str10.split(' ');

var newArr = newStr1.concat(newStr2,newStr3,newStr4,newStr5,newStr6,newStr7,newStr8,newStr9,newStr10);
var Arr = newArr.join(' ');
console.log(Arr);

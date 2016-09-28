
var some_post = "World is a common name for the planet Earth and all life upon it. In terms such as world map and world climate, world is used in the sense detached from human culture or civilization, referring to the planet Earth physically. Worldwide.";

function correct (some_post) {
	some_post = some_post.replace(/world/gi,"***");
	return some_post;
	};

console.log(correct(some_post));
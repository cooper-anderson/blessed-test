/**
 * Created by Cooper Anderson on 9/20/16 AD.
 */
var blessed = require("blessed");

screen = blessed.screen({
	smartCSR: true,
	debug: true
});

screen.title = "Test Title";

player = blessed.text({
	top: 0,
	left: 0,
	content: 'a'
});

screen.append(player);

entry = [];
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

screen.key(['w', "up"], function(ch, key) {
	player.top -= 1;
	screen.render();
});

screen.key(['a', "left"], function(ch, key) {
	player.left -= 1;
	screen.render();
});

screen.key(['s', "down"], function(ch, key) {
	player.top += 1;
	screen.render();
});

screen.key(['d', "right"], function(ch, key) {
	player.left += 1;
	screen.render();
});

screen.on("keypress", function (ch, key) {
	if (key.name == "return" || key.name == undefined) {
		return;
	}
	if (key.name.length != 1) {
		if (key.name == "enter") {
			//screen.debug(entry.join(""));
		} else if (key.name == "backspace") {
			entry.pop();
		}
	} else {
		entry.push(key.name);
	}
	screen.render();
});

// Focus our element.
player.focus()

// Render the screen.
screen.render()
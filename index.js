/**
 * Created by Cooper Anderson on 9/20/16 AD.
 */
var blessed = require("blessed");

screenn = blessed.screen({
	smartCSR: true,
	debug: true
});

screenn.title = "Test Title";

player = blessed.text({
	top: 0,
	left: 0,
	content: 'a'
});

inventory = blessed.box({
	name: "Inventory",
	scrollable: true,
	top: 0,
	right: 0,
	bottom: 0,
	width: "30%",
	border: {
		type: 'line'
	},
	content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].join('\n'),
	scrollbar: {
		ch: " ",
		track: {
			inverse: true
		},
		style: {
			bg: "yellow",
			ch: " "
		}
	}
})

screenn.append(player);

screenn.append(inventory);

entry = [];
screenn.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

screenn.key(['w', "up"], function(ch, key) {
	player.top -= 1;
	screenn.render();
});

screenn.key(['a', "left"], function(ch, key) {
	player.left -= 1;
	screenn.render();
});

screenn.key(['s', "down"], function(ch, key) {
	player.top += 1;
	screenn.render();
});

screenn.key(['d', "right"], function(ch, key) {
	player.left += 1;
	screenn.render();
});

screenn.on("keypress", function (ch, key) {
	if (key.name == "return" || key.name == undefined) {
		return;
	}
	if (key.name.length != 1) {
		if (key.name == "enter") {
			//screenn.debug(entry.join(""));
		} else if (key.name == "backspace") {
			entry.pop();
		}
	} else {
		entry.push(key.name);
	}
	screenn.render();
	player.type
});
screenn.debug
// Focus our element.
player.focus()

// Render the screenn.
screenn.render()
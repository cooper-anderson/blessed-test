#!/usr/bin/env bash
if [ $1 = "debug" ]; then
	node --inspect --debug-brk "$(dirname "$0")"/index.js
else
	node "$(dirname "$0")"/index.js
fi
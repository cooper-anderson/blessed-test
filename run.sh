#!/usr/bin/env bash
if [ $1 = "nodebug" ]; then
	node "$(dirname "$0")"/index.js
else
	node --inspect --debug-brk "$(dirname "$0")"/index.js
fi
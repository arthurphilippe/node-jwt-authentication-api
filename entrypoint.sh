#/bin/bash

logDestination=/dev/stdout

if [[ -f launch.conf ]]; then
	logDestination=$(cat launch.conf)
fi

echo $logDestination

node server.js > $logDestination

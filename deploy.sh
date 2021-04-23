#!/bin/sh

ssh -tt root@139.162.235.6 <<EOF
 cd ~/T-WEB-800_2021
 git pull
 npm install
 tsc
 pm2 restart app
 exit
EOF

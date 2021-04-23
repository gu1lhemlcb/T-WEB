#!/bin/sh

ssh -tt root@139.162.235.6 <<EOF
 cd ~/T-WEB-800_2021
 git pull
 cd ~/T-WEB-800_2021/client/
 npm install
 npm run build
 rm -rf /var/www/travel.nanta.dev
 cp -R ~/T-WEB-800_2021/client/dist/* /var/www/travel.nanta.dev
 systemctl restart nginx
 exit
EOF

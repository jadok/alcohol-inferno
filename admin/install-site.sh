#!/bin/bash

chown www-data:www-data /var/www/sites -R
bash /var/www/script/certificate.sh alcohol.fr < /var/www/admin/cert
ln -s /var/www/config-sites/etc/nginx/alcohol.fr.conf /etc/nginx/sites-enabled/

echo "Restart the container to apply nginx changes"
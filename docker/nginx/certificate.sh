#!/bin/bash
## https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04

NAME=$1

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/$NAME.key -out /etc/nginx/ssl/$NAME.crt
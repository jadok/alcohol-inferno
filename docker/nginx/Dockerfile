FROM 6me/common:latest


ENV NGINX_VERSION 1.13.5-1~stretch
ENV NJS_VERSION   1.13.5.0.1.13-1~stretch

RUN apt-get install -y nginx openssl 

RUN mkdir /var/www/admin
RUN mkdir /var/www/script
RUN mkdir /etc/nginx/ssl/ -p
ADD certificate.sh /var/www/script/
# RUN bash /var/www/admin/certificate.sh alcohol.fr

RUN mkdir -p /var/www/sites/alcohol.fr/
# Remove the default Nginx configuration file
# RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
# ADD etc/nginx/alcohol.fr.conf /etc/nginx/sites-available

# Copy a configuration file from the current directory
EXPOSE 80 443

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]


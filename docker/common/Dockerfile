FROM debian:stretch-slim
MAINTAINER Quentin Jadeau "quentin.jadeau@live.fr"

ENV DEBIAN_FRONTEND noninteractive

ADD .bashrc /root/.bashrc
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get install wget openssh-client curl nano dialog net-tools -y

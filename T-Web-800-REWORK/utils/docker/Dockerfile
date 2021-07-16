# https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-apache-dev.html
FROM webdevops/php-apache-dev:7.4
LABEL maintainer="Contact Troa <contact@troa.fr>"

# ###########################################################################################

RUN apt-get update

# ###########################################################################################

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# ###########################################################################################

RUN curl --silent --show-error https://getcomposer.org/installer | php

# ###########################################################################################

RUN apt-get install -y zsh

ENV TERM xterm-256color
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
RUN sed -i -e 's/ZSH_THEME="robbyrussell"/ZSH_THEME="avit"/g' ~/.zshrc

USER application

ENV TERM xterm-256color
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
RUN sed -i -e 's/ZSH_THEME="robbyrussell"/ZSH_THEME="avit"/g' ~/.zshrc

# ###########################################################################################

USER root

FROM python:2.7

RUN apt-get update -y
RUN apt-get install nodejs-legacy npm -y

ADD https://api.github.com/repos/khanduri/docker-khanduri/git/refs/heads/master .github_version.json
RUN git clone -bmaster https://github.com/khanduri/docker-khanduri.git /code

WORKDIR /code
RUN pip install -r requirements.txt
RUN npm install -g bower
RUN bower install --allow-root
RUN npm install
RUN node_modules/gulp/bin/gulp.js sass
RUN node_modules/gulp/bin/gulp.js transform

CMD gunicorn --bind 0.0.0.0:$PORT wsgi

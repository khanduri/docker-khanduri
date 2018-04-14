FROM alpine:3.7

RUN apk add --no-cache python python-dev py-pip
RUN apk add --no-cache yarn 

COPY requirements.txt /code/requirements.txt
WORKDIR /code
RUN pip install -r requirements.txt

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
WORKDIR /code
RUN yarn install

COPY . /code
RUN yarn run build .

EXPOSE 5000

# $PORT is set by Heroku
CMD gunicorn --bind 0.0.0.0:$PORT wsgi

FROM alpine:3.7


RUN apk add --no-cache python python-dev py-pip
RUN apk add --no-cache yarn


COPY . /code
WORKDIR /code
RUN pip install -r requirements.txt
RUN yarn install
RUN yarn run build .


WORKDIR /code
EXPOSE 5000


CMD gunicorn --bind 0.0.0.0:5000 wsgi
# CMD gunicorn --bind 0.0.0.0:$PORT wsgi

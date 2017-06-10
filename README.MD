
# Local Dev (mac osx):

## Setup
 - `virtualenv --no-site-packages venv`
 - `source venv/bin/activate`
 - `pip install -r requirements.txt`
 - `brew install node`
 - `npm install`
 - `npm install -g bower`

## Build
 - `bower install`
 - `gulp build`
 - `python app/__init__.py`


# Local Testing - Docker:

## Setup
 - Make sure to have docker installed

## Build
 - `docker build -t docker-khanduri .`
 - `docker run -d --name khanduri-01 -p 5000:5000 docker-khanduri`


# Stage Push - Docker - Heroku:


# PROD Push - Docker - Heroku:


# DEBUGGING tips:

## TODO (clean these up):
 - `docker images`
 - `docker rmi $(docker images | grep "<none>" | awk '{print $3}')`
 - `docker exec -ti khanduri-01 bash`
 - `lsof -i tcp:8000`
 - `rm -rf /Users/prashantkhanduri/Library/Containers/com.docker.docker/Data/*`


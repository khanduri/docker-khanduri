PROD: www.khanduri.com

------------------------------
# Local Dev (mac OSx):

## Setup
 - `virtualenv --no-site-packages venv`
 - `source venv/bin/activate`
 - `pip install -r requirements.txt`
 - *** `brew install yarn`
 - *** `yarn init --yes`
 - `npm install --save-dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015`
 - `npm install --save-dev node-sass css-loader sass-loader style-loader`
 - `npm install --save-dev url-loader file-loader`
 - `npm install --save-dev react react-dom`
 - `npm install --save-dev extract-text-webpack-plugin`
 - `npm install --save-dev bootstrap-sass`
 - `npm install --save font-awesome bootstrap jquery`

## Build
 - Local
    - `yarn run watch .`
    - `python app/__init__.py`
 - Production
    - `yarn run build .`
    - `python app/__init__.py`


------------------------------
# Local Testing - Docker:

## Setup
 - `brew install docker`

## Build
 - `docker build -t docker-khanduri .`
 - `docker run -d --name khanduri-01 -p 5000:5000 -e PORT=5000 docker-khanduri`
 - DEBUG: `docker rm khanduri-01`
 - DEBUG: `docker stop khanduri-01`

------------------------------
# Stage Push - Docker - Heroku:

## Setup
 - `heroku login`
 - `heroku plugins:install heroku-container-registry`              # run once globally
 - `heroku container:login`
 - `heroku apps:create khanduri-staging --remote heroku-staging`   # Creating a new app and adding remote
 - `heroku git:remote -a heroku-staging`                           # Adding remote repo for heroku stating
 - `git remote rename heroku heroku-staging`

## Build
 - `heroku container:push web --remote heroku-staging`
 - `heroku open --app heroku-staging`


------------------------------
# PROD Push - Docker - Heroku:

## Setup
 - `heroku apps:create khanduri --remote heroku-prod`
 - `heroku git:remote -a heroku-prod`
 - `heroku git:remote -a khanduri`

## Build
 - `heroku container:push web --remote heroku`
 - `heroku logs --remote heroku`


------------------------------
# PROD Push - Docker - AWS:

## Setup
 - `pip install awsebcli`
 - `eb init`
 - `vim .elasticbeanstalk/config.yml`
 - `eb console`
 - `eb create`

## Build
 - `eb deploy`
 - `eb open`
 - `eb ssh`
 - `gunicorn --bind 0.0.0.0:5000 wsgi`


------------------------------
# DEBUGGING tips:

## TODO (clean these up):
 - `docker images`
 - `docker rmi $(docker images | grep "<none>" | awk '{print $3}')`
 - `docker exec -ti khanduri-01 bash`
 - `lsof -i tcp:8000`
 - `rm -rf /Users/prashantkhanduri/Library/Containers/com.docker.docker/Data/*`
 - `docker logs khanduri-01`
 - `docker exec -ti khanduri-01 bash`

 - `docker ps -a`
 - `docker rm khanduri-01`
 - `docker stop khanduri-01`
 - `npm install webpack --save-dev`

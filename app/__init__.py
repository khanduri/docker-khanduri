import json
from flask import Flask, render_template
import logging
from logging.handlers import RotatingFileHandler


app = Flask(__name__)
handler = RotatingFileHandler('foo.log', maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)


@app.route("/home")
def home():
    return render_template('home.html')


FILE_MAP = {
    'opk': ('app/data/opk.json', 'opk'),
    'madhuri': ('app/data/madhuri.json', 'madhuri'),
    'puneet': ('app/data/puneet.json', 'puneet'),
    'parisha': ('app/data/parisha.json', 'parisha'),
    'sehul': ('app/data/sehul.json', 'sehul'),
    'prashant': ('app/data/prashant.json', 'prashant'),
}


FAMILY_NICKNAMES = {
    'opk': ['omprakash', 'opk'],
    'madhuri': ['madhuri', 'madhu'],
    'sehul': ['sehul'],
    'parisha': ['parisha', 'pari'],
    'puneet': ['puneet', 'tikku'],
    'prashant': ['prashant', 'phulti'],
}


@app.route("/<alias>")
def member(alias):

    app.logger.warning('start')
    for map_alias, nicknames in FAMILY_NICKNAMES.iteritems():
        if alias in nicknames:
            alias = map_alias
            break

    data_file_path, class_name = FILE_MAP.get(alias, (None, None))
    app.logger.warning(data_file_path)
    if not data_file_path:
        return render_template('error.html')

    json_data = json.loads(open(data_file_path).read())
    app.logger.warning(json_data)
    app.logger.warning('end')

    return render_template('index.html', json_data=json_data, class_name=class_name)


@app.route("/")
def index():
    json_data = json.loads(open('app/data/prashant.json').read())
    return render_template('index.html', json_data=json_data)


@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404

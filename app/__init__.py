import json
from flask import Flask, render_template


app = Flask(__name__)


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

    for map_alias, nicknames in FAMILY_NICKNAMES.iteritems():
        if alias in nicknames:
            alias = map_alias
            break

    data_file_path, class_name = FILE_MAP.get(alias, (None, None))
    if not data_file_path:
        return render_template('error.html')

    json_data = json.loads(open(data_file_path).read())
    return render_template('index.html', json_data=json_data, class_name=class_name)


@app.route("/")
def index():
    json_data = json.loads(open('app/data/prashant.json').read())
    return render_template('index.html', json_data=json_data)


@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

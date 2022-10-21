from flask import Flask, render_template
import json


app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():

    with open('static/content.json') as json_file:
        json_data = json_file.read()
        content_data = json.loads(json_data)

    return render_template("index.html", content_data=content_data)


@app.route("/about", methods=["GET"])
def about():

    return render_template("about.html")
from flask import Flask, render_template, url_for


app = Flask(__name__)

@app.route("/")
def home():
    navList = ['home','blocks','tnt']
    return render_template("index.html",navList=navList)

@app.route('/buildigBlocks')
def blocks():
    navList = ['home','blocks','tnt']
    return render_template("blocks.html", navList=navList)

@app.route('/explosiveTnT')
def tnt():
    navList = ['home','blocks','tnt']
    return render_template("tnt.html", navList=navList)
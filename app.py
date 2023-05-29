from flask import Flask, render_template, url_for


app = Flask(__name__)
navList = ['Home','Blocks','TnT',"Medal"]

@app.route("/")
def Home():
    return render_template("index.html",navList=navList)

@app.route('/buildigBlocks')
def Blocks():
    return render_template("blocks.html", navList=navList)

@app.route('/explosiveTnT')
def TnT():
    explosives = ['05-27-2002','10-17-1999','11-18-2022','fa fa-heart']
    return render_template("tnt.html", explosives = explosives, navList=navList)

@app.route('/medal')
def Medal():
    return render_template("medal.html" , navList=navList)

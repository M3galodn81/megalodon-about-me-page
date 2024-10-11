from flask import Flask,render_template  

app = Flask(__name__) 

# Main
@app.route('/')
def index(): 
    return render_template("index.html",title="")

@app.route('/music')
def music():
    return render_template("music.html",title="Music")

@app.route('/social')
def social():
    return render_template("social.html",title="Social")

@app.route('/misc')
def misc():
    return render_template("misc.html",title="Misc")

if __name__ == "__main__": 
    app.run(debug=True) 

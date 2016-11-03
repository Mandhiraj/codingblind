from flask import render_template
from app import app
from content import lessons

@app.route('/')
@app.route('/index')
def index():
	return render_template('index.html')


@app.route('/turtle')
def turtle():
	return render_template('turtle.html', heading=lessons[1]["heading"], content=lessons[1]["sections"][0])
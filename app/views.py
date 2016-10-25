from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
	user = {'nickname':'Nick'}
	return render_template('index.html')


@app.route('/turtle')
def turtle():
	return render_template('turtle.html')
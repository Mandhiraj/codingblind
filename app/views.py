from flask import render_template
from flask import request
from app import app
from content import lessons

@app.route('/')
@app.route('/index')
def index():
	return render_template('index.html')


@app.route('/turtle')
def turtle():
	lessonNum = request.args['lesson']
	sectionNum = request.args['section']
	maxLessons = []
	for lesson in lessons:
		maxLessons.append(len(lesson["sections"]))
	
	return render_template('turtle.html', content=lessons[int(lessonNum)-1]["sections"][int(sectionNum)-1],
		lessonNum = int(lessonNum), sectionNum = int(sectionNum), maxLessons = maxLessons)
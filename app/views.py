from flask import render_template
from flask import request
from app import app
from content import lessons

@app.route('/')
@app.route('/index')
def index():
	maxLessons = []
	for lesson in lessons:
		maxLessons.append(len(lesson["sections"]))
	return render_template('index.html', maxLessons = maxLessons)


@app.route('/classroom')
def classroom():
	lessonNum = request.args['lesson']
	sectionNum = request.args['section']
	maxLessons = []
	for lesson in lessons:
		maxLessons.append(len(lesson["sections"]))
	
	return render_template('classroom.html', content=lessons[int(lessonNum)-1]["sections"][int(sectionNum)], lessonNum = int(lessonNum), sectionNum = int(sectionNum), maxLessons = maxLessons)	

@app.route('/sandbox')
def sandbox():
	return render_template('sandbox.html')	
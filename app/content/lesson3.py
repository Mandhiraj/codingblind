
heading = 'Conditionals';

introduction = """Welcome to Lesson 3. In this lesson we will introduce how to use conditional logic. 
				When writing code, we don't always want every line to be executed. In order to avoid running everything,
				we put blocks of code under certain conditions. So when those conditions are met, that block of code runs, 
				otherwise it doesn't. Press alt n to learn more about conditional logic."""
section1 = {
				'subheading' : 'Comparison Operators',
				'content' : """There are 6 comparison operators that you must get familar with. 
								They are: <, <=, >, >=, ==, !=. Expressions using these operators evaluate to True or False.
								For example the expression 5 < 10 evaluates to True, however, the expression 5 > 10 evaluates to False.""",
				'challenge' : """Practice using these operators. Assign the result of an expression
								to a variable called answer and then print answer. Do this first with an expression than 
								evaluates to True and then with an expression that evaluates to False.""",
				'examples' : [{ 
								'input' : 'answer = 5 < 10\nprint answer',
								'output' : 'True'		
							}],
				'hints' : [
							''
						  ]
			}

section2 = {
				'subheading' : 'Intro to If',
				'content' : """We often use expressions with comparison operators in if statements. If statements have 4 components.
							First is the key word if, followed by an expression than evaluates to True or False, followed by a colon.
							The fourth component is the indented code under the if statement. Note that all of the lines of code 
							you want to be part of the if statement must be uniformly tabbed to the right under the if statement. 
							This is how we specify that we only want this code to run if the expression in the if statment evaluates 
							to True.""",
				'challenge' : """Go ahead and play with the code in the editor. Currently when you run it, nothing happens. 
								Can you edit it so that \"It's raining!\" gets printed?""",
								# rain = False
								# if rain == True:
								#     print "It's raining!"
				'examples' : [{ 
							}],
				'hints' : [
							'You only need to change the variable.'
						  ]
			}

section3 = {
				'subheading' : 'If and Else If',
				'content' : """If statements are often accompanied by elif and else statments. Elif is an abbreviaton for
							else-if. So you might have some code that goes like this: if something is true, do something. 
							elif something else is true, do something else. else, do something else. It is important to note
							that only one of these statements will run. Using if-elif-else  """,

							########
							# Finish
							########

				'challenge' : """Practice using these operators. Assign the result of an expression
								to a variable called answer and then print answer. Do this first with an expression than 
								evaluates to True and then with an expression that evaluates to False.""",
				'examples' : [{ 
								'input' : 'answer = 5 < 10\nprint answer',
								'output' : 'True'		
							}],
				'hints' : [
							''
						  ]
			}

section4 = {
				'subheading' : 'More Complex If Logic',
				'content' : """  """,
				'challenge' : """  """,
				'examples' : [{ 
							
							}],
				'hints' : [
							''
						  ]
			}

lesson2 = {
			'heading' : heading,
			'introduction' : introduction,
			'sections' : [
				section1,
				section2,
				section3,
				section4
			]
		  }
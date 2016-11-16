
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
				'subheading' : 'If and Elif',
				'content' : """If statements are often accompanied by elif statments. Elif is an abbreviaton for
							else-if. They are formatted exactly like if statements, with the exception that the key word if
							is replaced with elif. You can have have an if statement followed by multiple elif statements. 
							Take a look at the code in the editor. You'll note that depending on what the value of the variable 
							animal is set to at the top of the code, a different word gets printed. Read through the code and 
							see if you can change animal so that you print each of three the words once.""",

							########
							# animal = cat
							# if animal == "cat":
							#     print "meow"
							# elif animal == "dog":
							#	  print "bark"
							# elif animal == "duck":
							#     print "quack"
							########

				'challenge' : """Add an elif statement to the code in the editor such that when the value of animal is set to
								cow, moo gets printed.""",
				'examples' : [{ 	
							}],
				'hints' : [
							''
						  ]
			}

section4 = {
				'subheading' : 'Else',
				'content' : """If and elif statements often end with an else statement. Else statments are similar except
							they have no expression to evaluate. So you simply type else, followed by a colon. Then 
							underneath, you put your tabbed over code like usual. If, elif, and else statments work 
							together to control what code gets executed. In a series of statements, the next statement
							only gets checked if the previous check was unsuccessful. It other words, else statements
							only run when none of the conditions in the preceeding if and elif statements can be 
							satisfied.
							 """,

							########
							# animal = cat
							# if animal == "cat":
							#     print "meow"
							# elif animal == "dog":
							#	  print "bark"
							# elif animal == "duck":
							#     print "quack"
							# else: 
							#	  print ""
							########

				'challenge' : """Let's continue working with our example from the last section. Try adding
								an else statement to the end of the code block that prints out "Not a valid animal"
								when the variable animal is set to something other than cat, dog, or duck. Make sure 
								you can run the code and "Not a valid animal" gets printed.""",
				'examples' : [{ 
								''	
							}],
				'hints' : [
							''
						  ]
}

section5 = {
				'subheading' : 'Using And',
				'content' : """So far we have only looked at checking the value of one variable in our if statements.
							However, sometimes we need our if statements to depend on multiple variables. We can use 
							the key word and to do this. So our expression will only be true if both of the conditions 
							joined together using and are true. This may sound confusing at first but you should
							get a better understanding when you check out the code in the editor.""",

							# rain = True
							# wind = False
							# if rain == True and wind == True:
							#     print "It's storming!"

				'challenge' : """Change the variables rain and wind so that "It's storming!" gets printed.""",
				'examples' : [{ 
								''
							}],
				'hints' : [
							'Remember that both variables need to be true in order for the whole expression to be true.'
						  ]
			}

section6 = {
				'subheading' : 'Using Or',
				'content' : """Similar to the key word and, we can use the key word or in our if statements.
							   So our expression will be true when at least 1 of the conditions is true, unlike
							   when using and where both of the conditions have to be true. Check out the code
							   in the editor to get a better understanding.""",

							# rain = False
							# wind = False
							# if rain == True or wind == True:
							#     print "It may be storming."

				'challenge' : """Change the variables rain and wind so that "It may be storming" gets printed.""",
				'examples' : [{ 
								''
							}],
				'hints' : [
							''
						  ]
			}			

lesson3 = {
			'heading' : heading,
			'introduction' : introduction,
			'sections' : [
				section1,
				section2,
				section3,
				section4,
				section5,
				section6
			]
		  }

section0 = {
				'subheading' : 'Conditionals',
				'content' : """Welcome to Lesson 3. In this lesson we will introduce how to use conditional logic. 
					When writing code, we don't always want every line to be executed. In order to avoid running everything,
					we put blocks of code under certain conditions. So when those conditions are met, that block of code runs, 
					otherwise it doesn't. Press alt n to learn more about conditional logic.""",
				'challenge' : '',
				'examples' : '',
				'hints' : [''],
				'output' : ''
}

section1 = {
				'subheading' : 'Comparison Operators',
				'content' : """There are 6 comparison operators that you must get familar with. 
								They are: <, <=, >, >=, ==, !=. Expressions using these operators evaluate to True or False.
								For example the expression 5 < 10 evaluates to True, however, the expression 5 > 10 evaluates to False.""",
				'challenge' : """Practice using these operators. Print the result of an expression that results to true.""",
				'examples' : 'answer = 5 < 10',
				'hints' : [
							''
						  ],
				'output' : 'True\n'
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
								Can you edit it so that \"It is raining!\" gets printed?""",
				'code' :	"""rain = False\nif rain == True:\n\tprint \"It is raining!\"""",
				'examples' : 'if variable == True:',
				'hints' : [
							'You only need to change the variable rain.'
						  ],
				'output' : 'It is raining!\n'
			}

section3 = {
				'subheading' : 'If and Elif',
				'content' : """If statements are often accompanied by elif statments. Elif is an abbreviaton for
							else-if. They are formatted exactly like if statements, with the exception that the key word if
							is replaced with elif. You can have have an if statement followed by multiple elif statements. 
							Take a look at the code in the editor. You'll note that depending on what the value of the variable 
							animal is set to at the top of the code, a different word gets printed. Listen through the code and 
							try to change animal so that you print each of the words once.""",
				'challenge' : """Add an elif statement to the code in the editor such that when the value of animal is set to
								cow, moo gets printed.""",
				'code' :	"""animal = \"cat\"\nif animal == \"cat\":\n\tprint \"meow\"\nelif animal == \"dog\":\n\tprint \"bark\"\nelif animal == \"duck\":\n\tprint \"quack\"""",
				'examples' : 'elif variable == True:',
				'hints' : [
							''
						  ],
				'output' : 'moo'
			}

section4 = {
				'subheading' : 'Else',
				'content' : """If and elif statements often end with an else statement. Else statments are similar except
							they have no expression to evaluate. So you simply type else, followed by a colon. Then 
							underneath, you put your tabbed over code like usual. If, elif, and else statments work 
							together to control what code gets executed. In a series of statements, the next statement
							only gets checked if the previous check was unsuccessful. It other words, else statements
							only run when none of the conditions in the preceeding if and elif statements can be 
							satisfied.""",
				'challenge' : """Let's continue working with our example from the last section. Try adding
								an else statement to the end of the code block that prints out "Not a valid animal"
								when the variable animal is set to something other than cat, dog, or duck. Make sure 
								you can run the code and "Not a valid animal" gets printed.""",
				'code' :	"""animal = \"cat\"\nif animal == \"cat\":\n\tprint \"meow\"\nelif animal == \"dog\":\n\tprint \"bark\"\nelif animal == \"duck\":\n\tprint \"quack\"""",
				'examples' : 'else:',
				'hints' : [
							''
						  ],
				'output' : 'js'
}

section5 = {
				'subheading' : 'Using And',
				'content' : """So far we have only looked at checking the value of one variable in our if statements.
							However, sometimes we need our if statements to depend on multiple variables. We can use 
							the key word and to do this. So our expression will only be true if both of the conditions 
							joined together using and are true. This may sound confusing at first but you should
							get a better understanding when you check out the code in the editor.""",
				'challenge' : """Change the variables rain and wind so that "It is storming!" gets printed.""",
				'code' :	"""rain = False\nwind = False\nif rain == True and wind == True:\n\tprint \"It is storming!\"""",
				'examples' : 'if hot == True and cold == False:',
				'hints' : [
							'Remember that both variables need to be true in order for the whole expression to be true.'
						  ],
				'output': 'It is storming!\n'
			}

section6 = {
				'subheading' : 'Using Or',
				'content' : """Similar to the key word and, we can use the key word or in our if statements.
							   So our expression will be true when at least 1 of the conditions is true, unlike
							   when using and where both of the conditions have to be true. Check out the code
							   in the editor to get a better understanding.""",
				'challenge' : """Change the variables rain and wind so that "It may be storming" gets printed.""",
				'code' :	"""rain = False\nwind = False\nif rain == True or wind == True:\n\tprint \"It may be storming\"""",
				'examples' : 'if hot == True or cold == True:',
				'hints' : [
							''
						  ],
				'output': 'It may be storming\n'
			}			

lesson3 = {
			'heading' : '',
			'introduction' : '',
			'sections' : [
				section0,
				section1,
				section2,
				section3,
				section4,
				section5,
				section6
			]
		  }
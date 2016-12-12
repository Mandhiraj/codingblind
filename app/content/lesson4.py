section0 = {
	'subheading' : 'Loops',
	'content' : """Welcome to Lesson 4. In this lesson we will introduce loop structures. Loops allow you to
		count the number of times something happens, or iterate through lists. They use a similar structure to
		if statements. Everything you want done in a loop must be tabbed an additional time. Continue to the next
		lesson to learn more.""",
	'challenge' : '',
	'code' : '',
	'examples' : '',
	'hints' : [''],
	'output' : ''
}

section1 = {
	'subheading' : 'For loops',
	'content' : """For loops are a common way to replicate the same code, a specific number of times. They use 
		the structure for variable in range(1, 5):, where you can use any variable name you'd like. The numbers in
		range tell Python how many times you want the loop to run. Anything you want inside the loop must
		be tabbed over once, similar to the if statements from lesson 3.""",
	'challenge' : 'Use a for loop to print the word hello five times.',
	'code' : '',
	'examples' : 'for number in range(1, 5):',
	'hints' : ['Remember that the print statement must be tabbed further than the for loop. Check the example for proper syntax.'],
	'output' : 'hello\nhello\nhello\nhello\nhello\n'
}

section2 = {
	'subheading' : 'Lists',
	'content' : """Sometimes we want a variable to hold a list instead of a single value. To do this, we use the square
		brackets, and separate the values of our list by commas. For example, the proper syntax would be numbers = [ 'one', 'two'].
		This would give us a list of words one and two. To loop through this list, we can use the syntax for variable in numbers:""",
	'challenge' : 'For this challenge, we have made a list of animals for you. Add a for loop to print out each of the animals.',
	'code' : """animals = ['dog', 'cat', 'turtle']""",
	'examples' : 'for variable in numbers:',
	'hints' : ['Remember to tab over the print statement. Double check that you\'re using the variable names of the for loop correctly'],
	'output' : 'dog\ncat\nturtle\n'
}

section3 = {
	'subheading' : 'Combining Conditionals and Loops',
	'content' : """You are always allowed to combine different code structures together. This is called nesting. Say
		while you're looping through a range of values, you want to print something, but only sometimes. You can do this
		by putting if statements inside of for loops. Just remember to tab over everytime you use a colon.""",
	'challenge' : """Try putting an if statement inside of a for loop. Iterate from 1 to 10. When the loop is at 7, print the word success""",
	'code' : '',
	'examples' : '',
	'hints' : ["""Be careful with your tabs! Anytime you use a colon, anything inside of that loop or conditional should be tabbed over. Since you have
		both a for loop and an if statement, your print statement will need to be tabbed twice."""],
	'output' : 'success\n'
}

lesson4 = {
			'heading' : '',
			'introduction' : '',
			'sections' : [
				section0,
				section1,
				section2,
				section3
			]
		  }
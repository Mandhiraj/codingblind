section0 = {
				'subheading' : 'Introduction to Python with Math and Variables',
				'content' : """Welcome to Lesson 1. In this lesson we will be introducing you to the website coding environment and 
				learning how to print output, do simple math operations and use variables! To get started with the first section 
				of this lesson, press alt and the right arrow key.""",
				'challenge' : '',
				'examples' : [],
				'hints' : [''],
				'output' : ''
}

section1 = {
				'subheading' : 'Introduction to Printing',
				'content' : """Welcome to the first section. As you can notice, when you move to a new section the problem heading will be automatically read to you. 
					In this section we will learn how to output to the screen. 
					To output something to the screen in Python you use the word 'print' followed by what you would like to output.""",
				'challenge' : """For this problem try printing out your favorite number. Now press alt and the up or down arrow key to navigate to hear the hint for the problem. 
					For every section, if there is a hint you can navigate this way to hear it but we recommend that you try to complete the challenge on your own first.
					Use the key combination alt and space to start coding.""",
				'examples' : [{
								'input' : 'print 27',
								'output' : '27'
							}],
				'hints' : [
							"""As you type different lines of code you can use the arrow keys to navigate through the lines of code. The line you are on will be 
								automatically read to you. Go to the editor using the alt space key combination and try out the challenge. Then use the arrow keys to hear the code you write. 
								Once you are done typing, choose the run option by using alt and the arrow keys to run your code."""
						  ],
				'output' : 'js'
			}

section2 = {
				'subheading' : 'Math in Python',
				'content' : """Let's start with a simple math problem. Programming languages are excellent	
					for doing math because of their incredible speed. You can use the plus, dash, asterisk, or slash keys to do the 
					four basic math operations: addition, subtraction, multiplication, and division.
					Let's say we wanted to know what one plus two was. We could simply type the line print 1 + 2.""",
				'challenge' : """For this challenge try printing out 10 times 20""",
				'examples' : [{
								'input' : 'print 1 + 2',
								'output' : '3'
							}],
				'hints' : [
							""""""
						  ],
				'output' : '200\n'
			}

section3 = {
				'subheading' : 'Math and Order of Operations',
				'content' : """Programming languages like Python follow the order of operations that you have learned in your math classes. 
					So following the order of operations, if you had the math problem one plus one times two we would first multiply one and two then add 
					one to that value and get an answer of 3. If you wanted one plus one to be calculated first then you would put parentheses around that 
					part of your expression.""",
				'challenge' : """Try printing the solution to the math problem 5 minus 3 times 4 if we wanted the subtraction to be calculated 
					before the multiplication. Remember, you can use alt and the arrow keys to navigate to the example and hear how to use a variable.""",
				'examples' : [{
								'input' : 'print ( 1 + 1 ) * 2',
								'output' : '4'
							}],
				'hints' : [
							"""Remember that for the subtraction to be calculated before the multiplication you need to put an open parenthesis before 
							5 minus 3 and put a close parenthesis after."""
						  ],
				'output' : '8\n'
			}

section4 = {
				'subheading' : 'Variables in Python',
				'content' : """Let's say we were doing a longer math problem and 10 * 20 was one of our intermediate steps. 
					We could assign the result of 10 * 20 to a variable and then print to the screen. Think of a variable 
					as a holding place for a piece of information. If needed we can change the piece of information 
					that the variable holds as we go. We can call this variable whatever we want. In this problem, try naming 
					your variable something that describes the information it holds, such as result or answer. To set your variable's 
					value you type the variable's name then '=' followed by what you wish to set your variable equal to.""",
				'challenge' : """For this problem set a variable equal to 10 times 20 then print that variable. 
					Remember, you can use alt and the arrow keys to navigate to the example and hear how to use a variable.""",
				'examples' : [{
								'input' : 'result = 1 + 2\nprint result',
								'output' : '3'
							}],
				'hints' : [
							''
						  ],
				'output' : '200\n'
			}

section5 = {
				'subheading' : 'Math with Multiple Variables',
				'content' : """In the previous two sections we have learned about how to do basic math operations in Python 
					and how to store values in variables. These variables are useful when doing larger math operations because 
					you can perform any math operation on them (like adding or dividing). To do this you treat the variable the same
					as a number in an equation. Remember back to section 3 where we calculated ( 5 minus 3 ) times 4. Instead of putting 
					parentheses around 5 minus 3 we could also first set a variable equal to this value then multiply the variable by 4 to 
					get the same result.""",
				'challenge' : """For this challenge, set a variable equal to 5 minus 3 then print out your variable multiplied by 4. 
								You could listen to the example but try coding this on your own first.""",
				'examples' : [{
								'input' : 'result = 1 + 1\nprint result * 2',
								'output' : '4'
							}],
				'hints' : [
							''
						  ],
				'output' : 'js'
			}


lesson1 = {
			'heading' : "",
			'introduction' : "",
			'sections' : [
				section0,
				section1, 
				section2, 
				section3,
				section4,
				section5
			]
		  }
heading = 'Introduction to Python with Math and Variables';

introduction = """Welcome to Lesson 1. In this lesson we will be introducing you to the website coding environment and 
				learning how to print output, do simple math operations and use variables! To get started with the first section 
				of this lesson using the key combination alt n. As you finish each section and its coding challange you can navigate 
				to the next section by using this alt n key combination."""

section1 = {
				'subheading' : 'Introduction to Python and Printing',
				'content' : """Welcome to the first section. When you move to a new section the content and problem will be automatically read to you, but if 
					you want to hear it again you can press the key combination alt q at any time! In this section we will learn how to output to the screen. 
					To output something to the screen in Python you use the word 'print' followed by what you would like to output.""",
				'challenge' : """For this problem try printing out your favorite number! Now press alt W to hear the hint for the problem. 
					You can also use this key combination on every section to hear a hint but we recommend that you try to complete the challenge on your own first!""",
				'examples' : [{
								'input' : 'print 27',
								'output' : '27'
							}],
				'hints' : [
							"""As you type different lines of code you can use the arrow keys to navigate through the lines of code. The line you are on will be 
								automatically be read to you. Try out the challenge then using the arrow keys now to hear the code! Once you are done press alt r 
								to run you code!"""
						  ]
			}

section2 = {
				'subheading' : 'Math in Python',
				'content' : """Let's start  with a simple math problem! Programming languages are excellent	
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
						  ]
			}

section3 = {
				'subheading' : 'Math and Order of Operations',
				'content' : """Programming languages like Python follow the order of operations that you have learned in your math classes! 
					So following the order of operations, if you had the math problem one plus one times two we would first multiply one and two then add 
					one to that value and get an answer of 3. If you wanted one plus one to be calculated first then you would put parentheses around that 
					part of your equation. Remember you can press alt e to hear an example of this.""",
				'challenge' : """Try printing the solution to the math problem 5 minus 3 times 4 if we wanted the subtraction to be calculated 
					before the multiplication.""",
				'examples' : [{
								'input' : 'print ( 1 + 1 ) * 2',
								'output' : '4'
							}],
				'hints' : [
							"""Remember that for the subtraction to be calculated before the multiplication you need to put an open parenthesis before 
							5 minus 3 and put a close parenthesis after."""
						  ]
			}

section4 = {
				'subheading' : 'Variables in Python',
				'content' : """Let's say we were doing a longer math problem and 10 * 20 was one of our intermediate steps. 
					We could assign the result of 10 * 20 to a variable and then print to the screen. Think of a variable 
					as a holding place for a piece of information. If needed we can change the piece of information 
					that the variable holds as we go. We can call this variable whatever we want, in this problem try naming 
					your variable something that describes the information it holds, like result or answer. To set your variable's 
					value you type the variable's name then '=' followed by what you wish to set your variable equal to.""",
				'challenge' : """For this problem set a variable equal to 10 times 20 then print that variable. 
					Press alt e to go to the example to see how to use a variable.""",
				'examples' : [{
								'input' : 'result = 1 + 2\nprint result',
								'output' : '3'
							}],
				'hints' : [
							''
						  ]
			}

section5 = {
				'subheading' : 'Math with Multiple Variables',
				'content' : """In the previous two sections we have learned about how to do basic math operations in Python 
					and how to store values to variables. These variables are useful when doing larger math operations because 
					you can perform any math operation on them (like adding or dividing). To do this you treat the variable the same
					as a number in an equation. Remember back to section 3 where we calculated ( 5 minus 3 ) times 4. Instead of putting 
					parentheses around 5 minus 3 we could also first set a variable equal to this value then multiply the variable by 4 to 
					get the same result.""",
				'challenge' : """For this challenge setting a variable equal to 5 minus 3 then print out your variable multiplied by 4. 
					If hearing an example of this would be helpful press alt e or you can attempt coding this on your own first!""",
				'examples' : [{
								'input' : 'result = 1 + 1\nprint result * 2',
								'output' : '4'
							}],
				'hints' : [
							''
						  ]
			}


lesson1 = {
			'heading' : heading,
			'introduction' : introduction,
			'sections' : [
				section1, 
				section2, 
				section3,
				section4,
				section5
			]
		  }
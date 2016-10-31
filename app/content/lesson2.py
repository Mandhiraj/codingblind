
heading = 'Strings in Python';

introduction = 'Welcome to Lesson 2. In lesson 1 we covered the basics of variables and numbers in python. If those concepts do not sound familiar, please review lesson 1 by pressing the key combination alt 1. In this lesson we will cover strings. Strings are simply sequences of characters. The characters contained within a string can be basically anything you would type into a standard word processor. Letters, numbers and symbols are a few examples of possible characters. '

section1 = {
				'subheading' : 'Creating Strings',
				'content' : 'Creating strings in python is as simple as surrounding a sequence of characters with either single or double quotes. It is important to note that you must be consistent with your choice. For example, you can either declare the string containing the dog by typing \'dog\' or \"dog\".',
				'challenge' : 'To complete this section go ahead and create a string containing your name.',
				'examples' : [{
								'input' : ' \'Rashika Unjot\'',
								'output' : '\'Rashika Unjot\''
							}],
				'hints' : [
							'Remember, a string in python is a sequence of characters that begin with a single quote and ends with a single quote.'
						  ]
			}
section2 = {
				'subheading' : 'Concatenating Strings',
				'content' : 'You may be asking yourself, what happens when we have two strings and we want to combine them into a single string? This action is called concatenation. In example, if we are given \'Disney\' and \'Land\' and need to create the string \'DisneyLand\' we would be concatenating Disney and Land to create DisneyLand. In python we can use the + operator to concatenate strings. By typing \'Disney\' + \'Land\' the result would be \'DisneyLand\'.',
				'challenge' : 'To complete the challenge for this section you need to do the following. Create a variable called first_name and store a string containing your first name in it. Next, create a variable called last_name and store a string containing your last name in it. Finally, create a variable called full_name and store a string containing your full name by concatenating the strings contained in first_name and last_name. Don\'t forget to add a space in between your first and last name',
				'examples' : [{
								'input' : '\'Jerome\' + \' \' + \'Tinkle\'' ,
								'output' : ' \'Jerome Tinkle\''
							}],
				'hints' : [
							'Remember, to declare a variable you must first type the name of the varable and then assign a value. In this case the value is a string. In example, favorite_movie = \'Frozen\' would create a variable called favorite_movie with its value equal to string containing the word Frozen.',
							'Remember, you must add a space in between your first and last name. The example for this section will help you with the syntax'
						  ]
		
			}

section3 = {
				'subheading' : 'Printing Strings',
				'content' : '',
				'challenge' : '',
				'examples' : [{
								'input' : ' full_name = \'Rashika Unjot\' \
											print full_name',
								'output' : '\'Rashika Unjot\''
							}],
				'hints' : [
							'Remember, a string in python is a sequence of characters that begin with a single quote and ends with a single quote.'
						  ]
			}


lesson2 = {
			'heading' : heading,
			'introduction' : introduction,
			'sections' : [
				section1, 
				section2, 
				section3
			]
		  }
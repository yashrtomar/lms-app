import { Types } from 'mongoose';

export const assignments = [
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e3'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		questions: [
			{
				question:
					"What is the correct syntax for referring to an external script called 'script.js'?",
				options: [
					"<script src='script.js'>",
					"<script href='script.js'>",
					"<script name='script.js'>",
					"<script file='script.js'>"
				],
				correctOption: "<script src='script.js'>"
			},
			{
				question:
					'Which operator is used to assign a value to a variable?',
				options: ['=', '==', '===', '=>'],
				correctOption: '='
			},
			{
				question: 'How do you create a function in JavaScript?',
				options: [
					'function = myFunction()',
					'function:myFunction()',
					'function myFunction()',
					'create function myFunction()'
				],
				correctOption: 'function myFunction()'
			},
			{
				question:
					'Which of the following is a valid JavaScript variable name?',
				options: [
					'2ndVariable',
					'_myVariable',
					'my-Variable',
					'my Variable'
				],
				correctOption: '_myVariable'
			},
			{
				question: "What does the 'console.log()' function do?",
				options: [
					'Displays an alert message',
					'Logs data to the console',
					'Changes the webpage content',
					'Creates a new variable'
				],
				correctOption: 'Logs data to the console'
			},
			{
				question:
					'Which of the following is a correct way to write a conditional statement in JavaScript?',
				options: [
					'if (x == 10)',
					'if x == 10 then',
					'if x = 10',
					'if (x == 10) { } else'
				],
				correctOption: 'if (x == 10)'
			},
			{
				question:
					"What will be the output of the following code: console.log(5 + '5')?",
				options: ['55', '10', 'Error', 'undefined'],
				correctOption: '55'
			},
			{
				question:
					'Which method is used to remove the last element from an array in JavaScript?',
				options: ['pop()', 'shift()', 'push()', 'slice()'],
				correctOption: 'pop()'
			},
			{
				question:
					'How can you convert a string into a number in JavaScript?',
				options: [
					"Number('5')",
					"parseInt('5')",
					'Both of the above',
					'None of the above'
				],
				correctOption: 'Both of the above'
			},
			{
				question:
					'Which of the following is used to declare a constant in JavaScript?',
				options: ['var', 'let', 'const', 'constant'],
				correctOption: 'const'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e4'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		questions: [
			{
				question:
					"What is the result of the expression '5' + 3 in JavaScript?",
				options: ['53', '8', 'Error', '5'],
				correctOption: '53'
			},
			{
				question:
					'Which of the following methods is used to add a property to an object?',
				options: [
					'object.add()',
					'object.push()',
					'object.property = value',
					'object.set()'
				],
				correctOption: 'object.property = value'
			},
			{
				question: "What does 'this' refer to in a JavaScript function?",
				options: [
					'The function itself',
					'The global object',
					'The object that calls the function',
					'The function parameters'
				],
				correctOption: 'The object that calls the function'
			},
			{
				question:
					'Which of the following is used to define a class in JavaScript?',
				options: [
					'function MyClass() {}',
					'class MyClass {}',
					'define MyClass() {}',
					'object MyClass {}'
				],
				correctOption: 'class MyClass {}'
			},
			{
				question:
					"What is the purpose of the 'bind()' method in JavaScript?",
				options: [
					'To bind a function to an event',
					"To create a new function with a specific 'this' value",
					'To bind two variables together',
					'To bind a variable to a function'
				],
				correctOption:
					"To create a new function with a specific 'this' value"
			},
			{
				question:
					"What will be the output of the following code: console.log(!!'false')?",
				options: ['false', 'true', 'undefined', 'Error'],
				correctOption: 'true'
			},
			{
				question:
					'Which of the following is used to handle asynchronous operations in JavaScript?',
				options: ['setTimeout()', 'async/await', 'forEach()', 'map()'],
				correctOption: 'async/await'
			},
			{
				question: 'What is a closure in JavaScript?',
				options: [
					'A function that calls itself',
					'A function with a local variable',
					'A function that remembers its lexical scope',
					'A variable declared inside a function'
				],
				correctOption: 'A function that remembers its lexical scope'
			},
			{
				question:
					'Which method is used to check if an object has a specific property?',
				options: [
					'hasProperty()',
					'hasOwnProperty()',
					'propertyExists()',
					'containsProperty()'
				],
				correctOption: 'hasOwnProperty()'
			},
			{
				question:
					"What is the purpose of the 'Promise' object in JavaScript?",
				options: [
					'To handle synchronous operations',
					'To handle asynchronous operations',
					'To define a function',
					'To handle events'
				],
				correctOption: 'To handle asynchronous operations'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e5'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		questions: [
			{
				question:
					'Which of the following is a primary color in design?',
				options: ['Red', 'Orange', 'Green', 'Purple'],
				correctOption: 'Red'
			},
			{
				question:
					'What is the purpose of white space in graphic design?',
				options: [
					'To fill empty areas',
					'To create a balanced and uncluttered design',
					'To make the design look busy',
					'To add more elements to the design'
				],
				correctOption: 'To create a balanced and uncluttered design'
			},
			{
				question: 'What does RGB stand for in color theory?',
				options: [
					'Red, Green, Blue',
					'Red, Gray, Black',
					'Red, Gold, Blue',
					'Ruby, Green, Blue'
				],
				correctOption: 'Red, Green, Blue'
			},
			{
				question:
					'Which tool is commonly used for vector-based graphic design?',
				options: ['Photoshop', 'Illustrator', 'InDesign', 'Lightroom'],
				correctOption: 'Illustrator'
			},
			{
				question: "What is the 'rule of thirds' in design?",
				options: [
					'A technique for aligning elements to create visual balance',
					'A rule for using only three colors in a design',
					'A layout for dividing the design into three equal parts',
					'A method for organizing text into three sections'
				],
				correctOption:
					'A technique for aligning elements to create visual balance'
			},
			{
				question: 'What does CMYK stand for in color printing?',
				options: [
					'Cyan, Magenta, Yellow, Black',
					'Cyan, Magenta, Yellow, White',
					'Color, Model, Yellow, Black',
					'Cyan, Model, Yellow, Black'
				],
				correctOption: 'Cyan, Magenta, Yellow, Black'
			},
			{
				question: 'Which file format is best for web graphics?',
				options: ['JPEG', 'PNG', 'TIFF', 'GIF'],
				correctOption: 'PNG'
			},
			{
				question: 'What is a vector graphic?',
				options: [
					'A graphic made of pixels',
					'A graphic that can be scaled without losing quality',
					'A graphic with a fixed resolution',
					'A graphic that uses raster images'
				],
				correctOption:
					'A graphic that can be scaled without losing quality'
			},
			{
				question:
					'Which of the following is a key principle of good typography?',
				options: [
					'Using multiple fonts',
					'Ensuring readability and legibility',
					'Using only one color',
					'Using complex font styles'
				],
				correctOption: 'Ensuring readability and legibility'
			},
			{
				question:
					'What is the main purpose of a mood board in graphic design?',
				options: [
					'To create a color palette',
					'To gather visual inspiration and ideas',
					'To outline the project budget',
					'To sketch initial designs'
				],
				correctOption: 'To gather visual inspiration and ideas'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e6'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		questions: [
			{
				question:
					'Which CSS property is used to change the text color?',
				options: [
					'color',
					'text-color',
					'font-color',
					'background-color'
				],
				correctOption: 'color'
			},
			{
				question: "What does the 'box-sizing' property control in CSS?",
				options: [
					"How padding and border are included in an element's width and height",
					'The font size of an element',
					'The spacing between elements',
					'The background color of an element'
				],
				correctOption:
					"How padding and border are included in an element's width and height"
			},
			{
				question:
					'Which CSS property is used to set the space between lines of text?',
				options: [
					'line-height',
					'letter-spacing',
					'text-indent',
					'word-spacing'
				],
				correctOption: 'line-height'
			},
			{
				question:
					"What is the purpose of the 'display' property in CSS?",
				options: [
					'It defines the layout behavior of an element',
					'It changes the background color of an element',
					'It sets the width and height of an element',
					'It defines the font style of an element'
				],
				correctOption: 'It defines the layout behavior of an element'
			},
			{
				question:
					'Which CSS selector is used to target all elements of a specific class?',
				options: [
					'.classname',
					'#classname',
					'classname',
					'*classname'
				],
				correctOption: '.classname'
			},
			{
				question:
					'Which CSS property is used to set the background image of an element?',
				options: [
					'background-image',
					'background-color',
					'image-background',
					'background-url'
				],
				correctOption: 'background-image'
			},
			{
				question: "What does the 'z-index' property control in CSS?",
				options: [
					'The stacking order of elements',
					'The size of the font',
					'The position of an element',
					'The margin between elements'
				],
				correctOption: 'The stacking order of elements'
			},
			{
				question:
					'Which of the following CSS properties can be used to create rounded corners?',
				options: [
					'border-radius',
					'border-style',
					'corner-radius',
					'box-shadow'
				],
				correctOption: 'border-radius'
			},
			{
				question:
					'Which CSS property is used to create a flex container?',
				options: [
					'display: flex',
					'display: block',
					'flex-container: true',
					'container: flex'
				],
				correctOption: 'display: flex'
			},
			{
				question: "What does the 'position' property in CSS control?",
				options: [
					'The positioning of an element relative to its normal position',
					'The background color of an element',
					'The width of an element',
					'The margin of an element'
				],
				correctOption:
					'The positioning of an element relative to its normal position'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e7'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		questions: [
			{
				question: 'What is the primary goal of UI design?',
				options: [
					'To ensure the design is visually appealing',
					'To create a seamless user experience',
					'To make the design responsive',
					'To organize content in a user-friendly way'
				],
				correctOption: 'To ensure the design is visually appealing'
			},
			{
				question: 'What does UX stand for?',
				options: [
					'User Experience',
					'Universal Experience',
					'User Execution',
					'Unified Experience'
				],
				correctOption: 'User Experience'
			},
			{
				question:
					'Which of the following is NOT a principle of good UX design?',
				options: ['Consistency', 'Clarity', 'Efficiency', 'Complexity'],
				correctOption: 'Complexity'
			},
			{
				question: 'What is the purpose of wireframing in UI/UX design?',
				options: [
					'To create a high-fidelity prototype',
					'To outline the basic layout and functionality',
					'To test the final design',
					'To create detailed visual assets'
				],
				correctOption: 'To outline the basic layout and functionality'
			},
			{
				question:
					'What is the main difference between UI and UX design?',
				options: [
					'UI focuses on how the product looks, UX focuses on how it works',
					'UI is about the user experience, UX is about the interface',
					'UI deals with interaction design, UX deals with graphic design',
					'There is no difference'
				],
				correctOption:
					'UI focuses on how the product looks, UX focuses on how it works'
			},
			{
				question:
					'Which of the following is an important factor in UI design?',
				options: [
					'User research',
					'Consistency in layout and design',
					'Prototyping',
					'User testing'
				],
				correctOption: 'Consistency in layout and design'
			},
			{
				question: "What does 'responsive design' refer to?",
				options: [
					'Design that adapts to different screen sizes',
					'Design that focuses on user feedback',
					'Design that uses minimal graphics',
					'Design that is optimized for speed'
				],
				correctOption: 'Design that adapts to different screen sizes'
			},
			{
				question:
					'Which of the following is an example of a good UX practice?',
				options: [
					'Clear navigation',
					'Complex menus',
					'Unclear instructions',
					'Frequent pop-up windows'
				],
				correctOption: 'Clear navigation'
			},
			{
				question: 'What is the purpose of user personas in UX design?',
				options: [
					'To represent different types of users and their needs',
					'To define the visual style of the design',
					'To conduct usability testing',
					'To track user interactions'
				],
				correctOption:
					'To represent different types of users and their needs'
			},
			{
				question:
					'Which of the following is an important aspect of UI design?',
				options: [
					'Typography',
					'Code structure',
					'User flow',
					'Back-end functionality'
				],
				correctOption: 'Typography'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e8'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		questions: [
			{
				question: 'What is React?',
				options: [
					'A JavaScript library for building user interfaces',
					'A CSS framework',
					'A back-end framework',
					'A database management system'
				],
				correctOption:
					'A JavaScript library for building user interfaces'
			},
			{
				question:
					'Which function is used to create a component in React?',
				options: [
					'createComponent()',
					'React.createElement()',
					'function()',
					'React.Component()'
				],
				correctOption: 'React.createElement()'
			},
			{
				question: 'What is JSX in React?',
				options: [
					'A JavaScript syntax extension that looks like HTML',
					'A CSS style sheet for React components',
					'A JavaScript function for rendering components',
					'A method to handle state in React'
				],
				correctOption:
					'A JavaScript syntax extension that looks like HTML'
			},
			{
				question:
					'What is the purpose of the render() method in React?',
				options: [
					"To update the component's state",
					'To render JSX to the DOM',
					'To handle user inputs',
					'To fetch data from an API'
				],
				correctOption: 'To render JSX to the DOM'
			},
			{
				question:
					'Which of the following is used to pass data from a parent component to a child component in React?',
				options: ['props', 'state', 'context', 'ref'],
				correctOption: 'props'
			},
			{
				question: 'What is state in React?',
				options: [
					"A way to manage the component's data that can change over time",
					'A method to pass data between components',
					"A way to define a component's appearance",
					'A built-in React library'
				],
				correctOption:
					"A way to manage the component's data that can change over time"
			},
			{
				question:
					'Which hook is used to manage state in functional components?',
				options: ['useEffect', 'useState', 'useContext', 'useReducer'],
				correctOption: 'useState'
			},
			{
				question: 'What is the purpose of the useEffect hook in React?',
				options: [
					'To handle side effects like fetching data or updating the DOM',
					'To manage state in a component',
					'To define the structure of a component',
					'To pass data between components'
				],
				correctOption:
					'To handle side effects like fetching data or updating the DOM'
			},
			{
				question: 'What is the Virtual DOM in React?',
				options: [
					'A lightweight copy of the actual DOM that React uses for efficient rendering',
					'A feature for managing state in React',
					'A method for handling events in React',
					'A library for building user interfaces'
				],
				correctOption:
					'A lightweight copy of the actual DOM that React uses for efficient rendering'
			},
			{
				question:
					'Which of the following is a lifecycle method in React?',
				options: [
					'componentDidMount',
					'renderComponent',
					'componentStateUpdate',
					'handleUserInput'
				],
				correctOption: 'componentDidMount'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e9'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		questions: [
			{
				question: 'What is Node.js?',
				options: [
					"A JavaScript runtime built on Chrome's V8 JavaScript engine",
					'A front-end JavaScript framework',
					'A CSS framework',
					'A database management system'
				],
				correctOption:
					"A JavaScript runtime built on Chrome's V8 JavaScript engine"
			},
			{
				question:
					'Which of the following is used to manage packages in Node.js?',
				options: ['npm', 'yarn', 'bower', 'composer'],
				correctOption: 'npm'
			},
			{
				question: 'What does npm stand for?',
				options: [
					'Node Package Manager',
					'Node Process Manager',
					'New Package Manager',
					'Network Package Manager'
				],
				correctOption: 'Node Package Manager'
			},
			{
				question: 'What is Express.js?',
				options: [
					'A framework for building web applications in Node.js',
					'A JavaScript library for front-end development',
					'A database management system',
					'A CSS framework'
				],
				correctOption:
					'A framework for building web applications in Node.js'
			},
			{
				question: 'Which method is used to create a server in Node.js?',
				options: [
					'http.createServer()',
					'server.create()',
					'createServer()',
					'node.createServer()'
				],
				correctOption: 'http.createServer()'
			},
			{
				question: 'Which of the following is true about Node.js?',
				options: [
					'Node.js is single-threaded and non-blocking',
					'Node.js is multi-threaded and blocking',
					'Node.js is a front-end framework',
					'Node.js is only for databases'
				],
				correctOption: 'Node.js is single-threaded and non-blocking'
			},
			{
				question:
					'Which command is used to install a package in Node.js?',
				options: [
					'npm install <package-name>',
					'npm get <package-name>',
					'node install <package-name>',
					'npm add <package-name>'
				],
				correctOption: 'npm install <package-name>'
			},
			{
				question: 'What is middleware in Express.js?',
				options: [
					'Functions that have access to the request, response, and the next middleware function',
					'A method to handle database queries',
					'A tool for managing static files',
					'A package manager for Express'
				],
				correctOption:
					'Functions that have access to the request, response, and the next middleware function'
			},
			{
				question:
					'Which of the following is used to handle HTTP requests in Node.js?',
				options: ['Express.js', 'React.js', 'Vue.js', 'Angular.js'],
				correctOption: 'Express.js'
			},
			{
				question:
					'Which method is used to listen for requests in Express.js?',
				options: [
					'app.listen()',
					'server.listen()',
					'express.listen()',
					'node.listen()'
				],
				correctOption: 'app.listen()'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f0'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		questions: [
			{
				question: 'What is digital marketing?',
				options: [
					'Marketing using digital channels to reach consumers',
					'Marketing using traditional methods like TV and print ads',
					'Marketing through direct sales only',
					'Marketing through door-to-door sales'
				],
				correctOption:
					'Marketing using digital channels to reach consumers'
			},
			{
				question: 'Which of the following is a key component of SEO?',
				options: [
					'Keyword optimization',
					'Social media management',
					'Email marketing',
					'Pay-per-click ads'
				],
				correctOption: 'Keyword optimization'
			},
			{
				question: 'What does PPC stand for?',
				options: [
					'Pay Per Click',
					'Public Price Campaign',
					'Private Purchase Cost',
					'Product Promotion Click'
				],
				correctOption: 'Pay Per Click'
			},
			{
				question:
					'Which platform is primarily used for social media marketing?',
				options: ['Facebook', 'Amazon', 'eBay', 'LinkedIn'],
				correctOption: 'Facebook'
			},
			{
				question: 'What is the goal of email marketing?',
				options: [
					'To reach customers directly through their inboxes',
					'To increase website traffic',
					'To improve search engine rankings',
					'To create viral content'
				],
				correctOption:
					'To reach customers directly through their inboxes'
			},
			{
				question: 'What does CTR stand for in digital marketing?',
				options: [
					'Click-Through Rate',
					'Customer Transaction Rate',
					'Content Transfer Rate',
					'Cost to Reach'
				],
				correctOption: 'Click-Through Rate'
			},
			{
				question:
					'Which of the following is NOT a digital marketing strategy?',
				options: [
					'Content marketing',
					'SEO',
					'Influencer marketing',
					'Telemarketing'
				],
				correctOption: 'Telemarketing'
			},
			{
				question: 'What is the purpose of content marketing?',
				options: [
					'To create valuable content to attract and engage audiences',
					'To sell products directly',
					'To send promotional emails',
					'To increase followers on social media'
				],
				correctOption:
					'To create valuable content to attract and engage audiences'
			},
			{
				question: 'Which tool is commonly used for email marketing?',
				options: [
					'Mailchimp',
					'Google Analytics',
					'Google Ads',
					'Canva'
				],
				correctOption: 'Mailchimp'
			},
			{
				question: 'What is influencer marketing?',
				options: [
					'Marketing through individuals who have influence over potential customers',
					'Marketing through email lists',
					'Marketing through search engine optimization',
					'Marketing through paid ads'
				],
				correctOption:
					'Marketing through individuals who have influence over potential customers'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f1'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		questions: [
			{
				question:
					'Which Python library is commonly used for data manipulation?',
				options: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn'],
				correctOption: 'Pandas'
			},
			{
				question: "What does 'NaN' stand for in a Pandas DataFrame?",
				options: [
					'Not a Number',
					'New and Neat',
					'Not Applicable Now',
					'None of the Above'
				],
				correctOption: 'Not a Number'
			},
			{
				question:
					'Which of the following is used for data visualization in Python?',
				options: ['Matplotlib', 'TensorFlow', 'Django', 'Flask'],
				correctOption: 'Matplotlib'
			},
			{
				question:
					'Which Python function is used to read a CSV file into a Pandas DataFrame?',
				options: [
					'read_csv()',
					'import_csv()',
					'load_csv()',
					'csv_read()'
				],
				correctOption: 'read_csv()'
			},
			{
				question:
					"What is the purpose of the 'groupby()' function in Pandas?",
				options: [
					'To group data by specific columns for aggregation',
					'To sort data',
					'To filter data',
					'To merge data'
				],
				correctOption:
					'To group data by specific columns for aggregation'
			},
			{
				question:
					'Which of the following is a Python library used for machine learning?',
				options: ['Scikit-learn', 'Pygame', 'Flask', 'Kivy'],
				correctOption: 'Scikit-learn'
			},
			{
				question:
					'Which method is used to check for missing values in a Pandas DataFrame?',
				options: ['isnull()', 'isna()', 'fillna()', 'dropna()'],
				correctOption: 'isnull()'
			},
			{
				question:
					'Which of the following is a common plot type in Matplotlib?',
				options: [
					'Bar plot',
					'Line plot',
					'Scatter plot',
					'All of the above'
				],
				correctOption: 'All of the above'
			},
			{
				question:
					"What is the purpose of the 'pivot_table()' function in Pandas?",
				options: [
					'To create a pivot table from data',
					'To visualize data',
					'To clean data',
					'To merge two DataFrames'
				],
				correctOption: 'To create a pivot table from data'
			},
			{
				question:
					'Which Python function is used to calculate the mean of a DataFrame column?',
				options: ['mean()', 'avg()', 'sum()', 'median()'],
				correctOption: 'mean()'
			}
		],
		submitted: false,
		score: null
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f2'),
		coursId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		questions: [
			{
				question: 'What is the main goal of supervised learning?',
				options: [
					'To learn from labeled data',
					'To learn from unlabeled data',
					'To predict continuous values',
					'To optimize an objective function'
				],
				correctOption: 'To learn from labeled data'
			},
			{
				question:
					'Which of the following is an example of a supervised learning algorithm?',
				options: [
					'Linear Regression',
					'K-means Clustering',
					'Principal Component Analysis',
					'DBSCAN'
				],
				correctOption: 'Linear Regression'
			},
			{
				question:
					"What does the term 'overfitting' mean in machine learning?",
				options: [
					'The model performs well on both training and test data',
					'The model performs poorly on both training and test data',
					'The model performs well on training data but poorly on test data',
					'The model is too simple to learn the data'
				],
				correctOption:
					'The model performs well on training data but poorly on test data'
			},
			{
				question:
					'Which algorithm is commonly used for classification tasks?',
				options: [
					'Logistic Regression',
					'Linear Regression',
					'K-means Clustering',
					'Principal Component Analysis'
				],
				correctOption: 'Logistic Regression'
			},
			{
				question: 'What is the purpose of a confusion matrix?',
				options: [
					'To evaluate the performance of a classification model',
					'To visualize the training data',
					"To optimize the model's hyperparameters",
					'To handle missing data'
				],
				correctOption:
					'To evaluate the performance of a classification model'
			},
			{
				question:
					'Which technique is used to reduce overfitting in machine learning models?',
				options: [
					'Cross-validation',
					'Normalization',
					'Gradient Descent',
					'None of the above'
				],
				correctOption: 'Cross-validation'
			},
			{
				question:
					"What does 'feature scaling' refer to in machine learning?",
				options: [
					'Standardizing the range of features',
					'Selecting the most important features',
					'Removing irrelevant features',
					'Encoding categorical features'
				],
				correctOption: 'Standardizing the range of features'
			},
			{
				question:
					'Which of the following is a type of unsupervised learning?',
				options: [
					'K-means Clustering',
					'Linear Regression',
					'Logistic Regression',
					'Support Vector Machines'
				],
				correctOption: 'K-means Clustering'
			},
			{
				question:
					'Which metric is commonly used to evaluate the performance of a regression model?',
				options: [
					'Mean Absolute Error (MAE)',
					'Accuracy',
					'F1-score',
					'Precision'
				],
				correctOption: 'Mean Absolute Error (MAE)'
			},
			{
				question:
					"What is the purpose of the 'train-test split' in machine learning?",
				options: [
					'To divide the data into training and testing sets',
					'To increase the size of the dataset',
					'To visualize the data',
					'To handle missing values'
				],
				correctOption:
					'To divide the data into training and testing sets'
			}
		],
		submitted: false,
		score: null
	}
];

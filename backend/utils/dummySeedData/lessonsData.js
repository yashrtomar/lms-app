import { Types } from 'mongoose';
export const lessons = [
	{
		_id: new Types.ObjectId('63f1b1e8e8a1a1a1a1a1b101'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		lessonTitle: 'Introduction to JavaScript',
		lessonDescription:
			'Welcome to the course! In this lesson, you will learn the basics of JavaScript, including variables, data types, and basic syntax.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1b1e8e8a1a1a1a1a1b102'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		lessonTitle: 'JavaScript Variables',
		lessonDescription:
			'This lesson covers the different types of variables in JavaScript and how to use them effectively.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1b1e8e8a1a1a1a1a1b103'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		lessonTitle: 'Functions in JavaScript',
		lessonDescription:
			'Learn about functions in JavaScript, including function declarations, expressions, and arrow functions.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1b1e8e8a1a1a1a1a1b104'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		lessonTitle: 'Control Flow',
		lessonDescription:
			'Understand how to use conditional statements and loops to control the flow of your JavaScript programs.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1b1e8e8a1a1a1a1a1b105'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		lessonTitle: 'JavaScript Objects',
		lessonDescription:
			'Explore the concept of objects in JavaScript and learn how to create and manipulate them.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Closures in JavaScript',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		description:
			'Understanding closures, lexical scoping, and how closures can be used in real-world applications.',
		lessonDescription:
			'Video and code examples explaining closures, practical exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle:
			'Asynchronous JavaScript - Callbacks, Promises, and Async/Await',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		description:
			'A deep dive into handling asynchronous operations using callbacks, promises, and the async/await syntax.',
		lessonDescription:
			'Video tutorial, coding challenges, and interactive exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'JavaScript Design Patterns',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		description:
			'Introduction to popular design patterns in JavaScript such as Singleton, Factory, and Module patterns.',
		lessonDescription:
			'Lecture with code samples, exercises for applying patterns in projects.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'JavaScript ES6 Features',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		description:
			'Explore the new features introduced in ES6, including let/const, arrow functions, template literals, destructuring, and more.',
		lessonDescription:
			'Video breakdown of each feature with examples and hands-on coding exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1aa'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Memory Management in JavaScript',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		description:
			'Understanding how JavaScript manages memory, including garbage collection, memory leaks, and optimization techniques.',
		lessonDescription:
			'Lecture with real-world examples and tips for optimizing memory usage in JavaScript applications.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ab'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Graphic Design',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		description:
			'An overview of graphic design principles, tools, and applications in the design world.',
		lessonDescription:
			'Video explaining the basics of graphic design, key tools, and career paths.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ac'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Color Theory in Graphic Design',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		description:
			'Understanding the importance of color in design, color schemes, and psychological effects of colors.',
		lessonDescription:
			'Video tutorial with examples of color palettes and exercises for applying color theory.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ad'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Typography Basics',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		description:
			'Learn the fundamentals of typography, including font types, sizes, and spacing.',
		lessonDescription:
			'Lecture with visual examples of different typography styles and exercises to practice choosing the right fonts.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ae'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Principles of Layout Design',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		description:
			'Explore the key principles of layout design, including balance, contrast, and alignment.',
		lessonDescription:
			'Video with real-world examples of layout designs and exercises to apply layout principles.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1af'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Creating Digital Graphics with Photoshop',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		description:
			'Learn how to create and edit digital graphics using Adobe Photoshop, including tools and techniques.',
		lessonDescription:
			'Step-by-step tutorial with hands-on practice in Photoshop for creating basic graphics.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc0'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to CSS',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		description:
			'Learn the fundamentals of CSS, including selectors, properties, and basic styling techniques.',
		lessonDescription:
			'Video tutorial covering the basics of CSS with examples of simple styling.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc1'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'CSS Box Model',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		description:
			'Deep dive into the CSS box model, including padding, margins, borders, and lessonDescription areas.',
		lessonDescription:
			'Video explaining the box model with interactive examples and exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc2'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Flexbox Layout',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		description:
			'Master the Flexbox layout system for building responsive and flexible web layouts.',
		lessonDescription:
			'Step-by-step guide with examples of Flexbox in action and hands-on exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc3'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'CSS Grid Layout',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		description:
			'Learn how to create complex layouts using CSS Grid, with examples and practical exercises.',
		lessonDescription:
			'Video tutorial explaining CSS Grid concepts, followed by interactive coding exercises.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc4'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Advanced CSS Animations',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		description:
			'Explore advanced CSS animations and transitions to create interactive and engaging web experiences.',
		lessonDescription:
			'Lecture covering CSS animations with examples and challenges to create custom animations.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b5'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to UI/UX Design',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		description:
			'An overview of UI/UX design, including the importance of user-centered design and the design process.',
		lessonDescription:
			'Video introduction to the basics of UI/UX design, the design thinking process, and key principles.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b6'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'User Research and Personas',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		description:
			'Learn how to conduct user research and create user personas to guide design decisions.',
		lessonDescription:
			'Video tutorial on methods for user research, followed by exercises to create user personas.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b7'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Wireframing and Prototyping',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		description:
			'Master the techniques of wireframing and prototyping to visualize and test your design ideas.',
		lessonDescription:
			'Step-by-step guide to creating wireframes and prototypes using tools like Figma and Sketch.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b8'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'UI Design Patterns and Best Practices',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		description:
			'Explore common UI design patterns and best practices for creating intuitive and user-friendly interfaces.',
		lessonDescription:
			'Video lecture on UI patterns such as navigation, forms, and buttons, with real-world examples.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b9'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Usability Testing and Iteration',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		description:
			'Learn how to conduct usability testing and iterate on designs based on user feedback.',
		lessonDescription:
			'Tutorial on usability testing methods, followed by exercises to apply testing and iterate on designs.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ba'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to React',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		description:
			'Learn the fundamentals of React, including JSX, components, and props.',
		lessonDescription:
			'Video tutorial introducing React, JSX syntax, and how to create functional components.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bb'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'State and Props in React',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		description:
			'Understand how to manage state and pass data through props in React components.',
		lessonDescription:
			'Video explaining state management, how to use useState, and how props are passed between components.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bc'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Handling Events in React',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		description:
			'Learn how to handle events in React, such as clicks, form submissions, and more.',
		lessonDescription:
			'Step-by-step guide to handling user events in React, including event binding and custom handlers.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bd'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'React Hooks: useState and useEffect',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		description:
			'Dive deeper into React hooks, focusing on useState for state management and useEffect for side effects.',
		lessonDescription:
			'Video explaining how to use useState and useEffect hooks with examples of managing state and side effects.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1be'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Building a Simple React App',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		description:
			'Put your skills into practice by building a simple React application.',
		lessonDescription:
			'Tutorial guiding you through the process of building a basic React app, from setup to deployment.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bf'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Node.js',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		description:
			'Learn the basics of Node.js, including its architecture and how it differs from traditional server-side technologies.',
		lessonDescription:
			'Video introduction to Node.js, covering its event-driven architecture and asynchronous nature.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c0'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Setting Up a Node.js Project',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		description:
			'Learn how to set up a Node.js project, manage dependencies, and configure the development environment.',
		lessonDescription:
			'Step-by-step guide on initializing a Node.js project using npm and configuring project files.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c1'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Working with Express.js',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		description:
			'Understand how to use Express.js, a minimal web framework for Node.js, to build RESTful APIs.',
		lessonDescription:
			'Video explaining how to set up an Express.js server, define routes, and handle HTTP requests.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c2'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Connecting to Databases with Node.js',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		description:
			'Learn how to connect a Node.js application to a database, including MongoDB and SQL databases.',
		lessonDescription:
			'Tutorial on connecting Node.js to MongoDB using Mongoose and to SQL databases using Sequelize.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c3'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Building a RESTful API with Node.js',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		description:
			'Build a RESTful API using Node.js and Express.js, and learn best practices for API development.',
		lessonDescription:
			'Step-by-step guide to creating a RESTful API, including handling CRUD operations and managing routes.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c4'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Digital Marketing',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		description:
			'An overview of digital marketing, its importance, and the key channels used in the field.',
		lessonDescription:
			'Video introducing digital marketing concepts, the digital landscape, and key marketing strategies.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c5'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'lessonDescription Marketing Strategy',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		description:
			'Learn how to create and implement an effective lessonDescription marketing strategy to engage your audience.',
		lessonDescription:
			'Video explaining how to develop lessonDescription marketing strategies, including lessonDescription planning, creation, and distribution.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c6'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'SEO Basics for Digital Marketing',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		description:
			'Learn the fundamentals of SEO (Search Engine Optimization) and how it impacts digital marketing success.',
		lessonDescription:
			'Step-by-step guide to understanding SEO, including on-page and off-page optimization techniques.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c7'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Social Media Marketing Strategies',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		description:
			'Discover how to create and execute successful social media marketing campaigns on various platforms.',
		lessonDescription:
			'Video tutorial on social media marketing strategies, including platform selection, lessonDescription creation, and audience engagement.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c8'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Email Marketing Essentials',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		description:
			'Learn the key elements of email marketing and how to build effective email campaigns.',
		lessonDescription:
			'Step-by-step guide to creating email marketing campaigns, including list building, segmentation, and performance tracking.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c9'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Python for Data Science',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		description:
			'Learn the basics of Python programming and how it applies to data science tasks.',
		lessonDescription:
			'Video introducing Python syntax, libraries, and its role in data science workflows.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ca'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Data Structures and Libraries in Python',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		description:
			'Understand the essential data structures in Python, including lists, dictionaries, and sets, and how to use libraries like NumPy and Pandas.',
		lessonDescription:
			'Video explaining Python data structures and how to use NumPy and Pandas for data manipulation.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cb'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Data Cleaning with Pandas',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		description:
			'Learn how to clean and preprocess data using Pandas, including handling missing values and data normalization.',
		lessonDescription:
			'Step-by-step guide on cleaning data with Pandas, including data transformation and handling missing data.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cc'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Data Visualization with Matplotlib and Seaborn',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		description:
			'Learn how to visualize data using Python libraries Matplotlib and Seaborn.',
		lessonDescription:
			'Video tutorial on creating various types of plots and charts to visualize data insights using Matplotlib and Seaborn.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cd'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Machine Learning with Python',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		description:
			'Get started with machine learning concepts and algorithms using Python and libraries like scikit-learn.',
		lessonDescription:
			'Step-by-step guide to building your first machine learning model with Python, including data preparation and model evaluation.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ce'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Introduction to Machine Learning',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		description:
			'Learn the basics of machine learning, its applications, and the difference between supervised and unsupervised learning.',
		lessonDescription:
			'Video introducing machine learning concepts, types of machine learning, and real-world applications.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cf'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Understanding Data Preprocessing',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		description:
			'Learn how to preprocess data for machine learning, including feature scaling, encoding categorical variables, and handling missing data.',
		lessonDescription:
			'Video tutorial on the importance of data preprocessing and common techniques used in machine learning workflows.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d0'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Supervised Learning Algorithms',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		description:
			'Dive into supervised learning algorithms, such as linear regression, decision trees, and support vector machines.',
		lessonDescription:
			'Step-by-step explanation of supervised learning algorithms, including theory and implementation examples in Python.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d1'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Unsupervised Learning and Clustering',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		description:
			'Understand unsupervised learning techniques, focusing on clustering algorithms like K-means and hierarchical clustering.',
		lessonDescription:
			'Video on unsupervised learning algorithms, with a focus on clustering methods and their use cases in machine learning.',
		video: 'https://youtu.be/9xwazD5SyVg'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d2'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		lessonTitle: 'Model Evaluation and Validation',
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		description:
			'Learn how to evaluate machine learning models using various metrics such as accuracy, precision, recall, and F1-score.',
		lessonDescription:
			'Tutorial on model evaluation techniques, including cross-validation and performance metrics for classification and regression models.',
		video: 'https://youtu.be/9xwazD5SyVg'
	}
];

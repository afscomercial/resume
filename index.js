const resume = {
	firstName: 'Andres',
	lastName: 'Salguero',
	jobTitle: 'FULL-STACK JS REACT NODE WEB-MOBILE DAPP DEVELOPER',
	city: 'Toronto',
	postalCode: '',
	country: 'Canada',
	phone: '+1(437)603-4634',
	email: 'andresfelipesalguero@gmail.com',
	education: [
		{
			school: 'CECEP',
			degree: 'Associate\'s degree',
			graduationDate: '2009',
			description: 'Computer Software Technology/Technician'
		},
		{
			school: 'Libre University',
			degree: 'Postgraduate Degree',
			graduationDate: '2008',
			description: 'Internetworking'
		},
		{
			school: 'San Buenaventura University',
			degree: 'Bachelor\'s degree',
			graduationDate: '2005',
			description: 'Agricultural Engineering'
		}
	],
	links: [
		{
			label: 'GitHub',
			link: 'https://github.com/afscomercial'
		},
		{
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/andres-felipe-salguero/'
		}
	],
	skills: [
        {name:'React/NextJS', percent:'90%'},
        {name:'JavaScript', percent:'90%'},
        {name:'Angular', percent:'80%'},
        {name:'NodeJS/NestJS', percent:'70%'},
        {name:'TypeScript', percent:'70%'},
        {name:'Ionic', percent:'70%'},
		{name:'Shopify', percent:'70%'},
        {name:'React Native', percent:'60%'},
        {name:'AWS', percent:'60%'},
		{name:'Firebase', percent:'60%'},
		{name:'Solidity', percent:'60%'},
        {name:'Web3JS', percent:'60%'},
		{name:'GraphQl', percent:'70%'},
		{name:'MongoDB', percent:'50%'},
        {name:'Git', percent:'70%'},
		{name:'Python', percent:'50%'}
	],
	languages: ['English - C1', 'Spanish - native'],
	professionalSummary: `Coding is my passion, I have programming skills with emphasis on web, mobile and decentralized applications, AI enthusiastic`,
	employmentHistory: [
		{
			jobTitle: 'User Interface Engineer',
			startDate: 'Sep 2021',
			endDate: 'Present',
			employer: 'FPT Software',
			city: 'Remote',
            technologies:'Node, React, NextJS, Solidity, AWS, Git, Jest, AWS Serverless, Shopify',
            description: 'Develop storefront website customization for the Automotive industry and blockchain DeFi app.',
			achievements: [
				'Server Side Rendering with express and React.',
				'Built microservices to optimize the customer shopping experience base on AWS serverless using Terraform',
				'Developed a decentralized application using Solidity and Web3JS.',
				'Developed new features for the Shopify storefront using React, Remix and liquid.'
			]
		},
		{
			jobTitle: 'FullStack Developer',
			startDate: 'Dec 2020',
			endDate: 'Sep 2021',
			employer: 'BairesDev',
			city: 'Remote',
            technologies:'Node, Angular, AWS, Ionic, GraphQl, AWS, Git, Jest',
            description:'Full Stack developing for the healthcare industry, back-end services, front-end web and mobile application.',
			achievements: [
				'Developed AWS lambda API with Node and GraphQL.',
				'Use DynamoDB as database for data persistence, Angular with Ionic as web and mobile client.',
                'Improved the usability implementing better UX standards .'
			]
		},
		{
			jobTitle: 'FullStack Developer',
			startDate: 'Agu 2019',
			endDate: 'Dec 2020',
			employer: 'Perficient',
			city: 'Medellín/Colombia',
            technologies:'Node, NestJS, React, NextJS, Angular, Git, GraphQL, MongoDB, AWS, Jest',
            description: 'Full Stack developer React, Node, Angular for mobile and web applications.',
			achievements: [
				'Developed REST service APIs with Node according to business requirements.',
				'Consume GraphQL API with Apollo from React web application.',
                'Implemented some Devops practices creating CI pipelines using Jenkins, GitHub and GitLab with Git as the version system.'
			]
		},
		{
			jobTitle: 'Developer',
			startDate: 'Agu 2018',
			endDate: 'Agu 2019',
			employer: 'Tata Consultancy Services',
			city: 'Medellín/Colombia',
            technologies:'Angular, Node, Java, Junit, SQL, Git, Azure Devops',
            description: 'Full Stack Angular, Java developer focusing on improving and optimizing legacy web applications.',
			achievements: [
				'Migrated Java front-end legacy applications to new technologies as Angular.',
				'Improved workflows regarding control versioning system, migrating the project from svn to git.'
			]
		},
		{
			jobTitle: 'IT Support Specialist',
			startDate: 'Feb 2018',
			endDate: 'Agu 2018',
			employer: 'DANE - Mision Empresarial',
            technologies:'Java, Android',
            description:'Support for Java Android mobile application development to carry out population census',
			city: 'Cali/Colombia',
			achievements: [
				'Optimized the location service in the mobile application.',
				'Improved mobile application response times by fixing some communication bugs with the back.'
			]
		},
		{
			jobTitle: 'Web Developer',
			startDate: 'Feb 2015',
			endDate: 'Jan 2017',
			employer: 'QUIRA SOLUTIONS',
            technologies:'JavaScript, HTML5, CSS, Java',
            description:'Web projects using technologies html5, CSS, JavaScript, Java.',
			city: 'Cali/Colombia',
			achievements: []
		}
	],
	photo:
		''
};

const formatResume = (r) => ({
	...r,
	address: [r.country, r.city, r.postalCode].filter(Boolean).join(', ')
});

new Vue({
	el: '#app',
	data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
	document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
	customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded();

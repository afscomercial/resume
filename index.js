const resume = {
	firstName: 'Andres',
	lastName: 'Salguero',
	jobTitle: 'FULL-STACK JS REACT NODE PYTHON WEB-MOBILE DAPP DEVELOPER',
	city: 'Toronto',
	postalCode: 'M2K3C7',
	country: 'Canada',
	phone: '+1(437)439-5414',
	email: 'andres.felipe.salguero@gmail.com',
	education: [
		{
			school: 'Lambton College',
			degree: 'Certification',
			graduationDate: 'Studying',
			description: 'Artificial Intelligence & Machine Learning'
		},
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
        {name:'React/NextJS', percent:'90%', iconClass:'icon-react'},
        {name:'JavaScript/TypeScript', percent:'90%', iconClass:'icon-js'},
        {name:'NodeJS/NestJS', percent:'90%', iconClass:'icon-nodejs'},
		{name:'Shopify', percent:'90%', iconClass:'icon-html5'},
        {name:'AWS', percent:'70%', iconClass:'icon-ec3'},
		{name:'Angular', percent:'70%', iconClass:'icon-angular'},
		{name:'Solidity', percent:'60%', iconClass:'icon-shell '},
		{name:'GraphQl', percent:'70%', iconClass:'icon-database'},
		{name:'Terraform', percent:'60%', iconClass:'icon-shellscript'},
        {name:'Git', percent:'80%', iconClass:'icon-git'},
		{name:'Python', percent:'50%', iconClass:'icon-python'},
	],
	languages: ['English - C1', 'Spanish - native'],
	professionalSummary: `Coding is my passion, I have programming skills with emphasis on web, mobile and decentralized applications, AI enthusiastic`,
	employmentHistory: [
		{
			jobTitle: 'FullStack Developer',
			startDate: 'November 2023',
			endDate: 'Present',
			employer: 'BlockTec',
			city: 'Remote',
            technologies:'React, Typescript, NextJS, AWS, Git, python, graphQl, terraform',
            description: 'Develop web application to analyze government documents with artificial intelligence',
			achievements: [
				'Server Side Rendering with nextJS with AWS services.',
				'Implemented python script interacting with AWS services and Elasticsearch.',
			]
		},
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

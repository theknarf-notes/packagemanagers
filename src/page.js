import { dom } from 'isomorphic-jsx';

export default ({ children }) => <html>
	<head>
		<title> Notes about package managers </title>
		<style>{`
			body {
				margin-left: auto;
				margin-right: auto;
				margin-top: 150px;
				max-width: 70vw;
				font-size: 16px;
			}
		`}</style>
	</head>
	<body>
	{ children }	
	</body>
</html>;

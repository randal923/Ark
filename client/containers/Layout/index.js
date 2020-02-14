import Head from '../../components/Head';
import Body from './Body';

// Styles
import GlobalStyle from '../../global/styles';

const Layout = ({ children, title, description, url, image }) => (
	<>
		<Head title={title} description={description} url={url} ogImage={image} />
		<Body children={children} />
		<GlobalStyle />
	</>
);

export default Layout;

import Head from '../../components/Head';
import Body from './Body';

const Layout = ({ children, title, description, url, image }) => (
	<>
		<Head title={title} description={description} url={url} ogImage={image} />
		<Body children={children} />
	</>
);

export default Layout;

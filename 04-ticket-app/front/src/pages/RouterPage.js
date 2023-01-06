import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from 'react-router-dom';
import Cola from './Cola';
import Ingresar from './Ingresar';
import Escritorio from './Escritorio';
import CrearTicket from './CrearTicket';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;

function RouterPage() {
	return (
		<Router>
			<Layout style={{ height: '100vh' }}>
				<Sider collapsedWidth={0} breakpoint='md'>
					<div className='logo' />
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
						<Menu.Item key='1' icon={<UserOutlined />}>
							<Link to='/ingresar'>Ingresar</Link>
						</Menu.Item>

						<Menu.Item key='2' icon={<VideoCameraOutlined />}>
							<Link to='/cola'>Cola</Link>
						</Menu.Item>

						<Menu.Item key='3' icon={<UploadOutlined />}>
							<Link to='/crear'>Crear Ticket</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							background: '#DDDDD',
						}}
					>
						<Routes>
							<Route path='cola' element={<Cola />} />
							<Route path='ingresar' element={<Ingresar />} />
							<Route path='crear' element={<CrearTicket />} />
							<Route path='escritorio' element={<Escritorio />} />
							<Route path='*' element={<Navigate to='ingresar' replace />} />
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
}

export default RouterPage;

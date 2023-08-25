import React from 'react';
import { useHideMenu } from '../hooks/useHideMenu';
import { Row, Col, Button, Divider, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Escritorio() {
	useHideMenu(false);

	const leaveDesktop = () => {
		console.log('salir');
	};

	const nextTicket = () => {
		console.log('next ticket');
	};

	return (
		<>
			<Row>
				<Col span={20}>
					<Title level={2}>Pepe</Title>
					<Text>Usted está trabajando en el escritorio: </Text>
					<Text type='success'>2</Text>
				</Col>

				<Col span={4} align='right'>
					<Button type='primary' danger shape='round' onClick={leaveDesktop}>
						<CloseCircleOutlined />
						Salir
					</Button>
				</Col>
			</Row>

			<Divider />
			<Row>
				<Col>
					<Text>Está atendiendo el ticket número: </Text>
					<Text style={{ fontSize: 30 }} type='danger'>
						55
					</Text>
				</Col>
			</Row>

			<Row>
				<Col offset={18} span={6} align='right'>
					<Button type='primary' shape='round' onClick={nextTicket}>
						<RightOutlined />
						Siguiente
					</Button>
				</Col>
			</Row>
		</>
	);
}

export default Escritorio;

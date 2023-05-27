import React from 'react';
import { Row, Col, List, Card, Tag, Typography } from 'antd';

const { Title } = Typography;

function Cola() {
	const data = [
		{
			ticketNo: 33,
			escritorio: 3,
			agente: 'Fernando Herrera',
		},
		{
			ticketNo: 34,
			escritorio: 4,
			agente: 'Melissa Flores',
		},
		{
			ticketNo: 35,
			escritorio: 5,
			agente: 'Carlos Castro',
		},
		{
			ticketNo: 36,
			escritorio: 3,
			agente: 'Fernando Herrera',
		},
		{
			ticketNo: 37,
			escritorio: 3,
			agente: 'Fernando Herrera',
		},
		{
			ticketNo: 38,
			escritorio: 2,
			agente: 'Melissa Flores',
		},
		{
			ticketNo: 39,
			escritorio: 5,
			agente: 'Carlos Castro',
		},
	];

	return (
		<>
			<Title level={1}>Atendiendo el cliente</Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={data.slice(0, 3)}
						renderItem={(item) => (
							<List.Item>
								<Card
									style={{ width: 300, marginTop: 16 }}
									actions={[
										<Tag color='volcano'>{item.agente}</Tag>,
										<Tag color='magenta'>Escritorio: {item.escritorio}</Tag>,
									]}
								>
									<Title>No. {item.ticketNo}</Title>
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={12}></Col>
			</Row>
		</>
	);
}

export default Cola;

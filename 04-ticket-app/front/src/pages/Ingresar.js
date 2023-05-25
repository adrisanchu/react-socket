import React from 'react';
import { Button, Form, Input, InputNumber, Divider, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function Ingresar() {

	const navigate = useNavigate();

	const onFinish = (values) => {
		console.log('Success:', values);

		navigate('/escritorio');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Title level={2}>Ingresar</Title>
			<Text>Ingrese su nombre y número de escritorio</Text>
			<Divider />
			<Form
				name='basic'
				layout='horizontal'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 14 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Nombre del agente'
					name='agent'
					rules={[{ required: true, message: 'Por favor, ingrese su nombre' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Escritorio'
					name='desktop'
					rules={[
						{ required: true, message: 'Ingrese el número de escritorio' },
					]}
				>
					<InputNumber min={1} max={99} />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 14 }}>
					<Button type='primary' htmlType='submit' shape='round'>
						<SaveOutlined /> Ingresar
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}

export default Ingresar;

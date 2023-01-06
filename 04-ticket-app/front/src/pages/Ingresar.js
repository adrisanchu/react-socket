import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

function Ingresar() {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name='basic'
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item
				label='Username'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
				<Button type='primary' htmlType='submit' shape='round'>
					Ingresar
				</Button>
			</Form.Item>
		</Form>
	);
}

export default Ingresar;

import React, {} from 'react';
import { Form, Input,InputNumber,Button,Select } from 'antd';

const EmployeeForm = React.memo(({onFinish, width}) => {


	return (
		<>
		 <h1></h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              label="Firstname"
              name="firstName"
              rules={[{ required: true, message: 'Please input your EmployeeFirstname!' }]}
            >
            <Input />
            </Form.Item>
            <Form.Item
              label="LastName"
              name="lastName"
              rules={[{ required: true, message: 'Please input your EmployeeLastname!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
              label="EmailId"
              name="emailId"
              rules={[{ required: true, message: 'Please input your EmailId!' }]}
            >
            <Input />
            </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
          </Form>
          </>
    )

}
 );
export default EmployeeForm;
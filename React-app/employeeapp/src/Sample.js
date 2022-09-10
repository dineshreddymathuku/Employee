import React,{useEffect,useState} from 'react';

import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import EmployeeService from './services/EmployeeService';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Form} from 'antd';



const Sample = () => {

  useEffect(() => {
});

  const onFinish = (value) =>  {
		EmployeeService.postEmployees(value).then( res => {
		})
  }
  return (
    <div
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h1 className='text-align: center;'>Employee Details</h1>
         <EmployeeForm onFinish={onFinish} width={100} />
         <EmployeeTable />
        </div>
  )
};

export default Sample;
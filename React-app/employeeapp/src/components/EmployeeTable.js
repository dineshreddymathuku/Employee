import { Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import EmployeeService from './../services/EmployeeService';

const EmployeeTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
		getEmployees();
	},[]);

	const getEmployees = () => {
		EmployeeService.getAllEmployees().then( res => {
			setData(res.data);
		})
    }


    const columns = [
        {
            title: 'Empid',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'FirstName',
          dataIndex: 'firstName',
          key: 'firstName',
          render: (text) => <a>{text}</a>,
        },

        {
          title: 'LastName',
          dataIndex: 'lastName',
          key: 'lastName',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'emailId',
          dataIndex: 'emailId',
          key: 'emailId',
          render: (text) => <a>{text}</a>,
        },

        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>update {record.name}</a>
              <a >Delete</a>
            </Space>
          ),
        },
      ];


return (<Table columns={columns} dataSource={data} />)
};

export default EmployeeTable;
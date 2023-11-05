'use client';

import React, { useMemo, useState } from 'react';
import { Avatar, Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDeleteMedicalSpecialty } from '../../_hooks/use-delete-medical-specialty';
import MedicalSpecialtyModal from '../modal/medical-specialty';
import { useUpdateMedicalSpecialty } from '../../_hooks/use-update-medical-specialty';

const MedicalSpecialtyList = ({ data }) => {
  const { isPending: isSubmitting, mutate: updateMedicalSpecialty } =
    useUpdateMedicalSpecialty();
  const { mutate: deleteMedicalSpecialty } = useDeleteMedicalSpecialty();
  const [editId, setEditId] = useState('');

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record) => (
        <Avatar src={record.avatar?.path} size="default" shape="circle" />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        return (
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              onClick={deleteMedicalSpecialtyHandler(record._id)}
            >
              Xóa
            </Button>
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => setEditId(record._id)}
            >
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];

  const editData = useMemo(() => {
    return data.find((v) => v._id === editId);
  }, [data, editId]);

  function deleteMedicalSpecialtyHandler(id) {
    return () => {
      deleteMedicalSpecialty(id);
    };
  }

  function editMedicalSpecialtyHandler(id, data) {
    updateMedicalSpecialty(
      { id, data },
      {
        onSuccess: () => {
          setEditId('');
        },
      },
    );
  }

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
      <MedicalSpecialtyModal
        isOpen={Boolean(editId)}
        isSubmitting={isSubmitting}
        data={editData}
        onSubmit={editMedicalSpecialtyHandler}
        onCancel={() => setEditId('')}
      />
    </>
  );
};

export default MedicalSpecialtyList;

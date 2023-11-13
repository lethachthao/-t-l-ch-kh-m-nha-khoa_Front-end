import { Button, Col, Form, Input, Modal, Row, Spin } from 'antd';
import dynamic from 'next/dynamic';
// BillTemplate not support lazyloading
import BillTemplate from './bill-template';
import { useState } from 'react';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';

const PDFViewer = dynamic(
  async () => {
    const { PDFViewer: PDFViewerBase } = await import('@react-pdf/renderer');
    return PDFViewerBase;
  },
  { ssr: false },
);

const BillModal = ({
  isOpen,
  bookingData,
  onCancel,
  isSubmitting,
  onSubmit,
}) => {
  const [otherInformation, setOtherInformation] = useState(null);

  const applyHandler = (values) => {
    setOtherInformation(values);
  };

  const renderBillTemplate = (
    <BillTemplate
      bookingData={bookingData}
      otherInformation={otherInformation}
    />
  );

  const sendBillHandler = async () => {
    const formData = new FormData();
    const pdfBlob = await pdf(renderBillTemplate).toBlob();

    formData.append('bookingId', bookingData._id);
    formData.append('pdf', pdfBlob);

    onSubmit?.(formData);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      centered
      title="Xác nhận đơn khám"
      footer={null}
      destroyOnClose
    >
      <Spin spinning={isSubmitting}>
        <div className="flex flex-col gap-4">
          <div>
            <Form name="helper_form" layout="vertical" onFinish={applyHandler}>
              <Form.Item label="Đơn thuốc" name="prescription">
                <Input.TextArea placeholder="Đơn thuốc" />
              </Form.Item>

              <Form.Item label="Chỉ dẫn" name="instruction">
                <Input.TextArea placeholder="Chỉ dẫn bác sĩ" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" block htmlType="submit">
                  Áp dụng
                </Button>
              </Form.Item>
            </Form>
          </div>
          <PDFViewer
            style={{ width: '100%', height: '100vh' }}
            showToolbar={false}
          >
            {renderBillTemplate}
          </PDFViewer>

          <div>
            <Row gutter={10}>
              <Col span={12}>
                <PDFDownloadLink
                  document={renderBillTemplate}
                  fileName={`bill_${bookingData?._id}.pdf`}
                >
                  {({ blob, url, loading, error }) => (
                    <Button type="primary" block loading={loading}>
                      {!loading ? 'Xuất hóa đơn' : 'Đang xuất hóa đơn'}
                    </Button>
                  )}
                </PDFDownloadLink>
              </Col>
              <Col span={12}>
                <Button type="primary" block onClick={sendBillHandler}>
                  Gửi hóa đơn
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export default BillModal;

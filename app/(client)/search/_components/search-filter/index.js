import { Checkbox, Col, Row, Typography } from 'antd';

const { Title } = Typography;

const SearchFilter = ({ defaultControlType, onFilter }) => {
  return (
    <div className="flex flex-col w-80">
      <div>
        <Title level={3} className="!text-lg !mb-4">
          Lọc kết quả tìm kiếm
        </Title>
      </div>

      <div>
        <Checkbox.Group
          style={{
            width: '100%',
          }}
          defaultValue={defaultControlType}
          onChange={onFilter}
        >
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <Checkbox value="specialist">Chuyên khoa</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="doctor">Bác sĩ</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default SearchFilter;
//cai do em nghi len de chon anh a lo dau nguoi ta ko muon chon nua a anh

/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { memo } from 'react';
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: '15px',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },

  text: {
    margin: '10px',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    marginTop: '10px',
  },

  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#DDDDDD',
  },
});

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
});

function BillTemplate({ bookingData, otherInformation }) {
  const {
    _id,
    name,
    date,
    startTime,
    endTime,
    address,
    birthday,
    email,
    gender,
    payment,
    doctorId,
  } = bookingData;

  const { prescription, instruction } = otherInformation || {};

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.title}>
          <Text>Hóa đơn khám bệnh</Text>
        </View>

        <View>
          <Text style={styles.text}>Mã hóa đơn: {_id}</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Ngày khám: {moment(date).format('DD/MM/YYYY')}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>
            Thời gian khám: {startTime} - {endTime}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>Tên bệnh nhân: {name}</Text>
        </View>

        <View>
          <Text style={styles.text}>Ngày sinh: {birthday}</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Giới tính: {gender === 'male' ? 'Nam' : 'Nữ'}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>Địa chỉ email: {email}</Text>
        </View>

        <View>
          <Text style={styles.text}>Địa chỉ: {address}</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Phương thức thanh toán:{' '}
            {Number(payment) === 1
              ? 'Thanh toán trực tiếp'
              : 'Thanh toán ngân hàng'}
          </Text>
        </View>

        <View style={styles.divider}></View>

        <View>
          <Text style={styles.text}>Đơn thuốc: {prescription || 'Trống'}</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Chỉ dẫn của bác sĩ: {instruction || 'Trống'}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>Bác sĩ: {doctorId.name}</Text>
        </View>

        <View>
          <Text style={styles.text}>{moment().format('dddd, DD/MM/YYYY')}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default BillTemplate;

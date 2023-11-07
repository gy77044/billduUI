import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { labelList } from '../LabelwithValue/LabelList';
import LabelwithValue from '../LabelwithValue/LabelwithValue';

const InvoiceFormWrapper = () => {
  const isInvData = useSelector(state => state.billdu.isInvData);
  const [listData, setListData] = useState(labelList);

  useEffect(() => {
    if (isInvData) {
      const updatedListData = labelList.map(item => {
        const fieldName = item.name.toLowerCase();
        const updatedValue = isInvData[fieldName] !== undefined ? isInvData[fieldName] : item.value;
        return { ...item, value: updatedValue };
      });
      setListData(updatedListData);
    }
  }, [isInvData]);

  return (
    <>
      {listData.map((list, index) => {
        return (
          <div key={index}>
            <LabelwithValue label={list.name} value={list.value} />
          </div>
        );
      })}
    </>
  );
};

export default InvoiceFormWrapper;

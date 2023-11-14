import { useMemo, useState } from 'react';

export const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const useUploadManual = ({ maxCount = 1 }) => {
  const [fileList, setFileList] = useState([]);

  const getUploadProps = useMemo(
    () => ({
      onRemove: (file) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
      },

      beforeUpload: (file) => {
        setFileList([file]);
        return false;
      },
      maxCount,
      fileList,
    }),
    [fileList, maxCount],
  );

  return {
    fileList,
    getUploadProps,
  };
};

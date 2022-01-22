import toast from 'react-hot-toast';

export const warningNotification = text => {
  toast.success(text, {
    style: {
      border: '1px solid #4f95da',
      padding: '16px',
      color: '#4f95da',
    },
    iconTheme: {
      primary: '#4f95da',
      secondary: '#FFFAEE',
    },
  });
};

export const successNotification = text => {
  toast.success(text, {
    style: {
      border: '1px solid #4f95da',
      padding: '16px',
      color: '#4f95da',
    },
    iconTheme: {
      primary: '#4f95da',
      secondary: '#FFFAEE',
    },
  });
};

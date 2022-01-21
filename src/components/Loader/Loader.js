import { Oval, BallTriangle } from 'react-loader-spinner';

export const LoaderOval = () => {
  return (
    <Oval
      heigth="100"
      width="100"
      color="grey"
      secondaryColor="#4f95da"
      ariaLabel="loading"
      radius="1"
    />
  );
};

export const LoaderTriangle = () => {
  return <BallTriangle heigth="20" width="20" color="#4f95da" />;
};

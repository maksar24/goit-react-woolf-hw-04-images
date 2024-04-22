import { CustomButton } from './Button.styles';

const Button = ({ children, action }) => {
  return <CustomButton onClick={action}>{children}</CustomButton>;
};

export default Button;

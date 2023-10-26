import React from 'react';

interface LoginButtonProps {
  name: string;
  iconPath: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ name, iconPath }) => {
  return (
    <button type="button" className="btn lg">
      <span><img src={iconPath} alt={name} width={30} /></span>
      Login with <b>{name}</b>
    </button>
  );
};

export default LoginButton;

import React from 'react';

interface AppInputProps {
  label: string;
  type: string;
  value: string;
  iconPath: string;
}

const AppInput: React.FC<AppInputProps> = ({ type, label, value, iconPath }) => {
  return (
    <div className='input-container'>
      {value.length === 0 && <img src={iconPath} alt={label} />}
      <input
        value={value}
        type={type}
        name={label}
        id={label}
        placeholder={label}
      />
    </div>
  );
};

export default AppInput;

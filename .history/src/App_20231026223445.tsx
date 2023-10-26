import React, { useState } from 'react';
import './App.css';

import AppInput from './Components/Form/AppInput';
import LoginButton from './Components/Form/LoginButton';
import WelcomeText from './Components/WelcomeText';
import RightImage from './Components/RightImage';
import Pass from '../src/img/icons/pass.svg';
import Person from '../src/img/icons/person.svg';

interface InputInfo {
  label: string;
  type: string;
  value: string;
  iconPath: string;
}

interface LoginButtonInfo {
  name: string;
  iconPath: string;
}

const App: React.FC = () => {
  const [info] = useState<InputInfo[]>([
    {
      label: "Username",
      type: "text",
      value: "",
      iconPath: Person,
    },
    {
      label: "Password",
      type: "password",
      value: "",
      iconPath: Pass,
    }
  ]);

  const lgButtons: LoginButtonInfo[] = [
    {
      name: "Google",
      iconPath: "https://img.icons8.com/color/48/000000/google-logo.png",
    },
    {
      name: "Facebook",
      iconPath: "https://img.icons8.com/color/48/000000/facebook-new.png",
    },
  ];

  return (
    <div className="app">
      <div className="left">
        <WelcomeText />

        {info.map((input, i) => (
          <AppInput
            key={i}
            type={input.type}
            label={input.label}
            value={input.value}
            iconPath={input.iconPath}
          />
        ))}

        <button type="submit" className="btn submit">Next</button>

        <div className="hr">
          <div className="hr-text"><b>Login</b> with Others</div>
        </div>

        {lgButtons.map((btn, i) => (
          <LoginButton key={i} name={btn.name} iconPath={btn.iconPath} />
        ))}
      </div>

      <RightImage />
    </div>
  );
};

export default App;

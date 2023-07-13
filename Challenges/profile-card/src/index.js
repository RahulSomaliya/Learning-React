import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className='avatar'
      src='https://picsum.photos/200/100'
      alt='Rahul Somaliya'
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Rahul Somaliya</h1>
      <p>
        Junior frontend web developer working with React. When not coding, I
        like to workout, read financal news, or to just enjoy a good audiobook.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='Vue' emoji='🥳' color='#42b883' />
      <Skill skill='React' emoji='🤗' color='#149eca' />
      <Skill skill='HTML+CSS' emoji='🙃' color='#2862e9' />
      <Skill skill='Javascript' emoji='💪🏻' color='#efd81d' />
      <Skill skill='Git and GitHub' emoji='🙂' color='#e84d31' />
    </div>
  );
}

function Skill(props) {
  const { skill = 'not defined', emoji, color } = props;
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

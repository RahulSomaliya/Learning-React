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

const skills = [
  {
    skill: 'Vue',
    level: 'intermediate',
    color: '#42b883',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: '#149eca',
  },
  {
    skill: 'HTML and CSS',
    level: 'intermediate',
    color: '#2862e9',
  },
  {
    skill: 'Javascript',
    level: 'advanced',
    color: '#efd81d',
  },
  {
    skill: 'Git and Github',
    level: 'intermediate',
    color: '#e84d31',
  },
];

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map(eachSkill => {
        return <Skill details={eachSkill} />;
      })}
    </div>
  );
}

function Skill({ details }) {
  const { skill, level, color } = details;

  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶🏻'}
        {level === 'intermediate' && '👍🏻'}
        {level === 'advanced' && '💪🏻'}
      </span>
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

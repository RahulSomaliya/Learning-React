import { useState } from 'react';
import './index.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion'>
      {data.map((element, index) => {
        const { title, text } = element;
        return (
          <AccordianItem
            title={title}
            num={index}
            key={index}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {text}
          </AccordianItem>
        );
      })}

      <AccordianItem
        title='Thinking in React'
        num={22}
        key='test 1'
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>Allows Rects developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reuseable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ children, num, title, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(curOpen === num ? null : num);
  }

  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}
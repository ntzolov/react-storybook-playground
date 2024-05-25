import { useRef, useState } from 'react';
import './Accordion.css';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export type AccordionData = {
  title: string;
  content: string;
};

export default function Accordion({ dataArray }: { dataArray: AccordionData[] }) {
  return (
    <div className='accordion-section'>
      {Array.isArray(dataArray) &&
        dataArray.map((d) => <AccordionItem title={d.title} content={d.content} />)}
    </div>
  );
}

export function AccordionItem({ title, content }: AccordionData) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <div className='accordion-item'>
      <div
        className={classNames('accordion-title', { active: isActive })}
        role='button'
        onClick={() => setIsActive(!isActive)}>
        <div className='title'>{title}</div>
        <div className='icon'>{isActive ? <BsChevronDown /> : <BsChevronUp />}</div>
      </div>
      <div
        ref={contentEl}
        className={classNames('accordion-content', { active: isActive })}
        style={{
          height: isActive ? contentEl.current?.scrollHeight : '0px',
        }}>
        {content}
      </div>
    </div>
  );
}

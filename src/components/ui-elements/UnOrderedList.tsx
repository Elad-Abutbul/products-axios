import React from 'react';

interface UnOrderedListItem {
  label?: string;
  value?: string | number;
  extraProps?: React.LiHTMLAttributes<HTMLLIElement>;
}

interface UnOrderedListProps {
  id?: string;
  className?: string;
  items: UnOrderedListItem[];
}

const UnOrderedList: React.FC<UnOrderedListProps> = ({ id, className, items }) => {
  return (
    <ul id={id} className={className || "default-list-class"}>
      {items.map((item, index) => (
        <li key={index} {...(item.extraProps || {})}>
          <strong>{item.label} </strong>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default UnOrderedList;

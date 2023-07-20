import { Children } from 'react';
import './primaryHeadline.css';

export const PrimaryHeading = ({ children }) => {
  return (
    <div>
      <h1 className="primary_headline">{children}</h1>
      <div className="primary_headline_stroke">{children}</div>
    </div>
  );
};

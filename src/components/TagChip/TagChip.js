import React, { createElement } from 'react';
import * as DI from 'react-icons/di';
import * as SI from 'react-icons/si';
import { tags } from '../../constants/tags';

const TagChip = ({ name, icon }) => {
  const tagIcon = icon[0] === 'd' ? DI[icon] : SI[icon];

  return (
    <span style={{ marginRight: '0.8em', verticalAlign: 'middle' }}>
      {tagIcon ? React.createElement(tagIcon, {style: {verticalAlign: 'sub'}}) : ''}{' '} <>
      {Object.keys(tags).find((key) => tags[key] === icon)} </>
    </span>
  );
};

export default TagChip;

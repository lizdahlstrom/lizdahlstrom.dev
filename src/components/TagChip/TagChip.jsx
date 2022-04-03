import React from 'react';
import * as DI from 'react-icons/di';
import * as SI from 'react-icons/si';
import tags from '../../constants/tags';

function TagChip({ icon }) {
  const iconType = icon || 'DiCode';
  const tagIcon = iconType[0] === 'd' ? DI[iconType] : SI[iconType];

  return (
    <span style={{ marginRight: '0.8em', verticalAlign: 'middle' }}>
      {tagIcon ? React.createElement(tagIcon, { style: { verticalAlign: 'sub' } }) : ''}
      {' '}
      {' '}
      {Object.keys(tags).find((key) => tags[key] === icon)}
    </span>
  );
}

export default TagChip;
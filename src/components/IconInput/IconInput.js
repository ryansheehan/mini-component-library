import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    height: '1.125rem',
    fontSize: '0.875rem',
    underlineSize: '1px',
  },
  large: {
    iconSize: 24,
    height: '1.25rem',
    fontSize: '1.125rem',
    underlineSize: '2px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const config = STYLES[size];

  return (
    <Wrapper style={{
      '--width': `${width}px`,      
      '--borderSize': config.underlineSize,
    }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} size={config.iconSize} strokeWidth={2} />
      <Input placeholder={placeholder} style={{
        '--height': config.height,
        '--fontSize': config.fontSize,
      }} />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  display: block;  
  border-bottom: var(--borderSize) solid ${COLORS.Black};
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  gap: 8px;
  width: var(--width);
  font-family: 'Roboto';  
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-style:  solid;
    outline-width:  2px;
    outline-color: ${COLORS.black};
    outline-offset: 4px;
  }
`;

const Input = styled.input`  
  height: var(--height);
  font-size: var(--fontSize);
  border: none;
  width: 100%;
  font-weight: 600;

  &:placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;  
  }
`;

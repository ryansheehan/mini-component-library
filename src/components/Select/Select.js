import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>{children}</HiddenSelect>
      <SelectDisplay>
        <span>{displayedValue}</span>
        <Icon id="chevron-down" strokeWidth={2} size={24} />
      </SelectDisplay>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectDisplay = styled.div`  
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 16px;
  border-radius: 8px;
  font-size: 1em;
  pointer-events: none;

  &:hover {
    color: ${COLORS.black};
    cursor: pointer;
  }
`;


export default Select;

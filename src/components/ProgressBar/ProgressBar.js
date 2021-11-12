/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const Empty = size === 'small' ? EmptySmall : size === 'medium' ? EmptyMedium : EmptyLarge;

  return (
    <Empty role="progressBar" aria-valuenow={value} aria-valuemax="100" aria-valuemin="0">
      <VisuallyHidden>{value}%</VisuallyHidden>
      <FillBar value={value} />      
    </Empty>
  );
};

const EmptyBase = styled.div`
  width: 100%;
  height: 8px;
  position: relative;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const EmptySmall = styled(EmptyBase)``;

const EmptyMedium = styled(EmptyBase)`
  height: 12px;
`;

const EmptyLarge = styled(EmptyBase)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const FillBar = styled.div`    
  height: 100%;
  width: ${({value}) => `${value}%`};
  border-radius: ${({value}) => value <= 98 ? '4px 0px 0px 4px' : '4px'};
  background-color: ${COLORS.primary};
`;



export default ProgressBar;

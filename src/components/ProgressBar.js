import React from 'react'
import styled from 'styled-components';

const ProgressBar = ({lessons}) => {

    const unlockedLessons = lessons.filter((lesson) => lesson.status === 'unlocked');
    const percentage = Math.floor((unlockedLessons.length / lessons.length) * 100);

    return (
        <Wrapper>
            <Bar percentage={percentage}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 15px;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Bar = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  border-radius: 15px;
  background-color: #57b846;
  transition: width 0.5s ease-in-out;
`;

export default ProgressBar;

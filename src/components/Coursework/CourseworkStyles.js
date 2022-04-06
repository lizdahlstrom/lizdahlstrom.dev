import styled from 'styled-components';

export const CourseListContainer = styled.div`
max-width: 800px;
font-size: 20px;
line-height: 40px;
font-weight: 300;
padding-bottom: 3.6rem;
color: rgba(255, 255, 255, 0.5);

@media ${(props) => props.theme.breakpoints.md} {
  max-width: 670px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 24px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
`;

export const CourseList = styled.ul`

`;

export const CourseListItem = styled.li`
  list-style: none;
  &::before {
    content: ">";
    color: #eaac8b;
    font-weight: bold;
    display: inline-block;
    width: 1em; 
    margin-left: -0.5em;
  }
`;

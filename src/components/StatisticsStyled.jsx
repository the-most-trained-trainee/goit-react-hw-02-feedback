import styled from 'styled-components';

const StyledStatistics = styled.div`
  width: 100%;
  & li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  };
  & ul {
    padding: 0;
    li:last-child {
      margin-top: 10px;
      font-weight: 700;
    }
  }
`;

export default StyledStatistics;

import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 900,
  laptopMax: 1300,
}
const QUERIES = {
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax}px)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}px)`,
}

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndDown} {
    background-color: black;
  }
`;

export default App;

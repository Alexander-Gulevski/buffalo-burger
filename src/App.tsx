import styled from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
const App = () => {
  return (
      <div>
        <Container>
            <Header/>
            <Main/>
        </Container>
      </div>
  );
};
const Container = styled.div`
  padding: 30px 46px;
`;

export default App;





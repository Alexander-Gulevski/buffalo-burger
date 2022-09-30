import styled from 'styled-components';
import Header from './components/Header/Header';
const App = () => {
  return (
      <div>
        <Container>
            <Header/>
        </Container>
      </div>
  );
};
const Container = styled.div`
  padding: 30px 30px;
`;

export default App;





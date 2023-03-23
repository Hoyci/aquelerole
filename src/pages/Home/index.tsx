import { useState } from 'react';
import SelectInput from '../../components/Select';
import { Container, Content, Header, Subtitle, Title } from './styles';
import { capitals } from '../../utils/capitals';

export default function Home() {
  const [search, setSearch] = useState('');
  const filteredOptions = capitals.filter(({ text }) =>
    text.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <Container>
      <Content>
        <Header>
          <Title>Bem-vindo(a) ao Aquele Rolé.</Title>
          <Subtitle>
            Selecione sua cidade para encontrar os eventos culturais que estão
            acontecendo perto de você.
          </Subtitle>
        </Header>
        <SelectInput
          search={search}
          setSearch={setSearch}
          options={filteredOptions}
        />
      </Content>
    </Container>
  );
}

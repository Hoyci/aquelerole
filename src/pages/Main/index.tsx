import { useParams } from 'react-router-dom';
import { capitals } from '../../utils/capitals';

export default function Main() {
  const { city } = useParams();
  const cityExists = capitals.some(({ value }) => value === city);

  if (!cityExists) {
    throw new Error('cidade não encontrada!');
  }

  return <h1>city: {city}</h1>;
}

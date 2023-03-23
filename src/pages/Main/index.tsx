import { useParams } from 'react-router-dom';

export default function Main() {
  const { city } = useParams();

  return <h1>city: {city}</h1>;
}

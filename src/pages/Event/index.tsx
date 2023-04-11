import { useParams } from 'react-router-dom';

const eventsType = ['museum', 'music', 'open'];

export default function Event() {
  const { eventType } = useParams();
  const eventExists = eventsType.some((event) => event === eventType);

  if (!eventExists) {
    throw new Error('evento não encontrado!');
  }

  return <h1>{eventType}</h1>;
}

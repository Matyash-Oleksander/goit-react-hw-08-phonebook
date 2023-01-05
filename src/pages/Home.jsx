import { Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Message>Contacts home page</Message>
    </main>
  );
}

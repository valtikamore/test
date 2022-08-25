//components
import { Card, Title } from 'components';
//styles
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.main}>
      <Title classname={styles.title}>
        <>
          Let`s plan your <span>saving goal.</span>
        </>
      </Title>
      <Card />
    </main>
  );
};

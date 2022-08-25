//components
import { Image, Title, Typography } from 'components';
//utils
import { ImageTypes } from 'utils/constants';
//styles
import styles from './cardHeader.module.scss';

export const CardHeader = () => {
  return (
    <div className={styles.header}>
      <Image type={ImageTypes.house} />
      <div className={styles.wrapper}>
        <Title classname={styles.title}>Bue a house</Title>
        <Typography classname={styles.subtitle}>Saving goal</Typography>
      </div>
    </div>
  );
};

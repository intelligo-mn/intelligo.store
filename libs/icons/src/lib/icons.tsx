import styles from './icons.module.css';

/* eslint-disable-next-line */
export interface IconsProps {}

export function Icons(props: IconsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Icons!</h1>
    </div>
  );
}

export default Icons;

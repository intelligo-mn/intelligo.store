import styles from './chart.module.css';

/* eslint-disable-next-line */
export interface ChartProps {}

export function Chart(props: ChartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Chart!</h1>
    </div>
  );
}

export default Chart;

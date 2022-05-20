import styles from './spinner.module.css';
import cn from 'classnames';

interface Props {
  className?: string;
  text?: string;
  showText?: boolean;
  simple?: boolean;
}

const Spinner = (props: Props) => {
  const { className, showText = true, text = 'Loading', simple } = props;
  return (
    <>
      {simple ? (
        <span className={cn(className, styles.simple_loading)} />
      ) : (
        <span
          className={cn(
            'w-full flex flex-col items-center justify-center h-screen',
            className
          )}
        >
          <span className={styles.loading} />

          {showText && (
            <h3 className="text-lg font-semibold text-body italic">{text}</h3>
          )}
        </span>
      )}
    </>
  );
};

export default Spinner;

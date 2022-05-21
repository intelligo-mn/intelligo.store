import styles from "./loader.module.css";
import cn from "classnames";

interface Props {
  className?: string;
  text?: string;
  showText?: boolean;
  simple?: boolean;
}

const Loader = (props: Props) => {
  const { className, showText = true, text = "Loading...", simple } = props;
  return (
    <>
      {simple ? (
        <div className={cn(className, styles.simple_loading)} />
      ) : (
        <div
          className={cn(
            "w-full flex flex-col items-center justify-center",
            className
          )}
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className={styles.loading} />

          {showText && (
            <h3 className="text-lg font-semibold text-body italic">{text}</h3>
          )}
        </div>
      )}
    </>
  );
};

export default Loader;

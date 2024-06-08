import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles['error-page']}>
      <div className={`${styles['error-content']} container`}>
        <p className={`${styles['error-icon']}`}><i className="fa-solid fa-triangle-exclamation"></i></p>
        <h1 className={styles['error-heading']}>Oops! Something went wrong.</h1>
        <p className={styles['error-message']}>
            {`We're sorry, but it seems there was an error. Please try again later.`}
        </p>
      </div>
    </div>
  );
};

export default Error;

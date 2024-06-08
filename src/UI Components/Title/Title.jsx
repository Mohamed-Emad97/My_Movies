import styles from "./Title.module.scss";

const Title = (props) => {

  const {txt} = props;

  return (
    <>
        <div className="mainHeading my-4 text-white">
            <h2 className={styles.txt}>{txt}</h2>
        </div>
    </>
  )
}

export default Title;
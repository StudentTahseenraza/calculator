import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "0",
    ".",
  ];
  
  return (
    <div className={styles.buttonContainer}>
      {buttonsName.map((buttonName) => (
        <button key={buttonName} className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

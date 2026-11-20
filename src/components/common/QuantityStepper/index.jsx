import styles from "./QuantityStepper.module.css";

export default function QuantityStepper({
  value,
  onChange,
  min = 0,
  max = 99,
  small,
}) {
  return (
    <div className={`${styles.stepper} ${small ? styles.small : ""}`}>
      <button
        className={styles.button}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className={styles.value}>{value}</span>

      <button
        className={styles.button}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

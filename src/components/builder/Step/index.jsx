import Icon from "../../common/Icon";
import { TEXT } from "../../../constants";
import styles from "./Step.module.css";

export default function Step({
  stepNumber,
  totalSteps,
  title,
  icon,
  isOpen,
  selectedCount,
  nextTitle,
  onToggle,
  onNext,
  children,
}) {
  return (
    <section className={`${styles.step} ${isOpen ? styles.open : ""}`}>
      <p className={styles.label}>{TEXT.stepLabel(stepNumber, totalSteps)}</p>

      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <Icon name={icon} />
        <span className={styles.title}>{title}</span>

        {isOpen && selectedCount > 0 && (
          <span className={styles.count}>{TEXT.selected(selectedCount)}</span>
        )}

        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>
          <Icon name="chevron" size={16} />
        </span>
      </button>

      {isOpen && (
        <div className={styles.body}>
          {children}

          {nextTitle && (
            <button className={styles.next} onClick={onNext}>
              {TEXT.next(nextTitle)}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

import styles from "./ReviewGroup.module.css";

export default function ReviewGroup({ label, children }) {
  return (
    <section className={styles.group}>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
}

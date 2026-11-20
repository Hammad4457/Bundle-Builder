import styles from "./Badge.module.css";

export default function Badge({ text }) {
  if (!text) return null;
  return <span className={styles.badge}>{text}</span>;
}

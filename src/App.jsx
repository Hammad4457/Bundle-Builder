import Builder from "./components/builder";
import ReviewPanel from "./components/review/ReviewPanel";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Let's get started!</h1>

      <div className={styles.layout}>
        <Builder />
        <ReviewPanel />
      </div>
    </main>
  );
}

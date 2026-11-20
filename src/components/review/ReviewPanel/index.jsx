import { useBundle } from "../../../context/useBundle";
import { TEXT } from "../../../constants";
import ReviewGroup from "../ReviewGroup";
import ReviewLine from "../ReviewLine";
import ShippingRow from "../ShippingRow";
import Totals from "../Totals";
import styles from "./ReviewPanel.module.css";

export default function ReviewPanel() {
  const { bundle, reviewGroups, totals, setQuantity, saveSystem } =
    useBundle();

  return (
    <aside className={styles.panel}>
      <div>
        <p className={styles.eyebrow}>{TEXT.review}</p>
        <h2 className={styles.title}>{TEXT.reviewTitle}</h2>
        <p className={styles.subtitle}>{TEXT.reviewSubtitle}</p>

        {reviewGroups.map((group) => (
          <ReviewGroup key={group.id} label={group.label}>
            {group.lines.map((line) => (
              <ReviewLine
                key={line.key}
                line={line}
                onQtyChange={(qty) => setQuantity(line.key, qty)}
              />
            ))}
          </ReviewGroup>
        ))}

        <ShippingRow shipping={bundle.shipping} />
      </div>

      <div className={styles.checkout}>
        <Totals totals={totals} guarantee={bundle.guarantee} />

        <button className={styles.save} onClick={saveSystem}>
          {TEXT.saveForLater}
        </button>
      </div>
    </aside>
  );
}

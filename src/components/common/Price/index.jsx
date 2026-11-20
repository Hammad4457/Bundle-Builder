import { formatPrice } from "../../../utils/format";
import styles from "./Price.module.css";

export default function Price({ price, oldPrice, monthly, highlight }) {
  const suffix = monthly ? "/mo" : "";
  const showOld = oldPrice > price;

  return (
    <span className={`${styles.price} ${highlight ? styles.highlight : ""}`}>
      {showOld && (
        <s className={styles.old}>
          {formatPrice(oldPrice)}
          {suffix}
        </s>
      )}
      <span className={styles.current}>
        {formatPrice(price)}
        {price > 0 && suffix}
      </span>
    </span>
  );
}

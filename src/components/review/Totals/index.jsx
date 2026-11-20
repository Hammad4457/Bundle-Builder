import { useState } from "react";
import { TEXT } from "../../../constants";
import { formatPrice } from "../../../utils/format";
import GuaranteeSeal from "../GuaranteeSeal";
import styles from "./Totals.module.css";

export default function Totals({ totals, guarantee }) {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.totals}>
      <div className={styles.top}>
        <div className={styles.guarantee}>
          <GuaranteeSeal />
          <div className={styles.guaranteeText}>
            <p className={styles.guaranteeTitle}>{guarantee.title}</p>
            <p className={styles.guaranteeBody}>{guarantee.body}</p>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.financing}>
            as low as {formatPrice(totals.monthly)}/mo
          </span>
          <span className={styles.amounts}>
            {totals.oldTotal > totals.total && (
              <s className={styles.oldTotal}>{formatPrice(totals.oldTotal)}</s>
            )}
            <strong className={styles.total}>
              {formatPrice(totals.total)}
            </strong>
          </span>
        </div>
      </div>

      {totals.savings > 0 && (
        <p className={styles.savings}>
          Congrats! You're saving {formatPrice(totals.savings)} on your security
          bundle!
        </p>
      )}

      <button
        className={styles.checkout}
        onClick={() =>
          setMessage("Checkout is not available in this prototype.")
        }
      >
        {TEXT.checkout}
      </button>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

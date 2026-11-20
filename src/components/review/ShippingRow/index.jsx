import Icon from "../../common/Icon";
import Price from "../../common/Price";
import styles from "./ShippingRow.module.css";

export default function ShippingRow({ shipping }) {
  return (
    <div className={styles.row}>
      <span className={styles.icon}>
        <Icon name={shipping.icon} size={22} />
      </span>
      <span className={styles.label}>{shipping.label}</span>
      <Price
        highlight
        price={shipping.price}
        oldPrice={shipping.compareAtPrice}
      />
    </div>
  );
}

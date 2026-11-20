import Price from "../../common/Price";
import QuantityStepper from "../../common/QuantityStepper";
import styles from "./ReviewLine.module.css";

export default function ReviewLine({ line, onQtyChange }) {
  const { product, variant, qty } = line;
  const image = variant?.image || product.image;
  const oldPrice = product.compareAtPrice ? product.compareAtPrice * qty : null;

  return (
    <li className={styles.line}>
      <img src={image} alt={variant?.label || ""} className={styles.thumb} />

      <span className={styles.name}>
        {product.name} {product.nameSuffix}
      </span>

      {product.showReviewStepper !== false && (
        <QuantityStepper
          small
          value={qty}
          onChange={onQtyChange}
          min={product.minQty}
          max={product.maxQty}
        />
      )}

      <Price
        highlight
        price={product.price * qty}
        oldPrice={oldPrice}
        monthly={product.billing === "monthly"}
      />
    </li>
  );
}

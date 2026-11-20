import Badge from "../../common/Badge";
import Price from "../../common/Price";
import QuantityStepper from "../../common/QuantityStepper";
import VariantChips from "../VariantChips";
import { TEXT } from "../../../constants";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  product,
  activeVariant,
  qty,
  isSelected,
  onSelectVariant,
  onQtyChange,
}) {
  const variant = product.variants.find((v) => v.id === activeVariant);
  const image = variant?.image || product.image;

  return (
    <article className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.badge}>
        <Badge text={product.badge} />
      </div>

      <img src={image} alt={product.name} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>

        <p className={styles.description}>
          {product.description}{" "}
          <a href={product.learnMoreUrl} target="_blank" rel="noreferrer">
            {TEXT.learnMore}
          </a>
        </p>

        <VariantChips
          variants={product.variants}
          activeId={activeVariant}
          onSelect={onSelectVariant}
        />

        <div className={styles.footer}>
          <QuantityStepper
            small
            value={qty}
            onChange={onQtyChange}
            min={product.minQty}
            max={product.maxQty}
          />
          <Price
            price={product.price}
            oldPrice={product.compareAtPrice}
            monthly={product.billing === "monthly"}
          />
        </div>
      </div>
    </article>
  );
}

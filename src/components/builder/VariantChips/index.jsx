import styles from "./VariantChips.module.css";

export default function VariantChips({ variants, activeId, onSelect }) {
  if (variants.length === 0) return null;

  return (
    <div className={styles.chips}>
      {variants.map((variant) => (
        <button
          key={variant.id}
          className={`${styles.chip} ${variant.id === activeId ? styles.active : ""}`}
          onClick={() => onSelect(variant.id)}
        >
          <img src={variant.image} alt="" className={styles.swatch} />
          {variant.label}
        </button>
      ))}
    </div>
  );
}

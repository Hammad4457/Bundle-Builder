import { useBundle } from "../../context/useBundle";
import {
  getKey,
  getActiveVariant,
  getQty,
  getProductQty,
  getSelectedCount,
} from "../../utils/cart";
import Step from "./Step";
import ProductCard from "./ProductCard";
import styles from "./Builder.module.css";

export default function Builder() {
  const { bundle, state, toggleStep, openStep, selectVariant, setQuantity } =
    useBundle();
  const { steps, products } = bundle;

  return (
    <div className={styles.builder}>
      {steps.map((step, index) => {
        const stepProducts = products.filter((p) => p.stepId === step.id);
        const nextStep = steps[index + 1];

        return (
          <Step
            key={step.id}
            stepNumber={index + 1}
            totalSteps={steps.length}
            title={step.title}
            icon={step.icon}
            isOpen={state.openStepId === step.id}
            selectedCount={getSelectedCount(stepProducts, state.quantities)}
            nextTitle={nextStep?.title}
            onToggle={() => toggleStep(step.id)}
            onNext={() => openStep(nextStep.id)}
          >
            <div className={styles.grid}>
              {stepProducts.map((product) => {
                const activeVariant = getActiveVariant(
                  product,
                  state.activeVariants,
                );
                const key = getKey(product.id, activeVariant);

                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    activeVariant={activeVariant}
                    qty={getQty(state.quantities, key)}
                    isSelected={getProductQty(product, state.quantities) > 0}
                    onSelectVariant={(variantId) =>
                      selectVariant(product.id, variantId)
                    }
                    onQtyChange={(qty) => setQuantity(key, qty)}
                  />
                );
              })}
            </div>
          </Step>
        );
      })}
    </div>
  );
}

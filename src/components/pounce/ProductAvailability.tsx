import { pounceConfig, ProductKey } from "@/data/pounceConfig";

interface ProductAvailabilityProps {
  product: ProductKey;
}

export default function ProductAvailability({
  product,
}: ProductAvailabilityProps) {
  const item = pounceConfig.products[product];

  const remaining = item.total - item.claimed;

  if (remaining <= 0) {
    return (
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#777168]">
        Claimed
      </p>
    );
  }

  return (
    <p className="text-[10px] uppercase tracking-[0.18em] text-[#777168]">
      {remaining} of {item.total} available
    </p>
  );
}
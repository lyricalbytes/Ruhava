export type DropStatus = "LOCKED" | "OPEN" | "SOLD_OUT";

export type ProductKey =
  | "the-first-soul"
  | "after-rain"
  | "quiet-hours"
  | "red-earth";

export interface PounceProduct {
  name: string;
  total: number;
  claimed: number;
}

export interface PounceConfig {
  status: DropStatus;

  totalUnits: number;
  claimedUnits: number;

  /**
   * Visual position of Kiri.
   * This is intentionally separate from inventory.
   * Range: 0–1
   */
  pounceProgress: number;

  products: Record<ProductKey, PounceProduct>;
}

export const pounceConfig: PounceConfig = {
  status: "LOCKED",

  totalUnits: 12,
  claimedUnits: 1,

  pounceProgress: 0.04,

  products: {
    "the-first-soul": {
      name: "The First Soul",
      total: 3,
      claimed: 0,
    },

    "after-rain": {
      name: "After Rain",
      total: 3,
      claimed: 0,
    },

    "quiet-hours": {
      name: "Quiet Hours",
      total: 3,
      claimed: 0,
    },

    "red-earth": {
      name: "Red Earth",
      total: 3,
      claimed: 0,
    },
  },
};
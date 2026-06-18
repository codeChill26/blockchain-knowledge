import { createHash } from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  const data =
    block.index +
    block.timestamp +
    JSON.stringify(block.transactions) +
    block.previous_hash;

  const calculatedHash = createHash("sha256")
    .update(data)
    .digest("hex");

  return calculatedHash === block.current_hash;
}
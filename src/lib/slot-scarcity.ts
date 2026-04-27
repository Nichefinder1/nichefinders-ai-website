import type { BookingSlot } from './booking-types';

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  return hash >>> 0;
}

const SALT = 'nichefinders-booking-2026';
const SCARCITY_RATE = 0.65;

export function applyScarcity(slots: BookingSlot[], dateString: string): BookingSlot[] {
  if (slots.length <= 1) return slots;

  const seed = hashString(dateString + SALT);
  const rand = mulberry32(seed);
  const filtered = slots.filter(() => rand() > SCARCITY_RATE);

  if (filtered.length === 0) {
    const pickSeed = hashString(dateString + SALT + 'fallback');
    const pickRand = mulberry32(pickSeed);
    const idx = Math.floor(pickRand() * slots.length);
    return [slots[idx]];
  }

  return filtered;
}

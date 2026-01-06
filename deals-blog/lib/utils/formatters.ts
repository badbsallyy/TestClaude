import { format, differenceInDays, parseISO } from "date-fns";
import { de } from "date-fns/locale";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function formatDiscount(discount: number): string {
  return `-${discount}%`;
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "dd. MMMM yyyy", { locale: de });
}

export function getDaysUntilExpiry(expiryDate: string): number {
  const expiry = parseISO(expiryDate);
  const today = new Date();
  const days = differenceInDays(expiry, today);
  return Math.max(0, days);
}

export function formatReadTime(minutes: number): string {
  return `${minutes} Min. Lesezeit`;
}

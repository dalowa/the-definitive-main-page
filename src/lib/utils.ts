export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}

export function getTimeUntilDeadline(dateLimit: string): number {
  const now = new Date().getTime();
  const deadline = new Date(dateLimit).getTime();
  return Math.round((deadline - now) / (1000 * 60 * 60));
}

export function isOverdue(dateLimit: string): boolean {
  return getTimeUntilDeadline(dateLimit) < 0;
}

export function convertTo24HourFormat(
  hour: number,
  minutes: number,
  period: string
): string {
  let hour24 = hour;

  if (period === "PM" && hour !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour === 12) {
    hour24 = 0;
  }

  const hourString = hour24.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");

  return `${hourString}:${minutesString}`;
}
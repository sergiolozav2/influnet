export function formatToUserDate(date: string | Date) {
  if (typeof date === "string")
    return new Date(date + "Z").toLocaleString([], {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

  return date.toLocaleDateString();
}

export function formatToShortDate(date: string | Date, hack = false) {
  // Si pongo un espacio a este string '2024-05-01' -> '2024-05-01 '
  // JS convierte la fecha como quiero = '05/01'
  // Caso contrario, se vuelve '04/30'
 
  if (typeof date === "string")
    return new Date(date + (hack ? "" : " ")).toLocaleString([], {
      month: "2-digit",
      day: "2-digit",
    });

  return date.toLocaleDateString();
}

export function formatFullDate(date: string | Date) {
  if (typeof date === "string")
    return new Date(date + "Z").toLocaleString([], {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  return date.toLocaleDateString();
}

export function formatOnlyTime(date: string) {
  return new Date(date + "Z")
    .toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/AM|PM/, "");
}

export function formatTimePassedOrDate(date: string) {
  const time = new Date(date + "Z");
  const now = new Date();

  const diff = Math.abs(now.getTime() - time.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  if (totalSeconds < 60) {
    return `hace ${totalSeconds} segundo${totalSeconds > 1 ? "s" : ""}`;
  }
  if (totalMinutes < 60) {
    return `hace ${totalMinutes} minuto${totalMinutes > 1 ? "s" : ""}`;
  }
  if (totalHours < 23) {
    return `hace ${totalHours} hora${totalHours > 1 ? "s" : ""}`;
  }
  return formatToUserDate(date);
}

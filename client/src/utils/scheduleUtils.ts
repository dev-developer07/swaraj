export interface DoctorScheduleItem {
  day: string;
  slots: string[];
  timingText: string;
}

export function formatSingleTime(str: string): string {
  if (!str) return "";
  const s = str.trim();
  if (s.includes("-")) {
    const parts = s.split("-").map((p) => formatSingleTime(p.trim()));
    return parts.join(" - ");
  }
  if (/am|pm/i.test(s)) return s;
  const match = s.match(/^(\d{1,2}):(\d{2})$/);
  if (match) {
    let hr = parseInt(match[1], 10);
    const min = match[2];
    const ampm = hr >= 12 ? "PM" : "AM";
    if (hr === 0) hr = 12;
    else if (hr > 12) hr -= 12;
    return `${hr}:${min} ${ampm}`;
  }
  return s;
}

export function parseDoctorSchedules(schedulesData: any): DoctorScheduleItem[] {
  if (!schedulesData) return [];
  try {
    let current = schedulesData;
    while (typeof current === "string") {
      const parsed = JSON.parse(current);
      if (parsed === current) break;
      current = parsed;
    }
    if (!Array.isArray(current)) return [];

    return current.map((item: any) => {
      const day = item.day || item.name || "Available";
      let rawSlots: string[] = [];

      if (Array.isArray(item.slots) && item.slots.length > 0) {
        rawSlots = item.slots;
      } else if (item.startTime && item.endTime) {
        rawSlots = [`${item.startTime} - ${item.endTime}`];
      } else if (item.startTime) {
        rawSlots = [item.startTime];
      }

      const formattedSlots = rawSlots.map((s) => formatSingleTime(String(s))).filter(Boolean);
      const timingText = formattedSlots.length > 0 ? formattedSlots.join(", ") : "Available";

      return {
        day,
        slots: formattedSlots,
        timingText
      };
    });
  } catch (err) {
    console.error("Error parsing doctor schedules:", err);
    return [];
  }
}

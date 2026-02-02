// app/helpers/modal_control.ts
export const RELOCATION_MODAL_KEY = "lamodista_relocation_modal_v2";
// const MAX_PER_DAY = 2;
// const END_DATE = new Date("2026-06-01T00:00:00"); // desde acá NO aparece más

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export function shouldShowRelocationModal(): boolean {
  return true // DESACTIVADO TEMPORALMENTE
  // const now = new Date();

  // if (now >= END_DATE) return false;

  // try {
  //   const raw = localStorage.getItem(RELOCATION_MODAL_KEY);
  //   const today = todayKey();

  //   if (!raw) return true;

  //   const parsed = JSON.parse(raw) as { date: string; count: number };

  //   if (parsed.date !== today) return true;

  //   return parsed.count < MAX_PER_DAY;
  // } catch {
  //   return true;
  // }
}

export function markRelocationModalShown(): void {
  try {
    const today = todayKey();
    const raw = localStorage.getItem(RELOCATION_MODAL_KEY);

    if (!raw) {
      localStorage.setItem(
        RELOCATION_MODAL_KEY,
        JSON.stringify({ date: today, count: 1 })
      );
      return;
    }

    const parsed = JSON.parse(raw) as { date: string; count: number };

    if (parsed.date !== today) {
      localStorage.setItem(
        RELOCATION_MODAL_KEY,
        JSON.stringify({ date: today, count: 1 })
      );
    } else {
      localStorage.setItem(
        RELOCATION_MODAL_KEY,
        JSON.stringify({ date: today, count: parsed.count + 1 })
      );
    }
  } catch {}
}

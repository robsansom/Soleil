/** Copy inside the hand-built app-UI recreations — ported from the
 *  previous Soleil site so the components keep localising. These
 *  mirror the real Your Day / Your Sun / Real Sun screens; the
 *  sample values are plausible, not live data. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    sunWindow: {
      location: 'Santa Monica',
      conditions: 'Sonnig \u00b7 H:24\u00b0 T:16\u00b0',
      uvNowLabel: 'UV jetzt',
      time: '12:32',
      value: '6',
      category: 'Hoch',
      livePill: 'Live-UV',
      guidance: 'Starke Sonne bis 16 Uhr. Direkte Sonne kurz halten und Schatten nutzen.',
      axis: ['9 Uhr', '11 Uhr', '13 Uhr'],
      tiles: [
        { label: 'UV-Spitze', value: '8', caption: 'Spitze um 13:00' },
        { label: 'UV-Stufe', value: 'Hoch' },
        { label: 'Bewölkung', value: '18 %' },
        { label: 'Luftfeuchte', value: '54 %' }
      ],
      peakLabel: 'UV-Spitze',
      peakValue: '8 um 13:00',
      notifTime: 'jetzt',
      notifTitle: 'UV-Spitze um 13:00',
      notifBody: 'Der UV-Wert dürfte heute 8 erreichen.'
    },
    session: {
      header: 'Live-Session',
      uvChip: 'UV 6 · Hoch',
      elapsed: '18:42',
      elapsedLabel: 'vergangen',
      peopleLabel: 'Deine Leute',
      people: [
        { name: 'Du', status: 'LSF 50 · vor 12 Min. aufgetragen' },
        { name: 'Maya', status: 'LSF 30 · vor 40 Min. aufgetragen' }
      ],
      pause: 'Pause',
      stop: 'Session beenden',
      reapplyTitle: 'Creme dich nach',
      reapplyBody: 'Zwei Stunden seit dem Auftragen. Nach Wasser, Schweiß oder Abtrocknen früher nachcremen.'
    },
    realSun: {
      header: 'Zeit im Tageslicht',
      value: '195 Min.',
      daylightLabel: 'Tageslicht',
      hourlyLabel: 'UV pro Stunde',
      axis: ['9:00', 'Mittag', '15:00'],
      detailsRow: 'Tageslicht-Details ansehen',
      watchChip: 'Von der Apple Watch'
    },
    protection: {
      title: 'Schutz-Check',
      skinLabel: 'Hauttyp',
      skinValue: 'III',
      spfLabel: 'LSF',
      spfValue: '50',
      coverLabel: 'Bedeckung',
      coverValue: 'Hut + Schatten',
      action: 'Sonnencreme notieren'
    }
};

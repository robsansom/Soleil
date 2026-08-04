/** Copy inside the hand-built app-UI recreations — ported from the
 *  previous Soleil site so the components keep localising. These
 *  mirror the real Your Day / Your Sun / Real Sun screens; the
 *  sample values are plausible, not live data. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    sunWindow: {
      location: 'Santa Mónica',
      conditions: 'Soleado \u00b7 Máx:24\u00b0 Mín:16\u00b0',
      uvNowLabel: 'UV ahora',
      time: '12:32',
      value: '6',
      category: 'Alto',
      livePill: 'UV en directo',
      guidance: 'Sol fuerte hasta las 16:00. Limita el sol directo y busca sombra.',
      axis: ['9:00', '11:00', '13:00'],
      tiles: [
        { label: 'Pico de UV', value: '8', caption: 'Pico a las 13:00' },
        { label: 'Nivel de UV', value: 'Alto' },
        { label: 'Nubosidad', value: '18 %' },
        { label: 'Humedad', value: '54 %' }
      ],
      peakLabel: 'Pico de UV',
      peakValue: '8 a las 13:00',
      notifTime: 'ahora',
      notifTitle: 'Pico de UV a las 13:00',
      notifBody: 'Se espera que el UV llegue a 8 hoy.'
    },
    session: {
      header: 'Sesión en directo',
      uvChip: 'UV 6 · Alto',
      elapsed: '18:42',
      elapsedLabel: 'transcurrido',
      peopleLabel: 'Tu gente',
      people: [
        { name: 'Tú', status: 'SPF 50 · aplicado hace 12 min' },
        { name: 'Maya', status: 'SPF 30 · aplicado hace 40 min' }
      ],
      pause: 'Pausa',
      stop: 'Detener sesión',
      reapplyTitle: 'Reaplica tu protector',
      reapplyBody: 'Dos horas desde la aplicación. Reaplica antes tras el agua, el sudor o la toalla.'
    },
    realSun: {
      header: 'Tiempo con luz de día',
      value: '195 min',
      daylightLabel: 'Luz de día',
      hourlyLabel: 'UV por hora',
      axis: ['9:00', 'Mediodía', '15:00'],
      detailsRow: 'Ver el detalle del día',
      watchChip: 'Desde el Apple Watch'
    },
    protection: {
      title: 'Comprobación de protección',
      skinLabel: 'Tipo de piel',
      skinValue: 'III',
      spfLabel: 'FPS',
      spfValue: '50',
      coverLabel: 'Cobertura',
      coverValue: 'Sombrero + sombra',
      action: 'Registrar protector'
    }
};

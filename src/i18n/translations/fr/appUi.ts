/** Copy inside the hand-built app-UI recreations — ported from the
 *  previous Soleil site so the components keep localising. These
 *  mirror the real Your Day / Your Sun / Real Sun screens; the
 *  sample values are plausible, not live data. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      headline: 'La chaleur du jour est là',
      rightNow: 'En ce moment',
      tabs: ['Votre journée', 'Votre soleil', 'Vous'],
      searchLabel: 'Rechercher',
      addLabel: 'Ajouter'
    },
    sunWindow: {
      location: 'Santa Monica',
      conditions: 'Ensoleillé \u00b7 Max:24\u00b0 Min:16\u00b0',
      uvNowLabel: 'UV maintenant',
      time: '12:32',
      value: '6',
      category: 'Élevé',
      livePill: 'UV en direct',
      guidance: 'Soleil fort jusqu’à 16 h. Limitez l’exposition directe et cherchez l’ombre.',
      axis: ['9 h', '11 h', '13 h'],
      tiles: [
        { label: 'Pic UV', value: '8', caption: 'Pic à 13:00' },
        { label: 'Niveau UV', value: 'Élevé' },
        { label: 'Nébulosité', value: '18 %' },
        { label: 'Humidité', value: '54 %' }
      ],
      peakLabel: 'Pic UV',
      peakValue: '8 à 13:00',
      notifTime: 'maintenant',
      notifTitle: 'Pic UV à 13:00',
      notifBody: 'L’UV devrait atteindre 8 aujourd’hui.'
    },
    session: {
      header: 'Session en direct',
      uvChip: 'UV 6 · Élevé',
      elapsed: '18:42',
      elapsedLabel: 'écoulées',
      peopleLabel: 'Vos proches',
      people: [
        { name: 'Vous', status: 'SPF 50 · appliqué il y a 12 min' },
        { name: 'Maya', status: 'SPF 30 · appliqué il y a 40 min' }
      ],
      pause: 'Pause',
      stop: 'Arrêter la session',
      reapplyTitle: 'Remettez de la crème',
      reapplyBody: 'Deux heures depuis l’application. Réappliquez plus tôt après l’eau, la transpiration ou la serviette.'
    },
    realSun: {
      header: 'Temps à la lumière du jour',
      value: '195 min',
      daylightLabel: 'Lumière du jour',
      hourlyLabel: 'UV par heure',
      axis: ['9:00', 'Midi', '15:00'],
      detailsRow: 'Voir le détail de la journée',
      watchChip: 'Depuis l\u2019Apple Watch'
    },
    protection: {
      title: 'Point protection',
      skinLabel: 'Type de peau',
      skinValue: 'III',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: 'Couverture',
      coverValue: 'Chapeau + ombre',
      action: 'Noter la crème'
    }
};

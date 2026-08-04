/** Copy inside the hand-built app-UI recreations — ported from the
 *  previous Soleil site so the components keep localising. These
 *  mirror the real Your Day / Your Sun / Real Sun screens; the
 *  sample values are plausible, not live data. */
export const appUi = {
    sunWindow: {
      location: 'Santa Monica',
      conditions: 'Sunny \u00b7 H:24\u00b0 L:16\u00b0',
      uvNowLabel: 'UV now',
      time: '12:32',
      value: '6',
      category: 'High',
      livePill: 'Live UV',
      guidance: 'Strong sun until 4 pm. Keep direct sun short and use shade.',
      axis: ['9 am', '11 am', '1 pm'],
      tiles: [
        { label: 'Peak UV', value: '8', caption: 'Peak at 13:00' },
        { label: 'UV level', value: 'High' },
        { label: 'Cloud cover', value: '18 %' },
        { label: 'Humidity', value: '54 %' }
      ],
      peakLabel: 'Peak UV',
      peakValue: '8 at 13:00',
      notifTime: 'now',
      notifTitle: 'Peak UV at 13:00',
      notifBody: 'UV is expected to reach 8 today.'
    },
    session: {
      header: 'Live session',
      uvChip: 'UV 6 · High',
      elapsed: '18:42',
      elapsedLabel: 'elapsed',
      peopleLabel: 'Your people',
      people: [
        { name: 'You', status: 'SPF 50 · applied 12m ago' },
        { name: 'Maya', status: 'SPF 30 · applied 40m ago' }
      ],
      pause: 'Pause',
      stop: 'Stop session',
      reapplyTitle: 'Reapply your sunscreen',
      reapplyBody: 'Two hours since application. Sooner after water, sweat or towel-drying.'
    },
    realSun: {
      header: 'Time in daylight',
      value: '195 min',
      daylightLabel: 'Daylight',
      hourlyLabel: 'Hourly UV',
      axis: ['9:00', 'Noon', '3:00'],
      detailsRow: 'View daylight details',
      watchChip: 'From Apple Watch'
    },
    protection: {
      title: 'Protection check',
      skinLabel: 'Skin type',
      skinValue: 'III',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: 'Cover',
      coverValue: 'Hat + shade',
      action: 'Log sunscreen'
    }
};

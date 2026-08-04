/** Copy inside the hand-built app-UI recreations — ported from the
 *  previous Soleil site so the components keep localising. These
 *  mirror the real Your Day / Your Sun / Real Sun screens; the
 *  sample values are plausible, not live data. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      headline: '一日でいちばん暑い時間です',
      rightNow: '現在の状況',
      tabs: ['あなたの一日', 'あなたの太陽', 'あなた'],
      searchLabel: '検索',
      addLabel: '追加'
    },
    sunWindow: {
      location: 'サンタモニカ',
      conditions: '晴れ \u00b7 最高24\u00b0 最低16\u00b0',
      uvNowLabel: '現在のUV',
      time: '12:32',
      value: '6',
      category: '強い',
      livePill: 'ライブUV',
      guidance: '16時まで日差しが強めです。直射日光は短めに、日陰を使いましょう。',
      axis: ['9時', '11時', '13時'],
      tiles: [
        { label: 'UVピーク', value: '8', caption: '13:00にピーク' },
        { label: 'UVレベル', value: '強い' },
        { label: '雲量', value: '18 %' },
        { label: '湿度', value: '54 %' }
      ],
      peakLabel: 'UVピーク',
      peakValue: '13:00に8',
      notifTime: '今',
      notifTitle: '13:00にUVピーク',
      notifBody: '今日はUV 8に達する見込みです。'
    },
    session: {
      header: 'ライブセッション',
      uvChip: 'UV 6 · 強い',
      elapsed: '18:42',
      elapsedLabel: '経過',
      peopleLabel: 'あなたの家族',
      people: [
        { name: 'あなた', status: 'SPF 50 · 12分前に塗布' },
        { name: 'マヤ', status: 'SPF 30 · 40分前に塗布' }
      ],
      pause: '一時停止',
      stop: 'セッションを終了',
      reapplyTitle: '日焼け止めを塗り直しましょう',
      reapplyBody: '塗ってから2時間。水・汗・タオルの後は、より早めに塗り直しましょう。'
    },
    realSun: {
      header: '日光の時間',
      value: '195分',
      daylightLabel: '日光',
      hourlyLabel: '1時間ごとのUV',
      axis: ['9:00', '正午', '15:00'],
      detailsRow: '日光の詳細を見る',
      watchChip: 'Apple Watchから'
    },
    protection: {
      title: '保護チェック',
      skinLabel: '肌タイプ',
      skinValue: 'III',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: '服装',
      coverValue: '帽子＋日陰',
      action: '日焼け止めを記録'
    }
};

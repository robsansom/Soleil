/**
 * Upgrades the Real Sun scene's three labelled blocks into a tab set.
 * Without this file the blocks simply stack and every word is readable,
 * which is why the tab strip ships hidden.
 */
export function initTabs() {
  const scene = document.querySelector<HTMLElement>('[data-realsun]');
  const tablist = scene?.querySelector<HTMLElement>('[data-tabs]');
  if (!scene || !tablist) return;

  const tabs = [...tablist.querySelectorAll<HTMLButtonElement>('[data-tab]')];
  const panels = [...scene.querySelectorAll<HTMLElement>('[data-panel]')];
  if (tabs.length === 0 || tabs.length !== panels.length) return;

  tablist.hidden = false;
  panels.forEach((panel) => panel.setAttribute('role', 'tabpanel'));

  const select = (index: number, focus = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    scene.dataset.zone = String(index);
    if (focus) tabs[index].focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const keys: Record<string, number> = {
        ArrowRight: i + 1,
        ArrowLeft: i - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      const target = keys[event.key];
      if (target === undefined) return;
      event.preventDefault();
      select((target + tabs.length) % tabs.length, true);
    });
  });

  select(0);
}

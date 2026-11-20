import { useEffect, useRef, useState } from 'react'
import { track } from '../analytics'
import { groupRates, links } from '../content'
import type { RateTab, RateTable } from '../content/groupRates'
import { ExternalLink } from './ExternalLink'

// Shareable links: #group-rates opens the box; #group-rates-<tab> also picks a tab,
// e.g. mammderson.github.io/#group-rates-kids or #group-rates-lessons (tab ids are in content/groupRates.ts).
const LINK_ID = 'group-rates'

// "See our group offerings" toggle with tabs (Lift tickets / Rentals / Lessons / Kids). Content: content/groupRates.ts
export function GroupRates() {
  const [activeTabId, setActiveTabId] = useState(groupRates.tabs[0].id)
  const activeTab = groupRates.tabs.find((tab) => tab.id === activeTabId) ?? groupRates.tabs[0]
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const selectTab = (tabId: string) => {
    setActiveTabId(tabId)
    track('Group rates tab', { tab: tabId })
  }

  // When the page is opened with (or later jumps to) a #group-rates link: open the box, pick the tab, scroll to it
  useEffect(() => {
    // scrollBehavior: 'instant' when arriving from a shared link (just be there), 'smooth' for jumps within the page
    const openFromLink = (scrollBehavior: ScrollBehavior) => {
      const hash = decodeURIComponent(location.hash.slice(1))
      if (hash !== LINK_ID && !hash.startsWith(`${LINK_ID}-`)) return
      const linkedTab = groupRates.tabs.find((tab) => hash === `${LINK_ID}-${tab.id}`)
      if (linkedTab) setActiveTabId(linkedTab.id)
      const details = detailsRef.current
      if (!details) return
      details.open = true
      // Wait a frame so the opened box has its full height before scrolling to it
      requestAnimationFrame(() => details.scrollIntoView({ behavior: scrollBehavior, block: 'start' }))
      track('Group rates link', { link: hash })
    }

    // Arriving from a shared link: wait until images above have loaded (they push the box down), then jump
    const openOnArrival = () => openFromLink('instant')
    if (document.readyState === 'complete') openOnArrival()
    else window.addEventListener('load', openOnArrival, { once: true })

    const openOnHashChange = () => openFromLink('smooth')
    window.addEventListener('hashchange', openOnHashChange)
    return () => {
      window.removeEventListener('load', openOnArrival)
      window.removeEventListener('hashchange', openOnHashChange)
    }
  }, [])

  return (
    <details
      ref={detailsRef}
      id={LINK_ID}
      className="group-rates"
      onToggle={(toggleEvent) => {
        if (toggleEvent.currentTarget.open) track('Group rates open')
      }}
    >
      <summary>{groupRates.toggleLabel}</summary>

      <div className="group-rates-tabs" role="tablist" aria-label="Group rates">
        {groupRates.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`rates-tab-${tab.id}`}
            aria-selected={tab.id === activeTab.id}
            aria-controls="rates-panel"
            className={tab.id === activeTab.id ? 'active' : undefined}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id="rates-panel" role="tabpanel" aria-labelledby={`rates-tab-${activeTab.id}`}>
        {/* Yellow note: the one rule to know for this tab */}
        <p className="group-rates-key">
          {withBold(activeTab.keyPoint)}
          {activeTab.keyPointLink && <KeyPointLink {...activeTab.keyPointLink} />}
        </p>
        {activeTab.intro && <p className="group-rates-intro">{withBold(activeTab.intro)}</p>}
        {activeTab.tables.map((table) => (
          <RatesTable key={table.title} table={table} />
        ))}
        <p className="group-rates-fees">{activeTab.fees}</p>
        <p className="group-rates-fees">{activeTab.deadline}</p>
      </div>
    </details>
  )
}

// The linked sentence at the end of a yellow note, e.g. "Interested? Join the <chat link> in our WhatsApp Community."
function KeyPointLink({ text, label, linkKey }: NonNullable<RateTab['keyPointLink']>) {
  const [before, after] = text.split('{link}')
  return (
    <>
      {' '}{before}
      <ExternalLink url={links[linkKey]} className="text-link">{label}</ExternalLink>
      {after}
    </>
  )
}

// Text with **double asterisks** around a phrase shows that phrase in bold, e.g. "needs **at least 10 people**"
function withBold(text: string) {
  return text.split('**').map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part))
}

// One price table: the title and note sit above it (so narrow phones keep the width for prices),
// prices are right-aligned
function RatesTable({ table }: { table: RateTable }) {
  return (
    <table className="rates-table">
      <caption>
        {table.title}
        {table.note && <span className="rates-table-note">{table.note}</span>}
      </caption>
      <thead>
        <tr>
          {/* What the rows are, e.g. "Days" or "Lesson" */}
          <th scope="col">{table.columns[0]}</th>
          {table.columns.slice(1).map((column) => {
            const [name, detail] = column.split('|') // e.g. 'Adult|23–64'
            return (
              <th key={column} scope="col" className="rates-price">
                {name}
                {detail && <span className="rates-table-note">{detail}</span>}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {table.rows.map(([label, ...prices]) => (
          <tr key={label}>
            <th scope="row">{label}</th>
            {prices.map((price, index) => (
              <td key={index} className="rates-price">{price}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

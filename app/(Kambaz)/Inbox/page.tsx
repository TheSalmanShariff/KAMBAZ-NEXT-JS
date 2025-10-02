import styles from "./styles.module.css";

export default function Inbox() {
  return (
    <div className={styles.inboxContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Inbox</h1>
        <div className={styles.headerActions}>
          <button className={styles.settingsBtn}>
            ⚙️ Settings
          </button>
          <button className={styles.composeBtn}>
            ✏️ Compose
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <select className={styles.filterSelect} defaultValue="all">
            <option value="all">All courses</option>
            <option value="cs5610">CS5610</option>
            <option value="cs5200">CS5200</option>
          </select>
          <select className={styles.filterSelect} defaultValue="inbox">
            <option value="inbox">Inbox</option>
            <option value="sent">Sent</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div className={styles.searchWrapper}>
          <input 
            type="search" 
            placeholder="Search..." 
            className={styles.searchInput}
          />
        </div>
        <div className={styles.actions}>
          <button className={styles.actionBtn} title="Archive">📁</button>
          <button className={styles.actionBtn} title="Reply">↩️</button>
          <button className={styles.actionBtn} title="Reply All">↪️</button>
          <button className={styles.actionBtn} title="Download">⬇️</button>
          <button className={styles.actionBtn} title="Delete">🗑️</button>
          <button className={styles.actionBtn}>⋮</button>
        </div>
      </div>

      {/* Empty State */}
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
        </div>
        <p className={styles.emptyMessage}>No Conversations to Show</p>
      </div>
    </div>
  );
}
import { useState } from 'react';
import InfoRow from '../../components/common/InfoRow';
import { DesktopPackageTile } from '../../components/common/PackageTile';
import ScheduleTile from '../../components/common/ScheduleTile';
import StatusPill from '../../components/common/StatusPill';
import { adminTabs, attendanceHistory, members, schedules, sessionPackages } from '../../data/mockData';

function DesktopSidebar({ activeTab, onNavigate }) {
  return (
    <aside className="desktop-sidebar">
      <div>
        <span className="brand-mark">RINGKITA</span>
        <h1>Admin Workspace</h1>
        <p>Kelola jadwal, attendance, dan data member dari satu dashboard admin.</p>
      </div>

      <nav className="desktop-sidebar__nav" aria-label="desktop navigation">
        {adminTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? 'is-active' : ''}
            onClick={() => onNavigate(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="desktop-sidebar__stats">
        <InfoRow label="Member aktif" value="124" />
        <InfoRow label="Check-in hari ini" value="28" />
        <InfoRow label="Paket populer" value="Fight Camp" />
      </div>
    </aside>
  );
}

function DesktopAdminOverview({ onNavigate }) {
  return (
    <div className="desktop-grid">
      <section className="desktop-panel desktop-panel--hero">
        <div className="desktop-panel__header">
          <div>
            <span className="brand-mark">Admin</span>
            <h2>OPERASIONAL HARI INI</h2>
            <p>Pantau utilisasi kelas, check-in, dan performa paket dari layar desktop.</p>
          </div>
          <StatusPill tone="cyan">Realtime</StatusPill>
        </div>
        <div className="desktop-cta-row">
          <button type="button" className="desktop-primary-button" onClick={() => onNavigate('schedule')}>
            Kelola Jadwal
          </button>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('members')}>
            Lihat Member
          </button>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('history')}>
            Riwayat
          </button>
        </div>
        <div className="summary-strip summary-strip--three">
          <InfoRow label="Check-in" value="28" />
          <InfoRow label="Waitlist" value="11" />
          <InfoRow label="Top up" value="17" />
        </div>
      </section>

      <section className="desktop-panel">
        <div className="desktop-panel__header">
          <div>
            <span className="brand-mark">Paket</span>
            <h3>Paket sesi aktif</h3>
          </div>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('members')}>
            Lihat member
          </button>
        </div>
        <div className="desktop-package-strip">
          {sessionPackages.slice(0, 3).map((item) => (
            <DesktopPackageTile key={item.id} item={item} actionLabel="Lihat" onAction={() => onNavigate('members')} />
          ))}
        </div>
      </section>

      <section className="desktop-panel">
        <div className="desktop-panel__header">
          <div>
            <span className="brand-mark">Member</span>
            <h3>Daftar aktif</h3>
          </div>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('members')}>
            Lihat
          </button>
        </div>
        <div className="member-list">
          {members.map((member) => (
            <article className="member-row" key={member.id}>
              <div>
                <h4>{member.name}</h4>
                <p>{member.packageName}</p>
              </div>
              <div className="member-row__meta">
                <strong>{member.sessionsLeft}</strong>
                <span>{member.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="desktop-panel">
        <div className="desktop-panel__header">
          <div>
            <span className="brand-mark">Riwayat</span>
            <h3>Audit attendance</h3>
          </div>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('history')}>
            Audit
          </button>
        </div>
        <div className="history-list">
          {attendanceHistory.map((item) => (
            <article className="history-item" key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
              <StatusPill tone="soft">{item.status}</StatusPill>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function DesktopAdminSchedule() {
  return (
    <section className="desktop-panel">
      <div className="desktop-panel__header">
        <div>
          <span className="brand-mark">Jadwal</span>
          <h3>Manajemen sesi latihan</h3>
          <p>Atur kelas, coach, dan kapasitas untuk tiap sesi latihan.</p>
        </div>
        <button type="button" className="desktop-primary-button">
          Tambah jadwal
        </button>
      </div>
      <div className="tile-list">
        {schedules.map((item) => (
          <ScheduleTile key={item.id} item={item} actionLabel="Edit" />
        ))}
      </div>
    </section>
  );
}

function DesktopAdminMembers() {
  return (
    <section className="desktop-panel">
      <div className="desktop-panel__header">
        <div>
          <span className="brand-mark">Member</span>
          <h3>Manajemen member</h3>
          <p>Pantau status paket dan sisa sesi seluruh member aktif.</p>
        </div>
      </div>
      <div className="member-list">
        {members.map((member) => (
          <article className="member-row" key={member.id}>
            <div>
              <h4>{member.name}</h4>
              <p>{member.packageName}</p>
            </div>
            <div className="member-row__meta">
              <strong>{member.sessionsLeft}</strong>
              <span>{member.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DesktopAdminHistory() {
  return (
    <section className="desktop-panel">
      <div className="desktop-panel__header">
        <div>
          <span className="brand-mark">Riwayat</span>
          <h3>Audit attendance</h3>
          <p>Lihat log check-in dan penggunaan sesi terbaru.</p>
        </div>
      </div>
      <div className="history-list">
        {attendanceHistory.map((item) => (
          <article className="history-item" key={item.id}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
            <StatusPill tone="soft">{item.status}</StatusPill>
          </article>
        ))}
      </div>
    </section>
  );
}

function DesktopApp() {
  const [adminDesktopTab, setAdminDesktopTab] = useState('dashboard');
  let content = <DesktopAdminOverview onNavigate={setAdminDesktopTab} />;

  if (adminDesktopTab === 'schedule') content = <DesktopAdminSchedule />;
  if (adminDesktopTab === 'members') content = <DesktopAdminMembers />;
  if (adminDesktopTab === 'history') content = <DesktopAdminHistory />;

  return (
    <section className="desktop-app-shell">
      <DesktopSidebar activeTab={adminDesktopTab} onNavigate={setAdminDesktopTab} />
      <div className="desktop-content">
        <header className="desktop-content__header">
          <div>
            <span className="brand-mark">Desktop Admin</span>
            <h2>RINGKITA Operations Overview</h2>
            <p>Versi desktop untuk mengelola jadwal, kehadiran, paket sesi, dan aktivitas member.</p>
          </div>
          <div className="desktop-content__actions">
            <InfoRow label="Hari ini" value="22 Apr" />
            <InfoRow label="Status sistem" value="Online" />
          </div>
        </header>
        {content}
      </div>
    </section>
  );
}

export default DesktopApp;

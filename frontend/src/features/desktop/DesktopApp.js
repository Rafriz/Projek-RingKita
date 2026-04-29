import { useState } from 'react';
import InfoRow from '../../components/common/InfoRow';
import { DesktopPackageTile } from '../../components/common/PackageTile';
import ScheduleTile from '../../components/common/ScheduleTile';
import StatusPill from '../../components/common/StatusPill';
import {
  adminTabs,
  attendanceHistory,
  memberFeedback,
  members,
  schedules,
  sessionPackages,
} from '../../data/mockData';

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

function DesktopAdminOverview({ onNavigate, packages }) {
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
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('packages')}>
            Kelola Sesi
          </button>
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('members')}>
            Lihat Member
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
          <button type="button" className="desktop-secondary-button" onClick={() => onNavigate('packages')}>
            Kelola sesi
          </button>
        </div>
        <div className="desktop-package-strip">
          {packages.slice(0, 3).map((item) => (
            <DesktopPackageTile
              key={item.id}
              item={item}
              actionLabel="Edit Paket"
              onAction={() => onNavigate('packages')}
            />
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
            Buka member
          </button>
        </div>
        <div className="member-list">
          {members.slice(0, 3).map((member) => (
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

function DesktopPackageForm({ title, form, onChange, onSubmit, onCancel, submitLabel }) {
  return (
    <section className="desktop-panel">
      <div className="desktop-panel__header">
        <div>
          <span className="brand-mark">Paket</span>
          <h3>{title}</h3>
          <p>Atur nama paket, jumlah sesi, harga, masa aktif, dan status penawaran.</p>
        </div>
      </div>

      <form className="package-form" onSubmit={onSubmit}>
        <label>
          <span>Nama paket</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="Contoh: Fight Camp"
          />
        </label>

        <label>
          <span>Jumlah sesi</span>
          <input
            type="text"
            value={form.sessions}
            onChange={(event) => onChange('sessions', event.target.value)}
            placeholder="Contoh: 8"
          />
        </label>

        <label>
          <span>Harga</span>
          <input
            type="text"
            value={form.price}
            onChange={(event) => onChange('price', event.target.value)}
            placeholder="Contoh: Rp640.000"
          />
        </label>

        <label>
          <span>Masa aktif</span>
          <input
            type="text"
            value={form.validity}
            onChange={(event) => onChange('validity', event.target.value)}
            placeholder="Contoh: 45 hari"
          />
        </label>

        <label className="package-form__wide">
          <span>Status paket</span>
          <input
            type="text"
            value={form.status}
            onChange={(event) => onChange('status', event.target.value)}
            placeholder="Contoh: Paling populer"
          />
        </label>

        <div className="package-form__actions">
          <button type="submit" className="desktop-primary-button">
            {submitLabel}
          </button>
          <button type="button" className="desktop-secondary-button" onClick={onCancel}>
            Batal
          </button>
        </div>
      </form>
    </section>
  );
}

function DesktopAdminPackageManager({
  packages,
  onCreateClick,
  onEditClick,
  onViewMembers,
  isCreating,
  isEditing,
  form,
  onFormChange,
  onCreateSubmit,
  onEditSubmit,
  onCancelForm,
}) {
  return (
    <section className="desktop-panel">
      <div className="desktop-panel__header">
        <div>
          <span className="brand-mark">Paket</span>
          <h3>Manajemen paket sesi</h3>
          <p>Admin bisa menambah paket baru, mengubah harga, atau mengatur jumlah sesi.</p>
        </div>
        <div className="desktop-cta-row desktop-cta-row--tight">
          <button type="button" className="desktop-primary-button" onClick={onCreateClick}>
            Tambah paket
          </button>
          <button type="button" className="desktop-secondary-button" onClick={onViewMembers}>
            Lihat member
          </button>
        </div>
      </div>

      <div className="desktop-package-strip">
        {packages.map((item) => (
          <DesktopPackageTile
            key={item.id}
            item={item}
            actionLabel="Edit Paket"
            onAction={() => onEditClick(item)}
          />
        ))}
      </div>

      {isCreating ? (
        <div className="package-form-wrapper">
          <DesktopPackageForm
            title="Tambah paket sesi"
            form={form}
            onChange={onFormChange}
            onSubmit={onCreateSubmit}
            onCancel={onCancelForm}
            submitLabel="Simpan paket"
          />
        </div>
      ) : null}

      {isEditing ? (
        <div className="package-form-wrapper">
          <DesktopPackageForm
            title="Edit paket sesi"
            form={form}
            onChange={onFormChange}
            onSubmit={onEditSubmit}
            onCancel={onCancelForm}
            submitLabel="Update paket"
          />
        </div>
      ) : null}
    </section>
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

function DesktopAdminMembers({
  feedbackList,
  feedbackForm,
  onFeedbackChange,
  onFeedbackSubmit,
  onSelectMember,
}) {
  return (
    <div className="desktop-grid">
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
              <button
                type="button"
                className="desktop-inline-button"
                onClick={() => onSelectMember(member)}
              >
                Feedback
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="desktop-panel">
        <div className="desktop-panel__header">
          <div>
            <span className="brand-mark">Feedback</span>
            <h3>Kirim feedback ke member</h3>
            <p>Berikan catatan latihan, evaluasi teknik, atau arahan sesi berikutnya.</p>
          </div>
        </div>

        <form className="feedback-form" onSubmit={onFeedbackSubmit}>
          <label>
            <span>Member</span>
            <select
              value={feedbackForm.memberId}
              onChange={(event) => onFeedbackChange('memberId', event.target.value)}
            >
              <option value="">Pilih member</option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Kategori</span>
            <select
              value={feedbackForm.category}
              onChange={(event) => onFeedbackChange('category', event.target.value)}
            >
              <option value="Teknik">Teknik</option>
              <option value="Kondisi">Kondisi</option>
              <option value="Disiplin">Disiplin</option>
              <option value="Recovery">Recovery</option>
            </select>
          </label>

          <label className="feedback-form__wide">
            <span>Pesan feedback</span>
            <textarea
              rows="5"
              value={feedbackForm.message}
              onChange={(event) => onFeedbackChange('message', event.target.value)}
              placeholder="Contoh: Jaga posisi guard dan tambah latihan footwork 2 set."
            />
          </label>

          <div className="feedback-form__actions">
            <button type="submit" className="desktop-primary-button">
              Kirim feedback
            </button>
          </div>
        </form>

        <div className="feedback-list">
          {feedbackList.map((item) => (
            <article className="feedback-item" key={item.id}>
              <div className="feedback-item__top">
                <div>
                  <h4>{item.memberName}</h4>
                  <p>{item.createdAt}</p>
                </div>
                <StatusPill tone="cyan">{item.category}</StatusPill>
              </div>
              <p>{item.message}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
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

function createEmptyPackageForm() {
  return {
    id: '',
    name: '',
    sessions: '',
    price: '',
    validity: '',
    status: '',
  };
}

function DesktopApp() {
  const [adminDesktopTab, setAdminDesktopTab] = useState('dashboard');
  const [managedPackages, setManagedPackages] = useState(sessionPackages);
  const [managedFeedback, setManagedFeedback] = useState(memberFeedback);
  const [packageForm, setPackageForm] = useState(createEmptyPackageForm());
  const [isCreatingPackage, setIsCreatingPackage] = useState(false);
  const [editingPackageId, setEditingPackageId] = useState('');
  const [feedbackForm, setFeedbackForm] = useState({
    memberId: '',
    category: 'Teknik',
    message: '',
  });
  let content = <DesktopAdminOverview onNavigate={setAdminDesktopTab} packages={managedPackages} />;

  const handleFormChange = (field, value) => {
    setPackageForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetPackageForm = () => {
    setPackageForm(createEmptyPackageForm());
    setIsCreatingPackage(false);
    setEditingPackageId('');
  };

  const handleCreatePackage = (event) => {
    event.preventDefault();
    const nextPackage = {
      ...packageForm,
      id: `pkg-${Date.now()}`,
    };

    setManagedPackages((current) => [...current, nextPackage]);
    resetPackageForm();
  };

  const handleEditPackage = (item) => {
    setIsCreatingPackage(false);
    setEditingPackageId(item.id);
    setPackageForm({
      id: item.id,
      name: item.name,
      sessions: String(item.sessions),
      price: item.price,
      validity: item.validity,
      status: item.status,
    });
    setAdminDesktopTab('members');
  };

  const handleUpdatePackage = (event) => {
    event.preventDefault();
    setManagedPackages((current) =>
      current.map((item) =>
        item.id === editingPackageId
          ? {
              ...item,
              ...packageForm,
            }
          : item
      )
    );
    resetPackageForm();
  };

  const handleStartCreate = () => {
    setEditingPackageId('');
    setPackageForm(createEmptyPackageForm());
    setIsCreatingPackage(true);
    setAdminDesktopTab('members');
  };

  const handleFeedbackChange = (field, value) => {
    setFeedbackForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSelectFeedbackMember = (member) => {
    setFeedbackForm((current) => ({
      ...current,
      memberId: member.id,
    }));
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    const selectedMember = members.find((member) => member.id === feedbackForm.memberId);

    if (!selectedMember || !feedbackForm.message.trim()) {
      return;
    }

    const nextFeedback = {
      id: `FDB-${Date.now()}`,
      memberId: selectedMember.id,
      memberName: selectedMember.name,
      category: feedbackForm.category,
      message: feedbackForm.message.trim(),
      createdAt: '27 Apr 2026',
    };

    setManagedFeedback((current) => [nextFeedback, ...current]);
    setFeedbackForm({
      memberId: selectedMember.id,
      category: 'Teknik',
      message: '',
    });
  };

  if (adminDesktopTab === 'schedule') content = <DesktopAdminSchedule />;
  if (adminDesktopTab === 'packages') {
    content = (
      <DesktopAdminPackageManager
        packages={managedPackages}
        onCreateClick={handleStartCreate}
        onEditClick={handleEditPackage}
        onViewMembers={() => setAdminDesktopTab('members')}
        isCreating={isCreatingPackage}
        isEditing={Boolean(editingPackageId)}
        form={packageForm}
        onFormChange={handleFormChange}
        onCreateSubmit={handleCreatePackage}
        onEditSubmit={handleUpdatePackage}
        onCancelForm={resetPackageForm}
      />
    );
  }
  if (adminDesktopTab === 'members') {
    content = (
      <DesktopAdminMembers
        feedbackList={managedFeedback}
        feedbackForm={feedbackForm}
        onFeedbackChange={handleFeedbackChange}
        onFeedbackSubmit={handleFeedbackSubmit}
        onSelectMember={handleSelectFeedbackMember}
      />
    );
  }
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

export const sessionPackages = [
  {
    id: 'pkg-4',
    name: 'Starter Punch',
    sessions: 4,
    price: 'Rp350.000',
    validity: '30 hari',
    status: 'Cocok pemula',
  },
  {
    id: 'pkg-8',
    name: 'Fight Camp',
    sessions: 8,
    price: 'Rp640.000',
    validity: '45 hari',
    status: 'Paling populer',
  },
  {
    id: 'pkg-12',
    name: 'Champion Track',
    sessions: 12,
    price: 'Rp900.000',
    validity: '60 hari',
    status: 'Best value',
  },
  {
    id: 'pkg-inf',
    name: 'Unlimited Pro',
    sessions: 'oo',
    price: 'Rp1.250.000',
    validity: '30 hari',
    status: 'Elite access',
  },
];

export const schedules = [
  {
    id: 'sc-001',
    date: 'Hari ini',
    time: '18:30 - 19:30',
    type: 'Boxing Fundamentals',
    coach: 'Coach Andra',
    quota: 16,
    booked: 12,
    status: 'Open',
    notes: ['Pad work', 'Footwork', 'Defense'],
  },
  {
    id: 'sc-002',
    date: 'Hari ini',
    time: '20:00 - 21:15',
    type: 'Strength & Conditioning',
    coach: 'Coach Raka',
    quota: 12,
    booked: 10,
    status: 'Almost full',
    notes: ['Core', 'Explosive', 'Endurance'],
  },
  {
    id: 'sc-003',
    date: 'Besok',
    time: '07:00 - 08:00',
    type: 'Morning Mitts',
    coach: 'Coach Sinta',
    quota: 10,
    booked: 6,
    status: 'Open',
    notes: ['Jab', 'Cross', 'Uppercut'],
  },
];

export const members = [
  {
    id: 'MBR-2401',
    name: 'Rafi',
    packageName: 'Fight Camp',
    sessionsLeft: 8,
    sessionsUsed: 4,
    status: 'Aktif',
  },
  {
    id: 'MBR-2402',
    name: 'Rizky Pratama',
    packageName: 'Champion Track',
    sessionsLeft: 9,
    sessionsUsed: 3,
    status: 'Aktif',
  },
  {
    id: 'MBR-2403',
    name: 'Maya Lestari',
    packageName: 'Starter Punch',
    sessionsLeft: 0,
    sessionsUsed: 4,
    status: 'Top up',
  },
];

export const attendanceHistory = [
  {
    id: 'ATT-9001',
    title: 'Boxing Fundamentals',
    sub: '21 Apr 2026 - Check-in 18:32',
    status: '1 sesi terpotong',
  },
  {
    id: 'ATT-9002',
    title: 'Strength & Conditioning',
    sub: '20 Apr 2026 - Check-in 20:03',
    status: 'Valid',
  },
  {
    id: 'ATT-9003',
    title: 'Morning Mitts',
    sub: '18 Apr 2026 - Check-in 07:04',
    status: 'Paket habis setelah sesi',
  },
];

export const adminTabs = [
  { id: 'dashboard', label: 'Home' },
  { id: 'schedule', label: 'Jadwal' },
  { id: 'members', label: 'Member' },
  { id: 'history', label: 'Riwayat' },
];

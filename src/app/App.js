import '../styles/app.css';
import DesktopApp from '../features/desktop/DesktopApp';

function App() {
  return (
    <div className="app-shell">
      <main className="app-main">
        <DesktopApp />
      </main>
    </div>
  );
}

export default App;

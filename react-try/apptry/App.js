import DashboardHeader from './components/Dashboard/DashboardHeader';
import Sidebar from './components/Dashboard/Sidebar';
import DashboardContent from './components/Dashboard/DashboardContent';

function App() {
  return (
    <div>
      <DashboardHeader />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;

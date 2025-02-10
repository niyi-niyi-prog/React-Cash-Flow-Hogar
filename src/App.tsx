
import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/transactions">Transacciones</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;

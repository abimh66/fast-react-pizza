import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';

function Header() {
  return (
    <header>
      <Link to="/">Pizza React Fast Co.</Link>
      <SearchOrder />

      <p>Abi</p>
    </header>
  );
}

export default Header;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar เมนูนำทาง */}
      <nav style={{ padding: '16px 24px', backgroundColor: '#001529', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>หน้าแรก</Link>
        <Link to="/calculate" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>คำนวณค่าไฟฟ้า</Link>
        <Link to="/products" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>รายการสินค้า</Link>
      </nav>

      {/* กำหนด Route แต่ละหน้า */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
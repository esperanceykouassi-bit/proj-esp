import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home        from './pages/Home'
import About       from './pages/About'
import Formations  from './pages/Formations'
import Services    from './pages/Services'
import Contact     from './pages/Contact'

import AdminLayout    from './components/admin/AdminLayout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Login          from './pages/admin/Login'
import Dashboard      from './pages/admin/Dashboard'
import Inscriptions   from './pages/admin/Inscriptions'
import Messages       from './pages/admin/Messages'

/* ── Layout wrapper pour les pages publiques ─────────── */
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

/* ── App ──────────────────────────────────────────────── */
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* <-- Remonte automatiquement en haut de page lors d'un changement de route */}
        <Routes>

          {/* ── Routes publiques ── */}
          <Route element={<PublicLayout />}>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/contact"    element={<Contact />} />
          </Route>

          {/* ── Admin : connexion ── */}
          <Route path="/admin/login" element={<Login />} />

          {/* ── Admin : espace protégé ── */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index          element={<Dashboard />} />
            <Route path="inscriptions" element={<Inscriptions />} />
            <Route path="messages"     element={<Messages />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  )
}
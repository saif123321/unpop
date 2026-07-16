import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckoutPageRoute from './pages/CheckoutPageRoute'
import SalesPolicy from './pages/SalesPolicy'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUs from './pages/ContactUs'
import Unpop12pkCase from './pages/Unpop12pkCase'
import './App.css'

function App() {
  return (
    <Router basename="/new-demo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPageRoute />} />
        <Route path="/sales-policy" element={<SalesPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/unpop-12pk-case" element={<Unpop12pkCase />} />
      </Routes>
    </Router>
  )
}

export default App

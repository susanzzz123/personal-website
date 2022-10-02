import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Favicon from 'react-favicon'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDO3BbHqD8WyEoWsLO4npDboh0iUWkUHak',
  authDomain: 'personal-website-59239.firebaseapp.com',
  projectId: 'personal-website-59239',
  storageBucket: 'personal-website-59239.appspot.com',
  messagingSenderId: '99134012238',
  appId: '1:99134012238:web:f7732d67be4277abfdbc1f',
  measurementId: 'G-ZXRKRT7SM9'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(
  document.getElementById('app')
)
root.render(
  <>
  <Favicon url="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-saturn-space-prettycons-solid-prettycons.png" />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path="/experiences" element={<Experiences />}>
      </Route>
      <Route path='/projects' element={<Projects />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
)

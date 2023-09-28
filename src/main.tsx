import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'normalize.css'
import './index.css'

import './locale'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

import Header from './components/header'
import Footer from './components/footer';

// 异步组件包裹Suspense
function App() {
  return (
    <div className="app">
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
        <div className="section">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;

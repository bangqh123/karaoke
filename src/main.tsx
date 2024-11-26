import './styles/index.less'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/home/HomePage';

import NotFoundPage from './pages/notfound/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route 
        path="/" 
        element={ 
          <Suspense fallback={ <Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        }
      /> */}

      <Route path='' element={<HomePage />} />
      
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

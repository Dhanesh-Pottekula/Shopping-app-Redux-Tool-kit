import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import { Provider } from 'react-redux'
import store from '../store/Store'

function RootLayout() {
  return (<>
  <Provider store={store}>
    <NavbarComponent/>
        <main>
            <Outlet/>
        </main>
  </Provider>
  </>
  )
}

export default RootLayout
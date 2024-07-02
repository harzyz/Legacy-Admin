import React from 'react'
import Sidebar from '../sidebar/sidebar'
import styles from './layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Layout

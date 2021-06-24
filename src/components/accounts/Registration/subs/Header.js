import React from 'react'
import styles from './styles.module.css'
import logo from './../../../asset/img/Excite WLL.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className='container'>
                <img src={logo} alt='brand' width='120px'/>
            </div>
        </div>
    )
}

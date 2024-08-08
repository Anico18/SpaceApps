//import React from 'react'
import styles from './NameComponent.module.css'
import DescriptionComponent from '../DescriptionComponent/DescriptionComponent'

const NameComponent = () => {
  return (
    <div className={styles.name}>
        <h1>Alejandro Tejada Mesías</h1>
        <DescriptionComponent></DescriptionComponent>
    </div>
  )
}

export default NameComponent
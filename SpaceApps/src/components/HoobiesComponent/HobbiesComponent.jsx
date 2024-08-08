//import React from 'react'
import styles from './HobbiesComponent.module.css'

const HobbiesComponent = () => {
  return (
    <div className={styles.container}>
        <table>
            <tr>
                <td>
                    <h1 className={styles.Hobby}>Pokémon Competitivo</h1>
                </td>
                <td>
                    <img className={styles.photo} src="../src/assets/Pokemon.jpeg" alt="Pokémon" />
                </td>
            </tr>
            <tr>
                <td>
                    <img className={styles.photo} src="../src/assets/Theatre.jpeg" alt="Teatro" />
                </td>
                <td>
                    <h1 className={styles.Hobby}>Teatro</h1>
                </td>
            </tr>
            <tr>
                <td>
                    <h1 className={styles.Hobby}>Coding</h1>
                </td>
                <td>
                    <img className={styles.photo} src="../src/assets/Coding.jpg" alt="Programación" />
                </td>
            </tr>
            <tr>
                <td>
                    <img className={styles.photo} src="../src/assets/Photograph.jpeg" alt="Fotografía" />
                </td>
                <td>
                    <h1 className={styles.Hobby}>Fotografía</h1>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default HobbiesComponent
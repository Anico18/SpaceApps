//import React from 'react'
import styles from './FooterComponent.module.css'

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://www.linkedin.com/in/anico18/">
                <img className={styles.logos} src="../src/assets/LinkedIn.png" alt="LinkedIn Logo" />
              </a>
            </td>
            <td>
              <a href="https://github.com/Anico18">
                <img className={styles.logos} src="../src/assets/Github.png" alt="GitHub Logo" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FooterComponent
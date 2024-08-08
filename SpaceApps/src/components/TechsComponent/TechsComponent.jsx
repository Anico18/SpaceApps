//import React from 'react'
import styles from './TechsComponent.module.css'

const TechsComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Python</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/Python.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Node.JS</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/Node.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>C#</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/CSharp.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Java</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/Java.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Ruby On Rails</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/Rails.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>SQL Server</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/SQLServer.png" alt="Python" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>MySQL</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/MySQL.png" alt="MySQL" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>PowerBI</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/PowerBI.png" alt="PowerBI" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>React</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/React.png" alt="React" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Angular</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/Angular.png" alt="Angular" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Scykit Learn</h2></td>
                            </tr>
                            <tr>
                                <td><img className={styles.logos} src="../src/assets/ScykitLearn.png" alt="ScykitLearn" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.fade}></div>
        </div>
    )
}

export default TechsComponent
//import React from 'react'
import styles from './TechsComponent.module.css'

const TechsComponent = () => {
    const items = [
        { name: 'Python', img: '../src/assets/Python.png' },
        { name: 'Node.JS', img: '../src/assets/Node.png' },
        { name: 'C#', img: '../src/assets/CSharp.png' },
        { name: 'Java', img: '../src/assets/Java.png' },
        { name: 'Ruby On Rails', img: '../src/assets/Rails.png' },
        { name: 'SQL Server', img: '../src/assets/SQLServer.png' },
        { name: 'MySQL', img: '../src/assets/MySQL.png' },
        { name: 'PowerBI', img: '../src/assets/PowerBI.png' },
        { name: 'React', img: '../src/assets/React.png' },
        { name: 'Angular', img: '../src/assets/Angular.png' },
        { name: 'Scykit Learn', img: '../src/assets/ScykitLearn.png' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                {[...items, ...items].map((item, index) => (
                    <div className={styles.item} key={index}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><h2>{item.name}</h2></td>
                                </tr>
                                <tr>
                                    <td><img className={styles.logos} src={item.img} alt={item.name} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <div className={styles.fade}></div>
        </div>
    );
}

export default TechsComponent
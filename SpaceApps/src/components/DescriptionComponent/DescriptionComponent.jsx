//import React from 'react'
import styles from './DescriptionComponent.module.css'

const DescriptionComponent = () => {
  return (
    <div className={styles.container}>
        <table>
            <thead>
                <tr>
                    <td>
                        <p className={styles.text}>
                            Ingeniero Electrónico y de Telecomunicaciones, con conocimiento y experiencia en Visión Computacional, 
                            Machine Learning y Deep Learning con Python. Con una metodología de trabajo orientada a metas y preferencia 
                            de trabajo en equipo y con Metodología Ágiles y SCRUM. Además, tengo experiencia en traducción e interpretación 
                            on-site obtenida a partir de SAT (instalación y puesta en marcha) de maquinaria industrial para el rubro farmacéutico 
                            y un paper académico publicado en el XLVIII Conferencia Latinoamericana de Informática CLEI 2021 
                            (DOI: https://doi.org/10.1109/CLEI53233.2021.9639989). Actualmente me desempeño en el rol de analista de proyectos e 
                            innovación para compañías, mientras continúo mi aprendizaje de Ciencia de Datos y desarrollo de software con distintos stacks, 
                            especialmente Java, C#, Python y React.
                        </p>
                    </td>
                    <td>
                        <img className={styles.photo} src="./src/assets/photo.jpeg" alt="Personal photo" />
                    </td>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default DescriptionComponent
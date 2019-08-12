import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <AniLink
                fade
                to="/blogs"
                style={{
                  color: "unset",
                  cursor: "pointer",
                }}
              >
                <span>{item.icon}</span>
              </AniLink>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services

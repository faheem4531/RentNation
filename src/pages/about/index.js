import React from "react";
import styles from "./About.module.css";
import { Header, Footer } from "../../components";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";
import bgRight from "../../assets/pngs/bg-rightHalf.png";

const About = () => {
  return (
    <div>
      <Header
        Login={false} />
      <div className={styles.aboutMain}>
        <div className={styles.aboutHeading}>About us</div>
        <div className={styles.aboutContantCon}>
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur. Consequat tincidunt blandit
            donec ipsum nam vel. Vulputate arcu augue vestibulum interdum. Quam
            vitae ullamcorper risus nibh faucibus aliquam adipiscing. Vitae
            ultrices accumsan nunc mattis sagittis vitae egestas et duis. Libero
            pharetra vitae id feugiat et sed ornare pellentesque non. Aliquam
            tortor viverra habitant erat commodo odio. Leo nulla aliquam
            ullamcorper massa. Pretium in risus vel ut nibh. Egestas neque
            elementum massa tincidunt ipsum ut tempor bibendum duis. Lacus
            aliquam vitae vulputate eget non fringilla. Sodales orci viverra
            quisque dictum diam. Pharetra turpis cras tincidunt tortor mus
            mollis nunc proin. Purus in donec at vulputate nisi habitant lectus.
          </div>
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur. Consequat tincidunt blandit
            donec ipsum nam vel. Vulputate arcu augue vestibulum interdum. Quam
            vitae ullamcorper risus nibh faucibus aliquam adipiscing. Vitae
            ultrices accumsan nunc mattis sagittis vitae egestas et duis. Libero
            pharetra vitae id feugiat et sed ornare pellentesque non. Aliquam
            tortor viverra habitant erat commodo odio. Leo nulla aliquam
            ullamcorper massa. Pretium in risus vel ut nibh. Egestas neque
            elementum massa tincidunt ipsum ut tempor bibendum duis. Lacus
            aliquam vitae vulputate eget non fringilla. Sodales orci viverra
            quisque dictum diam. Pharetra turpis cras tincidunt tortor mus
            mollis nunc proin. Purus in donec at vulputate nisi habitant lectus.
          </div>
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur. Consequat tincidunt blandit
            donec ipsum nam vel. Vulputate arcu augue vestibulum interdum. Quam
            vitae ullamcorper risus nibh faucibus aliquam adipiscing. Vitae
            ultrices accumsan nunc mattis sagittis vitae egestas et duis. Libero
            pharetra vitae id feugiat et sed ornare pellentesque non. Aliquam
            tortor viverra habitant erat commodo odio. Leo nulla aliquam
            ullamcorper massa. Pretium in risus vel ut nibh. Egestas neque
            elementum massa tincidunt ipsum ut tempor bibendum duis. Lacus
            aliquam vitae vulputate eget non fringilla. Sodales orci viverra
            quisque dictum diam. Pharetra turpis cras tincidunt tortor mus
            mollis nunc proin. Purus in donec at vulputate nisi habitant lectus.
          </div>
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur. Consequat tincidunt blandit
            donec ipsum nam vel. Vulputate arcu augue vestibulum interdum. Quam
            vitae ullamcorper risus nibh faucibus aliquam adipiscing. Vitae
            ultrices accumsan nunc mattis sagittis vitae egestas et duis. Libero
            pharetra vitae id feugiat et sed ornare pellentesque non. Aliquam
            tortor viverra habitant erat commodo odio. Leo nulla aliquam
            ullamcorper massa. Pretium in risus vel ut nibh. Egestas neque
            elementum massa tincidunt ipsum ut tempor bibendum duis. Lacus
            aliquam vitae vulputate eget non fringilla. Sodales orci viverra
            quisque dictum diam. Pharetra turpis cras tincidunt tortor mus
            mollis nunc proin. Purus in donec at vulputate nisi habitant lectus.
          </div>
        </div>
      </div>

      <div className={styles.aboutFooter}>
        <Footer />
        <div className={styles.aboutBgLeft}>
          <img src={bgLeft} alt="" />
        </div>
        <div className={styles.aboutBgRight}>
          <img src={bgRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

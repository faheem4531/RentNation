import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { Header } from "../../components";
import Footer from "../../components/footer/Footer";
import bgRight from "../../assets/pngs/bg-rightHalf.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <Header Login={true} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>Privacy Policy</div>
        <div className={styles.detailcontent}>
          <div className={styles.detailing}>
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
          <div className={styles.detailing}>
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
          <div className={styles.detailing}>
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
        <div />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

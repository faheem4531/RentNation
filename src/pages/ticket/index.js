import React from "react";
import styles from "./Ticket.module.css";
import { Header } from "../../components";
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";

import ProfileBtn from "../../components/buttons/CardButton";
import TicketCard from "./TicketCard";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Ticket = () => {
  const Ticket_DummyData = [
    {
      id: 't1',
      heading: 'Sales',
      discription: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.'
    },
    {
      id: 't2',
      heading: 'Sales',
      discription: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.'
    },
    {
      id: 't3',
      heading: 'Sales',
      discription: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.'
    },
    {
      id: 't4',
      heading: 'Sales',
      discription: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.'
    },

  ]
  return (
    <div className={styles.ticket}>
      <Header />
      <div className={styles.content}>
        <div className={styles.profileBtn}>
          <div className={styles.heading}>
            Tickets
          </div>
          <ProfileBtn
            buttonText={"+ Add Tickets"}
            padding={'24px '}
            bgColor={'var(--bg-grey4-dark-color)'}
            borderColor={'var(--white-color)'}
            color={'var(--white-color)'}
            radius={'12px'}
            width={'190px'}
          />
        </div>
        <div className={styles.cardContainer}>
          {Ticket_DummyData.map((items) => (
            <TicketCard
              key={items.id}
              heading={items.heading}
              discription={items.discription}
            />
          ))}
        </div>
      </div>

      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default Ticket;

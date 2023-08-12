import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Ticket.module.css";
import { Header } from "../../components";
import { myTickets } from "../../store/thunk/ProfileThunk";
import ProfileBtn from "../../components/buttons/CardButton";
import TicketCard from "./TicketCard";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Ticket = () => {
  const dispatch = useDispatch();

  const tickets = useSelector((state) => state?.profile?.tickets);

  useEffect(() => {
    dispatch(myTickets());
  }, []);

  return (
    <div className={styles.ticket}>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileBtn}>
          <div className={styles.heading}>Tickets</div>
          <Link className={styles.Link} to={"/AddTicket"}>
            <ProfileBtn
              buttonText={"+ Add Tickets"}
              padding={"24px "}
              bgColor={"var(--bg-grey4-dark-color)"}
              borderColor={"var(--white-color)"}
              color={"var(--white-color)"}
              radius={"12px"}
              width={"190px"}
            />
          </Link>
        </div>
        <div className={styles.cardContainer}>
          {tickets.map((items) => (
            <TicketCard
              key={items.id}
              department={items.department}
              subject={items.subject}
              discription={items.description}
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

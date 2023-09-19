import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMessage,
  faPaperclip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./card.module.css";

export default function Card(props) {
  function getCategoryClassName() {
    if (props.data.category === "Research")
      return `${styles.category} ${styles.research}`;
    else if (props.data.category === "Planning")
      return `${styles.category} ${styles.planning}`;
    else if (props.data.category === "Design")
      return `${styles.category} ${styles.design}`;
    else if (props.data.category === "Content")
      return `${styles.category} ${styles.content}`;
  }

  function handleOnDrag(e, cardData) {
    e.dataTransfer.setData("cardData", JSON.stringify(cardData));
  }

  return (
    <div
      draggable
      onDragStart={(e) => handleOnDrag(e, props.data)}
      className={styles.cardContainer}
    >
      <div className={styles.cardTop}>
        <div className={getCategoryClassName()}>{props.data.category}</div>
        <FontAwesomeIcon icon={faEllipsis} className={styles.options} />
      </div>

      <div className={styles.heading}>{props.data.heading}</div>

      <div className={styles.description}>{props.data.description}</div>

      <div className={styles.cardBottom}>
        <div className={styles.profiles}></div>
        <div className={styles.tags}>
          {props.data.progressTotal ? (
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={styles.commentIcon}
              />
              <span>
                {props.data.progressDone}/{props.data.progressTotal}
              </span>
            </div>
          ) : null}

          {props.data.attachments ? (
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faPaperclip}
                className={styles.commentIcon}
              />
              <span>{props.data.attachments}</span>
            </div>
          ) : null}

          {props.data.comments ? (
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faMessage}
                className={styles.commentIcon}
              />
              <span>{props.data.comments}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

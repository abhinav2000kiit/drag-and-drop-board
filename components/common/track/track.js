import Card from "@/components/common/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./track.module.css";

export default function Track(props) {
  function handleOnDrop(e) {
    const cardData = JSON.parse(e.dataTransfer.getData("cardData"));
    props.handleCardMove(cardData, props.trackInfo.trackName);
    console.log(cardData);
  }

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className={styles.trackContainer}
    >
      <div className={styles.trackTop}>
        <div className={styles.trackName}>
          {props.trackInfo.trackName}
          <span className={styles.trackCount}>
            {props.trackInfo.cardsList.length}
          </span>
        </div>
        <FontAwesomeIcon icon={faCirclePlus} className={styles.createIcon} />
      </div>
      {props.trackInfo.cardsList.map((cardData, index) => (
        <Card data={cardData} key={cardData.heading + index} />
      ))}
    </div>
  );
}

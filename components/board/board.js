import { useState } from "react";
import styles from "./board.module.css";
import Track from "@/components/common/track/track";

export default function Board() {
  const [boardInfo, setBoardInfo] = useState([
    {
      trackName: "Backlog",
      cardsList: [
        {
          id: 1,
          trackName: "Backlog",
          category: "Research",
          heading: "Auditing information architecture",
          description:
            "Listing out all the findings from present and current EA.",
          users: [12, 23],
          comments: 4,
          attachments: 0,
          progressTotal: 0,
          progressDone: 0,
          deadline: null,
        },
        {
          id: 2,
          trackName: "Backlog",
          category: "Planning",
          heading: "Listing deliverables checklist",
          description: null,
          users: [12],
          comments: 0,
          attachments: 0,
          progressTotal: 10,
          progressDone: 30,
          deadline: null,
        },
        {
          id: 3,
          trackName: "Backlog",
          category: "Design",
          heading: "High-fedility UI - Desktop",
          description: null,
          users: [12, 23, 45],
          comments: 0,
          attachments: 6,
          progressTotal: 0,
          progressDone: 0,
          deadline: new Date(),
        },
        {
          id: 4,
          trackName: "Backlog",
          category: "Planning",
          heading: "Update requirements list",
          description: null,
          users: null,
          comments: 0,
          attachments: 0,
          progressTotal: 0,
          progressDone: 0,
          deadline: new Date(),
        },
      ],
    },
    {
      trackName: "To Do",
      cardsList: [
        {
          id: 5,
          trackName: "To Do",
          category: "Design",
          heading: "Low fidelity (wireframe) design - Mobile",
          description: null,
          users: [12, 23],
          comments: 0,
          attachments: 3,
          progressTotal: 0,
          progressDone: 0,
          deadline: null,
        },
        {
          id: 6,
          trackName: "To Do",
          category: "Content",
          heading: "Update support documentation",
          description:
            "Enhance a better guidance about better support documentation for scalibility purposes",
          users: [12],
          comments: 9,
          attachments: 0,
          progressTotal: 26,
          progressDone: 0,
          deadline: null,
        },
      ],
    },
    {
      trackName: "In Progress",
      cardsList: [
        {
          id: 7,
          trackName: "In Progress",
          category: "Research",
          heading: "Auditing information architecture",
          description:
            "Listing out all the findings from present and current EA.",
          users: [12, 23],
          comments: 4,
          attachments: 0,
          progressTotal: 0,
          progressDone: 0,
          deadline: null,
        },
        {
          id: 8,
          trackName: "In Progress",
          category: "Planning",
          heading: "Listing deliverables checklist",
          description: null,
          users: [12],
          comments: 0,
          attachments: 0,
          progressTotal: 30,
          progressDone: 10,
          deadline: null,
        },
        {
          id: 9,
          trackName: "In Progress",
          category: "Design",
          heading: "High-fedility UI - Desktop",
          description: null,
          users: [12, 23, 45],
          comments: 0,
          attachments: 6,
          progressTotal: 0,
          progressDone: 0,
          deadline: new Date(),
        },
        {
          id: 10,
          trackName: "In Progress",
          category: "Planning",
          heading: "Update requirements list",
          description: null,
          users: null,
          comments: 0,
          attachments: 0,
          progressTotal: 0,
          progressDone: 0,
          deadline: new Date(),
        },
      ],
    },
    {
      trackName: "Needs Review",
      cardsList: [
        {
          id: 11,
          trackName: "Needs Review",
          category: "Design",
          heading: "Low fidelity (wireframe) design - Mobile",
          description: null,
          users: [12, 23],
          comments: 0,
          attachments: 3,
          progressTotal: 0,
          progressDone: 0,
          deadline: null,
        },
        {
          id: 12,
          trackName: "Needs Review",
          category: "Content",
          heading: "Update support documentation",
          description:
            "Enhance a better guidance about better support documentation for scalibility purposes",
          users: [12],
          comments: 9,
          attachments: 0,
          progressTotal: 26,
          progressDone: 15,
          deadline: null,
        },
      ],
    },
  ]);

  function handleCardMove(cardData, moveToTrack) {
    const tempData = [...boardInfo];

    const fromTrack = tempData.find(
      (td) => td.trackName === cardData.trackName
    );
    fromTrack.cardsList = fromTrack.cardsList.filter(
      (cardInfo) => cardInfo.id !== cardData.id
    );

    const toTrack = tempData.find((td) => td.trackName === moveToTrack);
    toTrack.cardsList.push({
      ...cardData,
      trackName: moveToTrack,
    });

    setBoardInfo(tempData);
    console.log(boardInfo);
  }

  return (
    <div className={styles.boardContainer}>
      {boardInfo.map((trackInfo, index) => (
        <Track
          trackInfo={trackInfo}
          handleCardMove={handleCardMove}
          key={trackInfo.trackName + index}
        />
      ))}
    </div>
  );
}

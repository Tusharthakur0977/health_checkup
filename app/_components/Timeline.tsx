import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function ScrollableTimeline() {
  const [timelineWidth, setTimelineWidth] = React.useState("0%");
  const [timelineColor, setTimelineColor] = React.useState("#f0f0f0"); // Initial color

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the progress as a percentage
    const progress = (scrollPosition / documentHeight) * 100;

    // Update the timeline width and color
    setTimelineWidth(`${progress}%`);
    setTimelineColor(progress > 50 ? "#ff0000" : "#f0f0f0");
  };

  React.useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once during mounting

  return (
    <Timeline style={{ backgroundColor: "#e0e0e0", height: "10px" }}>
      <TimelineItem style={{ width: timelineWidth }}>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: timelineColor }} />
          <TimelineConnector style={{ backgroundColor: timelineColor }} />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}

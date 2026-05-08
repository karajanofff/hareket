import { ChildrenSign } from "./ChildrenSign";
import { MainRoadSign } from "./MainRoadSign";
import { NoEntrySign } from "./NoEntrySign";
import { NoParkingSign } from "./NoParkingSign";
import { ParkingSign } from "./ParkingSign";
import { PedestrianCrossingSign } from "./PedestrianCrossingSign";
import { SpeedLimitSign } from "./SpeedLimitSign";
import { StopSign } from "./StopSign";
import { YieldSign } from "./YieldSign";

export function RoadSign({ type, className = "h-24 w-24" }: { type?: string; className?: string }) {
  switch (type) {
    case "yield": return <YieldSign className={className} />;
    case "pedestrian": return <PedestrianCrossingSign className={className} />;
    case "speed": return <SpeedLimitSign className={className} />;
    case "noEntry": return <NoEntrySign className={className} />;
    case "children": return <ChildrenSign className={className} />;
    case "parking": return <ParkingSign className={className} />;
    case "mainRoad": return <MainRoadSign className={className} />;
    case "noParking": return <NoParkingSign className={className} />;
    default: return <StopSign className={className} />;
  }
}

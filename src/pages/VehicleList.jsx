import {Banner, ShowRoom, FilterBar} from "../components";
import mainBanner from "../assets/carBanner.png";

export function VehicleList() {
  return (
    <main>
      <Banner imgUrl={mainBanner} heading="Find Your Dream Car Here." alt="Car in sunrise"/>
      <FilterBar />
      <ShowRoom />
    </main>
  );
}

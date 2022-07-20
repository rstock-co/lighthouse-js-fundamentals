// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = stations => {
  let goodstations = [];
  for (let i = 0; i < stations.length; i++) {
    let stationName = stations[i][0];
    let stationCapacity = stations[i][1];
    let stationType = stations[i][2];

    if (
      stationCapacity >= 20 &&
      (stationType === "school" || stationType === "community centre")
    ) {
      goodstations.push(stationName);
    }
  }
  return goodstations;
};

chooseStations(stations);

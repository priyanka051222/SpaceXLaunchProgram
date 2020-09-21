export const Flight = (flight) => {
  return {
    title: flight.mission_name,
    year: flight.launch_year,
    launchSuccess: flight.launch_success,
    id: flight.mission_id,
    landSuccess: flight.land_success,
    photo: flight.links.mission_patch,
  };
};

export const Flight = (flight) => {
  return {
    title: flight.mission_name || 'NotFound',
    year: flight.launch_year || 'NotFound',
    launchSuccess: flight.launch_success || 'NotFound',
    id: flight.mission_id || 'NotFound',
    landSuccess: flight.land_success || 'NotFound',
    photo: flight.links.mission_patch || 'NotFound',
  };
};

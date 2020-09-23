export const Flight = (flight) => {
  return {
    title: flight.mission_name || 'Title do not Exist',
    year: flight.launch_year || 'Launch year do Not Exist',
    launchSuccess: ''+flight.launch_success,
    id: flight.mission_id.length > 0 ?  flight.mission_id.join(',') : 'Mission id not found',
    landSuccess: flight.rocket ? '' + flight.rocket.first_stage.cores[0].land_success  : 'Land year do Not Exist',
    photo: flight.links.mission_patch,
  };
};

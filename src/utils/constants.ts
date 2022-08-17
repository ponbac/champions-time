export const APP_URL = (): string =>
  window.location.host == "localhost:5173"
    ? "http://localhost:5173"
    : "https://cl.backman.app";

export const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];

// TODO: This is a hack, but it works for now (should be server-side).
export const GROUP_PREDICTIONS_CLOSE = "2022-07-07T23:00:00";
//export const PLAYOFF_PREDICTIONS_OPEN = "2022-07-16T12:00:00";
export const PLAYOFF_PREDICTIONS_OPEN = "2022-07-18T23:00:00";
export const PLAYOFF_PREDICTIONS_CLOSE = "2022-07-20T21:00:00";

export const ADMIN_ID = "eb8fbd9c-13b6-4c32-8812-efa40be059b5";

export const TBD_TEAM: Team = {
  id: -1,
  name: "TBD",
  flagCode: "aq",
  groupId: "TBD",
  points: 0,
};

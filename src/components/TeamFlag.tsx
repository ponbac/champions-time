import { isUrl } from "../utils/utils";

type TeamFlagProps = {
  team: Team;
  width?: string;
  className?: string;
};
const TeamFlag = (props: TeamFlagProps) => {
  const { team, width, className = undefined } = props;

  return (
    <img
      style={{ width: width }}
      draggable="false"
      className={className ? className : "rounded-sm max-h-full"}
      alt={`${team.name} flag`}
      src={
        isUrl(team.flagCode)
          ? team.flagCode
          : team.flagCode.length < 4
          ? `https://flagicons.lipis.dev/flags/4x3/${team.flagCode}.svg`
          : `/images/team-logos/${team.flagCode}.svg`
      }
    />
  );
};

export default TeamFlag;

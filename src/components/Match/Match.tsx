import {MatchI} from "../MatchTracker/MatchTracker.tsx"
// @ts-ignore
import './Match.css'
import TeamLogo from "../../assets/TeamLogo.tsx";

const Match = ({match}: { match: MatchI }) => {

    let status = '';
    if (match.status === 'Ongoing') status = 'Live'; else if (match.status === 'Scheduled') status = 'Match preparing'; else status = 'Finished'

    return (
        <div className={`match ${match.status.toLowerCase()}`}>
            <div className="first team"><TeamLogo/>{match.awayTeam.name}</div>
            <div className="status-container">
                <div className="score">{`${match.awayScore} : ${match.homeScore}`}</div>
                <div className={`status ${match.status.toLowerCase()}`}>{status}</div>
            </div>
            <div className="second team">{match.homeTeam.name}<TeamLogo/></div>
        </div>
    );
};

export default Match;
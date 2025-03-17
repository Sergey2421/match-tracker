import Match from "../Match/Match.tsx";
// @ts-ignore
import './MatchTracker.css'

type Team = {
    name: string;
    place: number;
    players: unknown;
    points: number;
    total_kills: number;
}

export interface MatchI {
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    status: string;
    title: string;
}

const MatchTracker = ({matches}: {matches: MatchI[]}) => {

    return (
        <div className="match-tracker">
            <div className="matches">
                {matches?.map((match: MatchI) => <Match key={match.title} match={match} />)}
            </div>
        </div>
    );
};

export default MatchTracker;
interface TeamInterface {
  position: number;
  name: string;
  PL: number;
  W: number;
  L: number;
  D: number;
  GF: number;
  GD: number;
  Pts: number;
}

interface MatchResult {
  team1: string;
  team2: string;
  goals: { team1: number; team2: number };
}

let teams: TeamInterface[] = [
  { position: 1, name: "Team1", PL: 0, W: 0, L: 0, D: 0, GF: 0, GD: 0, Pts: 0 },
  { position: 1, name: "Team2", PL: 0, W: 0, L: 0, D: 0, GF: 0, GD: 0, Pts: 0 },
  { position: 1, name: "Team3", PL: 0, W: 0, L: 0, D: 0, GF: 0, GD: 0, Pts: 0 },
  { position: 1, name: "Team4", PL: 0, W: 0, L: 0, D: 0, GF: 0, GD: 0, Pts: 0 },
];

// Input Data
let matchResult: MatchResult[] = [
  { team1: "Team1", team2: "Team2", goals: { team1: 1, team2: 3 } },
  { team1: "Team3", team2: "Team4", goals: { team1: 5, team2: 1 } },
  { team1: "Team2", team2: "Team3", goals: { team1: 0, team2: 3 } },
  { team1: "Team1", team2: "Team4", goals: { team1: 4, team2: 3 } },

  // { team1: "Team1", team2: "Team2", goals: { team1: 2, team2: 3 } },
  // { team1: "Team3", team2: "Team4", goals: { team1: 3, team2: 2 } },
  // { team1: "Team2", team2: "Team3", goals: { team1: 2, team2: 3 } },
  // { team1: "Team1", team2: "Team4", goals: { team1: 2, team2: 3 } },
];

const calculateMatchWinner = (res: MatchResult[]): void => {
  res.forEach(({ team1, team2, goals }) => {
    if (goals.team1 > goals.team2) {
      let matchWinner = teams.find((team) => team.name == team1);
      if (matchWinner) {
        matchWinner.PL += 1;
        matchWinner.W += 1;
        matchWinner.Pts += 3;
        matchWinner.GD = goals.team1 - goals.team2;
        if (matchWinner.position > 1) {
          matchWinner.position -= 1;
        }
        console.log(matchWinner, "WINNER");
      }
    } else if (goals.team1 < goals.team2) {
      let matchLoser = teams.find((team) => team.name == team1);
      if (matchLoser) {
        matchLoser.PL += 1;
        matchLoser.position += 1;
        matchLoser.L += 1;
        matchLoser.GD = goals.team2 - goals.team1;
        console.log(matchLoser, "LOSER");
      }
      if (goals.team2 > goals.team1) {
        let matchWinner = teams.find((team) => team.name == team2);
        if (matchWinner) {
          matchWinner.PL += 1;
          matchWinner.W += 1;
          matchWinner.Pts += 3;
          matchWinner.GD = goals.team1 - goals.team2;
          if (matchWinner.position > 1) {
            matchWinner.position -= 1;
          }
          console.log(matchLoser, "Team 2 Winner");
        }
      }
    }
  });

  // return teams.sort((p1, p2) => p2.Pts - p1.Pts);
};

console.log(calculateMatchWinner(matchResult));
// console.log(teams[2]);

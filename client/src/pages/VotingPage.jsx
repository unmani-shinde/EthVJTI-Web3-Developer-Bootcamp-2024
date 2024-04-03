import React, { useState } from 'react';

function VotingPage() {
  const [candidates, setCandidates] = useState([]);
  const [makeVisible, setMakeVisible] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [winner, setWinner] = useState([]);

  const connectWeb3 = async () => {
    setMakeVisible(true);
  };

  const castVote = async () => {
    try {
      console.log("You have successfully cast your vote!");
    } catch (error) {
      console.error('Error casting vote:', error);
    }
  };

  const getWinner = () => {
    console.log("The winner is: Address, Name, Vote Count ");
    setWinner(["address", "name", "voteCount"]);
  };

  return (
    <div className="container">
      <h1 className="title">Voting DApp</h1>
      <button className="button" onClick={connectWeb3}>Connect to Web3</button>
      {makeVisible && (
        <div>
          <h2 className="subtitle">Connected Account: {"Account Address"}</h2>
          <h3 className="subtitle">Candidates:</h3>
          <ul>
            {candidates.map((candidate, index) => (
              <li key={index} className="candidate-item">
                <strong>{candidate[1]}</strong>: {candidate[2]} - Votes: {candidate[3]}
              </li>
            ))}
          </ul>
          <h3 className="subtitle">Cast Your Vote:</h3>
          <select className="select" value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
            <option value={0}>Select a candidate</option>
            {candidates.map((candidate, index) => (
              <option key={index} value={candidate[0]}>{candidate[2]}</option>
            ))}
          </select>
          <button className="button" onClick={castVote} disabled={selectedCandidate === 0}>Vote</button>
          <button className="button" onClick={getWinner}>Get Winner</button>
          {winner && (
            <div>
              <h3 className="subtitle">Winner:</h3>
              <p><strong>{winner[1]}</strong>: {winner[2]} - Votes: {winner[3]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VotingPage;

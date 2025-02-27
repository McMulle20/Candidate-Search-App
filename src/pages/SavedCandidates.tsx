import { useState, useEffect } from "react";
import type Candidate from "../interfaces/Candidate.interface";
import "../index.css";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  // Function to remove a candidate
  const handleReject = (id: number) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="potential-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <h2>No potential candidates saved yet.</h2>
      ) : (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.name || "Avatar"} className="candidate-avatar" />
                </td>
                <td>
                  {candidate.name ? (
                    <>
                      {candidate.name} <i>({candidate.login})</i>
                    </>
                  ) : (
                    <i>{candidate.login}</i>
                  )}
                </td>
                <td>{candidate.location || "Unknown"}</td>
                <td>
                  {candidate.email ? (
                    <a href={`mailto:${candidate.email}`} className="candidate-email">{candidate.email}</a>
                  ) : (
                    "Not available"
                  )}
                </td>
                <td>{candidate.company || "Not available"}</td>
                <td>{candidate.bio || "No bio available"}</td>
                <td>
                  <button className="reject-button" onClick={() => handleReject(candidate.id)}>➖</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;

import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import type Candidate from "../interfaces/Candidate.interface";
import "../index.css";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    return JSON.parse(localStorage.getItem("savedCandidates") || "[]");
  });

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const results = await searchGithub(); // Fetch candidates from GitHub API
        setCandidates(results);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const saveCandidate = () => {
    if (candidates.length > 0) {
      setSavedCandidates([...savedCandidates, candidates[currentIndex]]);
      nextCandidate();
    }
  };

  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCandidates([]); // No more candidates
    }
  };

  if (candidates.length === 0) {
    return <h2>No more candidates available.</h2>;
  }

  const candidate = candidates[currentIndex];

  return (
    <div className="candidate-container">
      <h1>Candidate Search</h1>
      {candidate && (
        <>
          <div className="candidate-card">
            <img src={candidate.avatar_url} alt={candidate.name} />
            <h2>
              {candidate.name} <i>({candidate.login})</i>
            </h2>
            <p>Location: {candidate.location || "Unknown"}</p>
            <p>Email: {candidate.email || "Not available"}</p>
            <p>Company: {candidate.company || "Not available"}</p>
            <p>Bio: {candidate.bio || "No bio available"}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>

          {/* Button container is now outside the candidate-card */}
          <div className="button-container">
            <button className="minus" onClick={nextCandidate}>
              -
            </button>
            <button className="plus" onClick={saveCandidate}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateSearch;

import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchCandidates = async () => {
    try {
      const results = await searchGithub(); // No query passed here since the API doesn't use it
      setCandidates(results);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {
    fetchCandidates(); // Fetch candidates when the component mounts
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <h1 className="pageHeader">Candidate Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a candidate..."
        className="searchInput"
      />
      {candidates.length === 0 ? (
        <h2>No candidates found. Try searching for something else.</h2>
      ) : (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              <h3>{candidate.name}</h3>
              <p>{candidate.bio || 'No bio available'}</p> {/* Handle missing bio */}
              <p>{candidate.company || 'No company info'}</p> {/* Handle missing company */}
              <p>{candidate.email || 'No email available'}</p> {/* Handle missing email */}
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CandidateSearch;

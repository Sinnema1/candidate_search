// src/pages/CandidateSearch.tsx
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRandomCandidate();
  }, []);

  const fetchRandomCandidate = async () => {
    setLoading(true);
    setError(null);

    try {
      let validCandidate = null;

      while (!validCandidate) {
        const candidates = await searchGithub();
        if (candidates.length === 0) {
          throw new Error('No candidates found.');
        }

        const basicCandidate = candidates[0];
        const detailedCandidate = await searchGithubUser(basicCandidate.login);

        if (
          detailedCandidate &&
          detailedCandidate.name &&
          detailedCandidate.login &&
          detailedCandidate.location &&
          detailedCandidate.avatar_url &&
          detailedCandidate.email &&
          detailedCandidate.html_url &&
          detailedCandidate.company
        ) {
          validCandidate = detailedCandidate;
          setCandidate(validCandidate);
        }
      }
    } catch (err) {
      setError('An error occurred while fetching candidate data.');
      setCandidate(null);
    } finally {
      setLoading(false);
    }
  };

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    }
    fetchRandomCandidate();
  };

  const skipCandidate = () => {
    fetchRandomCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {candidate && !loading && !error && (
        <CandidateCard candidate={candidate} onSave={saveCandidate} onSkip={skipCandidate} />
      )}
      {!candidate && !loading && !error && <p>No candidates available to display.</p>}
    </div>
  );
};

export default CandidateSearch;
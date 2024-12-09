import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";
import { FaMinusCircle } from "react-icons/fa";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(
      localStorage.getItem("savedCandidates") || "[]"
    );
    setSavedCandidates(candidates);
  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.login !== login
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
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
          {savedCandidates.length > 0 ? (
            savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={candidate.name || candidate.login}
                    className="avatar"
                  />
                </td>
                <td>
                  {candidate.name} <em>({candidate.login})</em>
                </td>
                <td>{candidate.location || "N/A"}</td>
                <td>
                  {candidate.email ? (
                    <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{candidate.company || "N/A"}</td>
                <td>{candidate.bio || "N/A"}</td>
                <td>
                  <FaMinusCircle
                    className="reject-button"
                    onClick={() => removeCandidate(candidate.login)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No candidates have been saved.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;

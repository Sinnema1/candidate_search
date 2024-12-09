import type Candidate from "../interfaces/Candidate.interface";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

type CandidateCardProps = {
  candidate: Candidate;
  onSave?: (() => void) | null;
  onSkip?: (() => void) | null;
};

const CandidateCard = ({ candidate, onSave, onSkip }: CandidateCardProps) => {
  return (
    <>
      {candidate?.login ? (
        <section className="candidate-card">
          <figure>
            <img
              src={candidate.avatar_url}
              alt={candidate.name || candidate.login}
              className="avatar"
            />
          </figure>
          <article className="candidate-info">
            <h2>
              {candidate.name} <em>({candidate.login})</em>
            </h2>
            <p>
              <strong>Location:</strong> {candidate.location || "N/A"}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {candidate.email ? (
                <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong>Company:</strong> {candidate.company || "N/A"}
            </p>
            <p>
              <strong>Bio:</strong> {candidate.bio || "N/A"}
            </p>
          </article>
          <aside className="icons">
            <FaUserCheck
              style={{ fontSize: "40px", color: "green", cursor: "pointer" }}
              onClick={() => onSave?.()}
            />
            <FaUserTimes
              style={{ fontSize: "40px", color: "red", cursor: "pointer" }}
              onClick={() => onSkip?.()}
            />
          </aside>
        </section>
      ) : (
        <h1 style={{ margin: "16px 0" }}>No candidate data available.</h1>
      )}
    </>
  );
};

export default CandidateCard;

// Stats.jsx
export function Stats({ number, label }) {
  return (
    <div className="stat">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

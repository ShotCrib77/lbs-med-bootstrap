export default function LbsButton({ text, func }) {
  return (
    <button className="btn bg-lbs-yellow fw-bold p-2 mt-3 rounded-5 lbs-btn" onClick={func}>
      {text}
    </button>
  );
};
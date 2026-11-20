export default function GuaranteeSeal() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 100 100"
      role="img"
      aria-label="100% Wyze satisfaction guarantee"
      style={{ flexShrink: 0 }}
    >
      <circle cx="50" cy="50" r="48" style={{ fill: "var(--primary)" }} />
      <circle
        cx="50"
        cy="50"
        r="41"
        fill="none"
        stroke="#fff"
        strokeDasharray="2 3"
      />
      <g fill="#fff" textAnchor="middle">
        <text x="50" y="47" fontSize="20" fontWeight="700">
          100%
        </text>
        <text x="50" y="60" fontSize="8">
          Wyze satisfaction
        </text>
        <text x="50" y="70" fontSize="8">
          guarantee
        </text>
      </g>
    </svg>
  );
}

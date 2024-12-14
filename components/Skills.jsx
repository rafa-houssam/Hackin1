export default function Skills() {
  return (
    <div className="relative bg-[#BAE7FF] mb-32 py-[70px] z-[5] overflow-hidden">
      {/* Moving Image */}
      <img
        className="absolute top-0 right-0 animate-moveLeftRight"
        src="./images/skills.svg"
        alt="Skills"
      />
    </div>
  );
}

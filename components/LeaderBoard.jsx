import React from "react";
import Image from "next/image";

const Leaderboard = () => {
  // Sample data for the leaderboard
  const leaderboardData = [
    { rank: 1, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 2, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 3, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 4, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 5, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 6, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 7, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 8, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 9, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
    { rank: 10, team: "DATA123", scores: [123, 123, 123, 123, 123, 123], total: 654321 },
  ];

  return (
    <section className="relative pt-24 pb-16 bg-black bg-opacity-80 text-white overflow-hidden" style={{ backgroundImage: "url('/images/bg.svg')" }}>
      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 m-4 mt-20">
        <Image
          src="/images/dh1.svg"
          alt="Top Left Logo"
          width={500}
          height={500}
        />
      </div>

      {/* Top Right Logo */}
      <div className="absolute top-6 right-6 mr-1 mt-16">
        <Image
          src="/images/dh2notword.svg"
          alt="Top Right Logo"
          width={60}
          height={60}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Centered Leaderboard Title Image */}
        <div className="flex justify-center  mb-20">
          <Image
            src="/images/leader_top.svg"
            alt="Leaderboard Title"
            width={100}
            height={100}
          />
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#004555]">
                <th className="py-4 px-2">Rank</th>
                <th className="py-4 px-2">Team</th>
                <th className="py-4 px-2">Challenge 1</th>
                <th className="py-4 px-2">Challenge 2</th>
                <th className="py-4 px-2">Challenge 3</th>
                <th className="py-4 px-2">Challenge 4</th>
                <th className="py-4 px-2">Challenge 5</th>
                <th className="py-4 px-2">Challenge 6</th>
                <th className="py-4 px-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => {
                // Define row colors
                const rowColors = [
                  "#0A0A0A", // Black
                  "#36D9FF", // Blue
                  "#00728D", // Cyan
                  "#004555", // Dark Greenish Cyan
                ];
                const isTransparent = index > 3 && index % 2 === 0;
                const backgroundColor = isTransparent ? "transparent" : rowColors[index] || "#121C1C";

                return (
                  <tr
                    key={index}
                    className={`${
                      index < 3 ? "font-bold text-[#fcfcfc]" : ""
                    }`}
                    style={{ backgroundColor }}
                  >
                    <td className="py-4 px-2">
                      {index < 3 ? (
                        
                        <Image
                          src={`/images/medal-${index + 1}.svg`}
                          alt={`Medal ${index + 1}`}
                          width={24}
                          height={24}
                          className="ml-4"
                        />
                      ) : (
                        `#${entry.rank}`
                      )}
                    </td>
                    <td className="py-4 px-2">{entry.team}</td>
                    {entry.scores.map((score, idx) => (
                      <td key={idx} className="py-4 px-2">{score}</td>
                    ))}
                    <td className="py-4 px-2">{entry.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Right Logo */}
      <div className="absolute bottom-6 right-6 mt-10">
        <Image
          src="/images/cse.svg"
          alt="Bottom Right Logo"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default Leaderboard;

import React from "react";

export const Header = () => {
  const titleLetters = [
    { char: "M", color: "#E52521" },
    { char: "a", color: "#FFD700" },
    { char: "r", color: "#43B047" },
    { char: "i", color: "#E52521" },
    { char: "o", color: "#FF8C00" },
    { char: "T", color: "#43B047" },
    { char: "o", color: "#FFD700" },
    { char: "d", color: "#E52521" },
    { char: "o", color: "#FF8C00" },
  ];

  return (
    <div className="space-y-3 text-center">
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl animate-bounce" style={{ animationDelay: "0ms" }}>🍄</span>
        <h1 className="flex mario-title">
          {titleLetters.map((letter, index) => (
            <span
              key={index}
              className="text-5xl font-black tracking-wide"
              style={{
                color: letter.color,
                textShadow: `
                  3px 3px 0px #000,
                  -1px -1px 0px #000,
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  4px 4px 0px rgba(0,0,0,0.3)
                `,
                fontFamily: "'Arial Black', 'Helvetica Bold', sans-serif",
                WebkitTextStroke: "1px #000",
              }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
        <span className="text-4xl animate-bounce" style={{ animationDelay: "150ms" }}>⭐</span>
      </div>

      <p
        className="text-lg font-bold"
        style={{
          color: "#5C4033",
          textShadow: "1px 1px 0px #FFD700",
        }}
      >
        🎮 Let's-a go! Hoàn thành nhiệm vụ thôi nào! 🎮
      </p>
    </div>
  );
};

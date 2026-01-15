"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Play, Squircle } from "lucide-react";

export function ClockCounter() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Função para formatar segundos em HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [hrs, mins, secs].map((v) => (v < 10 ? `0${v}` : v)).join(":");
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive]);

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center gap-8">
      <div
        className={`w-full aspect-square rounded-full bg-white border-24 shadow-inner flex flex-col items-center justify-center relative ${
          isActive ? "border-green-300 shadow-green-400" : "border-border"
        } transition-all`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="font-mono text-muted-foreground uppercase tracking-widest text-sm">
            Count Timer
          </span>

          <span className="text-5xl text-zinc-700 font-bold font-mono">
            {formatTime(seconds)}
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <Button
          onClick={toggleTimer}
          size={"lg"}
          className={`w-full transition-colors ${
            isActive ? "bg-zinc-400" : "bg-green-500"
          }`}
        >
          {isActive ? (
            <>
              <Squircle />
              Pause
            </>
          ) : (
            <>
              <Play />
              Start
            </>
          )}
        </Button>

        <Button
          onClick={resetTimer}
          variant={"outline"}
          className="text-muted-foreground"
        >
          Close Clock In
        </Button>
      </div>
    </div>
  );
}

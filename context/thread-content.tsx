import { Threads } from "@/types/threads";
import { generateThreads } from "@/utils/generate-dommy-date";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const ThreadsContext = createContext<Threads[]>([]);

export const ThreadsProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Threads[]>([]);

  useEffect(() => {
    setThreads(generateThreads);
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};

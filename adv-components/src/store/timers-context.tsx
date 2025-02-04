import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type Action = AddTimerAction | StartTimersAction | StopTimersAction;

const timersReducer = (state: TimersState, action: Action): TimersState => {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            duration: action.payload.duration,
          },
        ],
      };
    case "START_TIMERS":
      return { ...state, isRunning: true };
    case "STOP_TIMERS":
      return { ...state, isRunning: false };
    default:
      return state;
  }
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const value: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData: Timer) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={value}>{children}</TimersContext.Provider>
  );
}

export function useTimersContext() {
  // TODO: validation before useContext
  const ctx = useContext(TimersContext);

  if (ctx === null) {
    throw new Error("Something went wrong!");
  }

  return ctx;
}

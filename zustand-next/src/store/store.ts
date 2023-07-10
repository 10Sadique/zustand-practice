import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  token: string;
}

interface Actions {
  setToken: (token: string) => void;
}

export const useAuthStore = create<Store & Actions>()(
  persist(
    (set) => ({
      token: "",
      setToken: (str) => set({ token: str }),
    }),
    {
      name: "jwt",
    }
  )
);

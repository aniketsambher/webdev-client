"use client";

import { create } from "zustand";
import usersJson from "../database/users.json";
import type { User } from "../account/AccountContext";

type UsersStore = {
  users: User[];
  addUser: (user: User) => User;
  updateUser: (user: User) => void;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: usersJson,
  // Returns the new user so the People table can enroll them
  addUser: (user) => {
    const newUser = { ...user, _id: crypto.randomUUID() };
    set((state) => ({ users: [...state.users, newUser] }));
    return newUser;
  },
  updateUser: (user) =>
    set((state) => ({
      users: state.users.map((u) => (u._id === user._id ? user : u)),
    })),
}));

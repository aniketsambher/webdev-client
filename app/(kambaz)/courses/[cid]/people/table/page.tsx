"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { isEnrolled, useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { useUsersStore } from "../../../../store/usersStore";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const updateUser = useUsersStore((state) => state.updateUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [user, setUser] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) => isEnrolled(enrollments, usr._id, courseId));

  // A new person is created and enrolled in this course
  const addPerson = () => {
    const newUser = addUser(user);
    enroll(newUser._id, courseId);
    setUser(emptyUser);
  };
  const updatePerson = () => {
    updateUser(user);
    setUser(emptyUser);
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {isFaculty && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            id="wd-people-first-name"
            placeholder="First name"
            className="rounded border border-neutral-300 px-3 py-1.5"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            id="wd-people-last-name"
            placeholder="Last name"
            className="rounded border border-neutral-300 px-3 py-1.5"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <button
            type="button"
            id="wd-people-add-click"
            className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={addPerson}
          >
            Add
          </button>
          <button
            type="button"
            id="wd-people-update-click"
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            onClick={updatePerson}
            disabled={!user._id}
          >
            Update
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {isFaculty && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {enrolled.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{usr.firstName}</span>{" "}
                <span className="wd-last-name">{usr.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">{usr.role}</td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
              {isFaculty && (
                <td className="p-2 text-nowrap">
                  <button
                    type="button"
                    className="wd-people-edit-click rounded bg-yellow-400 px-2 py-0.5 text-sm"
                    onClick={() => setUser(usr)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="wd-people-delete-click ms-2 rounded bg-red-600 px-2 py-0.5 text-sm text-white"
                    onClick={() => unenroll(usr._id, courseId)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

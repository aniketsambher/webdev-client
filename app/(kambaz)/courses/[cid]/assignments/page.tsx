"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore, type Assignment } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const assignments = allAssignments.filter(
    (assignment) => assignment.course === courseId,
  );
  // The assignment waiting for a Yes/No in the delete dialog
  const [toDelete, setToDelete] = useState<Assignment | null>(null);

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {isFaculty && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <button
              id="wd-add-assignment"
              type="button"
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
            >
              <FaPlus /> Assignment
            </button>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={isFaculty ? () => setToDelete(assignment) : undefined}
          />
        ))}
      </ul>
      {toDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-delete-assignment-dialog"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
            </div>
            <p className="m-0 px-4 py-3">
              Are you sure you want to remove {toDelete.title}?
            </p>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                onClick={() => setToDelete(null)}
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                id="wd-delete-assignment-no"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteAssignment(toDelete._id);
                  setToDelete(null);
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                id="wd-delete-assignment-yes"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

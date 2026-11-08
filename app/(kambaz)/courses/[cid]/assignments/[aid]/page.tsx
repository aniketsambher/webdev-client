"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

const input = "w-full rounded border border-neutral-300 px-3 py-1.5";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const isNew = assignmentId === "new";
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

  // Edit a local draft so Cancel leaves the store untouched
  const [assignment, setAssignment] = useState<Assignment | undefined>(() => {
    if (isNew) return { ...emptyAssignment, course: courseId };
    const found = findAssignment(assignmentId);
    return found?.course === courseId ? found : undefined;
  });

  if (!assignment) {
    return (
      <div id="wd-assignments-editor">
        <p>Assignment not found in this course.</p>
        <Link href={`/courses/${courseId}/assignments`} id="wd-cancel">
          Back to Assignments
        </Link>
      </div>
    );
  }

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className="mb-1 block font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        className={`${input} mb-2`}
        value={assignment.title}
        disabled={!isFaculty}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <div id="wd-assignment-id" className="mb-3 text-sm text-neutral-600">
        Assignment id: {assignmentId}
      </div>
      <textarea
        id="wd-description"
        className={`${input} mb-3`}
        rows={8}
        value={assignment.description}
        disabled={!isFaculty}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <div className="grid grid-cols-[140px_1fr] items-center gap-3">
        <label htmlFor="wd-points" className="text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          className={input}
          value={assignment.points}
          disabled={!isFaculty}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
        />
        <label htmlFor="wd-due-date" className="text-right">
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          className={input}
          value={assignment.due}
          disabled={!isFaculty}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        />
        <label htmlFor="wd-available-from" className="text-right">
          Available from
        </label>
        <input
          id="wd-available-from"
          type="date"
          className={input}
          value={assignment.available}
          disabled={!isFaculty}
          onChange={(e) =>
            setAssignment({ ...assignment, available: e.target.value })
          }
        />
        <label htmlFor="wd-available-until" className="text-right">
          Until
        </label>
        <input
          id="wd-available-until"
          type="date"
          className={input}
          value={assignment.until ?? ""}
          disabled={!isFaculty}
          onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
        />
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${courseId}/assignments`}
          id="wd-cancel"
          className="rounded bg-neutral-200 px-4 py-2 text-sm text-black no-underline"
        >
          Cancel
        </Link>
        {isFaculty && (
          <button
            type="button"
            id="wd-save"
            onClick={save}
            className="rounded bg-red-600 px-4 py-2 text-sm text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

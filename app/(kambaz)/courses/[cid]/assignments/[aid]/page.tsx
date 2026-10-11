import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
            <div className="mb-3">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
      </div>
      <div className="mb-3">
        <textarea
          id="wd-description"
          rows={4}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className="w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
      </div>
      <div className="mb-3 flex items-start gap-4">
        <label htmlFor="wd-points" className="w-40 shrink-0 pt-1.5 text-right text-sm">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
      </div>
            <div className="mb-3 flex items-start gap-4">
        <label htmlFor="wd-group" className="w-40 shrink-0 pt-1.5 text-right text-sm">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5 text-sm"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-3 flex items-start gap-4">
        <label htmlFor="wd-display-grade-as" className="w-40 shrink-0 pt-1.5 text-right text-sm">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5 text-sm"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>

      <div className="mb-3 flex items-start gap-4">
        <label htmlFor="wd-submission-type" className="w-40 shrink-0 pt-1.5 text-right text-sm">
          Submission Type
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
          >
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </select>
          <div className="mb-3 text-sm font-semibold">Online Entry Options</div>
          <div className="mb-3">
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            <label htmlFor="wd-text-entry" className="text-sm">Text Entry</label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="wd-website-url" className="me-2" />
            <label htmlFor="wd-website-url" className="text-sm">Website URL</label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            <label htmlFor="wd-media-recordings" className="text-sm">Media Recordings</label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="wd-student-annotation" className="me-2" />
            <label htmlFor="wd-student-annotation" className="text-sm">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            <label htmlFor="wd-file-upload" className="text-sm">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-start gap-4">
        <span className="w-40 shrink-0 pt-1.5 text-right text-sm">Assign</span>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
          />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
          />
          <div className="flex gap-2">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                className="w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                className="w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-semibold">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={4}
          className="w-full rounded border border-neutral-300 px-3 py-1.5 text-sm"
        />
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded bg-neutral-200 px-4 py-2 text-sm text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
      </div>
  );
}
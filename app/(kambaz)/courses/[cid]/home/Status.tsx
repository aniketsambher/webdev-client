import { FaBell, FaBullhorn, FaChartBar, FaCheckCircle, FaHome, FaMagic, FaStream } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";


export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <GrAddCircle className="me-1 shrink-0 text-base" />  Import Existing Content
      </button>
            <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <GrAddCircle className="me-1 shrink-0 text-base" />  Import from Commons
      </button>
       <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaHome className="me-2" /> Choose Home Page
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaStream className="me-2" /> View Course Stream
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaBullhorn className="me-2" /> New Announcement
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaChartBar className="me-2" /> New Analytics
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaBell className="me-2" /> View Course Notifications
      </button>
      <button
        id="wd-ai-status"
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaMagic className="me-2" /> Sample action
      </button>
      {/* ...repeat full-width bordered buttons for Import from Commons,
             Choose Home Page, and the rest... */}
    </div>
  );
}
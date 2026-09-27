import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of the assignment. The assignment should be a single HTML page that uses CSS and JavaScript. The assignment should be submitted as a link to the landing page of the assignment." />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
        </tbody>
      </table>
      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECTS">PROJECTS</option>
      </select>
      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <select id="wd-display-grade-as">
        <option value="PERCENTAGE">Percentage</option>
        <option value="POINTS">Points</option>
      </select>
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type">
        <option value="ONLINE">ONLINE</option>
        <option value="OFFLINE">OFFLINE</option>
      </select>
      <label htmlFor="wd-online-entry-options">Online Entry Options</label>
      <select id="wd-online-entry-options">
        <option id="wd-text-entry" value="TEXT_ENTRY">TEXT ENTRY</option>
        <option id="wd-website-url" value="WEBSITE_URL">Website URL</option>
        <option id="wd-media-recordings" value="MEDIA_RECORDINGS">Media Recordings</option>
        <option id="wd-student-annotation" value="STUDENT_ANNOTATION">Student Annotation</option>
        <option id="wd-file-upload" value="FILE_UPLOAD">File Upload</option>
      </select>
      <h4>Assign</h4>
      <label htmlFor="wd-assign-to">Assign to</label>
      <input id="wd-assign-to" defaultValue="Everyone" />
      <br />
      <label htmlFor="wd-due-date">Due</label>
      <input type="date" id="wd-due-date" />
      <br />
      <label htmlFor="wd-available-from">Available from</label>
      <input type="date" id="wd-available-from" />
      <br />
      <label htmlFor="wd-available-until">Until</label>
      <input type="date" id="wd-available-until" />
      <br />

      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">Cancel</Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">Save</Link>

      {/* Complete on your own — see checklist below */}
    </div>
  );
}
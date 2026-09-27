import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input id ="wd-search-assignment" placeholder="Search for Assignments" />
      <input id="wd-add-assignment-group" type="button" value="+Group" />
      <input id="wd-add-assignment" type="button" value="+Assignment" />
      <br/>
        <h6 id="wd-assignments-title">Assignments 40% of Total</h6>
        <input type="button" value="+" />
        <br />
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="1"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am
           | Due May 13 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="2"
          title="A2 - CSS + Bootstrapped"
          details="Multiple Modules | Not available until May 13 at 12:00am |
Due May 20 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="3"
          title="A3 - JavaScript + React"
          details="Multiple Modules | Not available until May 20 at 12:00am |
Due May 27 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
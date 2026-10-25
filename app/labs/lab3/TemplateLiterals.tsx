export default function TemplateLiterals() {
  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  const result2 = `2 + 3 = ${2 + 3}`;
  const username = "alice";
  const myname = "aniket";
  const published = false;
  const myown = `${myname}'s course is  ${published?"published":"not published"}`;
  const greeting1 = `Welcome home ${username}`;
  const loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  const rs101Published = true;
  const courseStatus = `RS101 published: ${rs101Published ? "Yes" : "No"}`;
  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      result1 = {result1}
      <br />
      result2 = {result2}
      <br />
      greeting1 = {greeting1}
      <br />
      greeting2 = {greeting2}
      <br />
      courseStatus = {courseStatus}
      <hr />
      myowngreeting = {myown}
    </div>
  );
}
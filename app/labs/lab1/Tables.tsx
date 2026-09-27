export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">TypeScript</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Node.js</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Express</td>
            <td align="center">3/24/21</td>
            <td align="right">86</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">MongoDB</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">REST APIs</td>
            <td align="center">4/7/21</td>
            <td align="right">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89.6</td>
          </tr>
        </tfoot>
      </table>
      <h4>My Weekly Schedule</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Day</th>
            <th align="center">Activity</th>
            <th align="center">Time</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td align="center">Web Development Lecture</td>
            <td align="center">10:00 AM</td>
            <td align="right">2</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td align="center">Gym</td>
            <td align="center">7:00 AM</td>
            <td align="right">1</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td align="center">Web Development Lab</td>
            <td align="center">2:00 PM</td>
            <td align="right">3</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td align="center">Study Group</td>
            <td align="center">6:00 PM</td>
            <td align="right">2</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td align="center">Project Work</td>
            <td align="center">1:00 PM</td>
            <td align="right">4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td align="right">12</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
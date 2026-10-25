export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const course = { course: "RS101", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <pre>
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
      course = {JSON.stringify(course)}
      </pre>
    </div>
  );
}
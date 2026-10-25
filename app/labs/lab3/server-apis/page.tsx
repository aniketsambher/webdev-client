import ServerTimeDemo from "./ServerTimeDemo";
import EnvDemo from "./EnvDemo";
import RequestHeadersDemo from "./RequestHeadersDemo";
import WeatherDemo from "./WeatherDemo";
import VisitCounterDemo from "./VisitCounterDemo";
import ChildProcessDemo from "./ChildProcessDemo";
import OsDemo from "./OsDemo";

export default function ServerApis() {
  return (
    <div id="wd-server-apis">
      <h2>Server-Only APIs</h2>
      <ServerTimeDemo />
      <OsDemo />
      <EnvDemo />
      <RequestHeadersDemo />
      <WeatherDemo />
      <VisitCounterDemo />
      <ChildProcessDemo />
    </div>
  );
}
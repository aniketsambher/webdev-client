import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import BoxModel from "./BoxModel";
import ForegroundColors from "./ForegroundColors";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Corners from "./Corners";
import Display from "./Display";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
import Flex from "./Flex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr">
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p >
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-ai-id-selector">
          This AI sample paragraph uses its own ID selector to get
          a unique look and feel
        </p>
        <p id="wd-id-selector-3">
          Here&apos;s another paragraph 3 using a different ID and a
          different look and feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This AI sample paragraph uses its own class
        </p>
        <h4 className="wd-ai-class-selector">
          This AI sample heading shares the same class as the paragraph above
        </h4>
        <p className="wd-my-class">
          This paragraph uses my own class
        </p>
        <h4 className="wd-my-class">
          This heading shares the same class as the paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
              <br />
              <span className="wd-selector-5">
                This span is my extra child of the paragraph
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This span is a sample descendant of .wd-selector-1
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="wd-selector-3" id="wd-id-conflict">
          This paragraph demonstrates a conflict in ID selectors
        </p>
      </div>
      <div>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          AI sample: tag, class, and id rules all set this background — the id (red) wins
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
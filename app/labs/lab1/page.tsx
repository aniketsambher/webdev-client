import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import Images from "./Images";
import Forms from "./forms/Forms";
import AnchorTag from "./AnchorTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import HighlightedParagraph from "./HighLightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />  
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraph />
      <HighlightedBoxLab />
      <AnchorTag />
    </div>
  );
}
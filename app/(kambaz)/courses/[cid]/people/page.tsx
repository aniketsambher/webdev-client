import PeopleTable from "./table/page";

export default function People({ params }: { params: Promise<{ cid: string }> }) {
  return (
    <>
      <h4>People</h4>
      <PeopleTable params={params} />
    </>
  );
}

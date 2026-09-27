import Link from "next/link";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item">
        <h5 className="wd-assignment-title">
            <Link href={`/courses/${cid}/assignments/${aid}`} className="wd-assignment-link">
                {title}
            </Link>
        </h5>
        <p className="wd-assignment-details">{details}</p>
    </li>
  );
}

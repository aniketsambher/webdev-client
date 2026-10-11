"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";
import Piazza from "./piazza/page";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const assignments = `/courses/${cid}/assignments`;
  const piazza = `/courses/${cid}/piazza`;
  const zoom = `/courses/${cid}/zoom`;
  const quizzes = `/courses/${cid}/quizzes`;
  const grades = `/courses/${cid}/grades`;
  const people = `/courses/${cid}/people`;

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link
        href={home}
        id="wd-course-home-link"
        className={
          pathname === home
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>
      <Link
        href={modules}
        id="wd-course-modules-link"
        className={
          pathname === modules
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Modules
      </Link>
            <Link
        href={piazza}
        id="wd-course-modules-link"
        className={
          pathname === piazza
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Piazza
      </Link>
            <Link
        href={zoom}
        id="wd-course-modules-link"
        className={
          pathname === zoom
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Zoom
      </Link>
      {/* ...Piazza and Zoom, same pattern... */}
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={
          pathname === assignments || pathname.startsWith(assignments + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>
            <Link
        href={quizzes}
        id="wd-course-assignments-link"
        className={
          pathname === quizzes || pathname.startsWith(quizzes + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Quizzes
      </Link>
            <Link
        href={grades}
        id="wd-course-assignments-link"
        className={
          pathname === grades || pathname.startsWith(grades + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Grades
      </Link>
            <Link
        href={people}
        id="wd-course-assignments-link"
        className={
          pathname === people || pathname.startsWith(people + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        People
      </Link>
      {/* ...Quizzes, Grades, People, same pattern... */}
      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
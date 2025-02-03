import { type FC, type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

/* Defined children props with ReactNode */
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

/* Defined children props with PropsWithChildren */
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;

import style from "./heroSec.module.css";
const isAdmin = true;
const canEdit = true;
export default function HeroSection() {
  return (
    <div>
      <p className={style.heroSecHeading}>
        {isAdmin ? "welcome admin" : "welcome user"}
        <div>{isAdmin && canEdit ? "edit" : "view"}</div>
      </p>
      <span className={style.herSubHeading}>this is our super react app</span>
    </div>
  );
}

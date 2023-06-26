import css from "./button.module.css";

const Button = ({ text }) => {
  return (
    <div>
      <button className={css.btn}>{text}</button>
    </div>
  );
};
export default Button;

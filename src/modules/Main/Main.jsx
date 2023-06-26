import css from "./main.module.css";
const Main = () => {
  return (
    <main>
      <section className={css.sectionMain}>
        <div>
          <p className={css.text}>A HAIR SALON FOR MEN IN KYIV</p>
        </div>
        <div className={css.mainWrapper}>
          <h1 className={css.title}>BarberShop</h1>
          <p className={css.text}>
            Ми експерти в модних зачісках для чоловіків. Працюємо швидко,
            обережно і зі смаком
          </p>
        </div>
      </section>
    </main>
  );
};
export default Main;

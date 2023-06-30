import css from "./masters-list.module.css";
import image from "../../image/master-2x.jpg";

const MastersList = () => {
  return (
    <main>
      <section className={css.sectionMasters}>
        <div className={css.mastersWrapper}>
          <p className={css.text}>ЛАТИНСЬКОЮ "БАРБА" ОЗНАЧАЄ "БОРОДА"</p>
          <h2 className={css.title}>Наші майстри</h2>
          <ul className={css.listMasters}>
            <li>
              <img src={image} alt="Oles Kozackiy" width="320" />
              <div className={css.descriptionWrap}>
                <h3>Олесь Козацький</h3>
                <p>екстрім барбер</p>
              </div>
            </li>
            <li>
              <img src={image} alt="Boris Siriy" width="320" />
              <div className={css.descriptionWrap}>
                <h3>Борис Сірий</h3>
                <p>екстрім барбер</p>
              </div>
            </li>
            <li>
              <img src={image} alt="Vsevolod Nestayko" width="320" />
              <div className={css.descriptionWrap}>
                <h3>Всеволод Нестайко</h3>
                <p>екстрім барбер</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default MastersList;

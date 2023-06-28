import Button from "../../shared/components/Button/Button";

import css from "./price-list.module.css";

const PriceList = () => {
  return (
    <main>
      <section className={css.sectionPrice}>
        <p className={css.text}>ПРОВЕДИ ЧАС В КОМПАНІЇ СПРАВЖНІХ МАЙСТРІВ</p>
        <h2 className={css.priceTitle}>Послуги та ціни</h2>
        <div className={css.listWrapper}>
          <ul className={css.priceList}>
            <li className={css.priceItem}>
              Чоловіча стрижка<span className={css.value}> від 300 грн</span>
            </li>
            <li className={css.priceItem}>
              Стрижка бороди<span className={css.value}> від 200 грн</span>
            </li>
            <li className={css.priceItem}>
              Стрижка вусів <span className={css.value}> від 200 грн</span>
            </li>
            <li className={css.priceItem}>
              Гоління небезпечною бритвою
              <span className={css.value}> від 200 грн</span>
            </li>
          </ul>
          <ul className={css.priceList}>
            <li className={css.priceItem}>
              Стрижка у стажера<span className={css.value}> від 50 грн</span>
            </li>
            <li className={css.priceItem}>
              Стрижка під насадку
              <span className={css.value}> від 200 грн</span>
            </li>
            <li className={css.priceItem}>
              Дитяча стрижка(до 12 років)
              <span className={css.value}> від 300 грн</span>
            </li>
            <li className={css.priceItem}>
              Камуфлювання сивини
              <span className={css.value}> від 200 грн</span>
            </li>
          </ul>
        </div>
        <Button text="ОНЛАЙН-ЗАПИС" />
      </section>
    </main>
  );
};
export default PriceList;

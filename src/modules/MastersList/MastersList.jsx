import css from "./masters-list.module.css";
// import image from "../../image/master-2x.jpg";

const MastersList = () => {
  return (
    <main>
      <section className={css.sectionMasters}>
        <div className={css.mastersWrapper}>
          <p className={css.text}>ЛАТИНСЬКОЮ "БАРБА" ОЗНАЧАЄ "БОРОДА"</p>
          <h2 className={css.title}>Наші майстри</h2>
          <ul className={css.listMasters}>
            <li>
              <img
                src="https://media.istockphoto.com/id/509661306/photo/stylish-retro-bearded-barber-with-a-bald-male-client.jpg?s=612x612&w=0&k=20&c=936nt2MoTJn1AIxdvScMcE_wPVHNCnO544OQ-6zN9Lc="
                alt="Oles Kozackiy"
                width="255"
                load="lazy"
              />
              <div className={css.descriptionWrap}>
                <h3>Олесь Козацький</h3>
                <p>екстрім барбер</p>
              </div>
            </li>
            <li>
              <img
                src="https://i.pinimg.com/736x/13/f1/b0/13f1b01b8aa25dd60816270064b47825.jpg"
                alt="Boris Siriy"
                width="255"
              />
              <div className={css.descriptionWrap}>
                <h3>Борис Сірий</h3>
                <p>екстрім барбер</p>
              </div>
            </li>
            <li>
              <img
                src="https://c1.wallpaperflare.com/preview/211/622/415/administration-adult-barber-black-and-white.jpg"
                alt="Vsevolod Nestayko"
                width="255"
              />
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

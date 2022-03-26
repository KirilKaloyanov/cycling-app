import React, { Fragment } from "react";
import iconPresentation from "./common/iconPresentation";
import plan from "./images/plan.jpg";
import masterPlan from "./images/masterPlan.jpg";
import Card from "./common/card";

export default function Page() {
  let icon = iconPresentation;
  return (
    <Fragment>
      <div className="grid grid--1x2 quote_background_color">
        <div className="quote_container">
          <div className="quote">
            Никое пътуване със сто мили в час не ще ни направи по-силни,
            по-щастливи или по-мъдри.
          </div>
          <div className="author">– Джон Ръскин, 1856</div>
        </div>
        <img
          className="img_plan"
          src={plan}
          alt="Cyclists visiting small village"
        />
      </div>
      <div className="grid grid--1x2">
        <div className="text text_block">
          <h2 className="heading_block">Защо е нужен велосипеден план</h2>
          Значението на колоезденето като транспорт нараства, което налага
          подобряването на условията за придвижване с велосипед както в
          градовете така и между населените места. В различните европейски
          страни напредъкът по отношение на политиките за насърчаване на
          велотранспорт значително се различава. Не всички държави са възприели
          колоезденето като отделна тема, която има нужда от целенасочен подход
          за планиране и прилагане на политики на национално равнище. Само някои
          държави са дефинирали национални веломрежи, а транснационалните
          маршрути налагат необходимостта от координирано развитие между
          държавите. Същевременно, страни, които развиват национална велосипедна
          политика като Австрия извеждат процеса на европейско равнище чрез
          инициативата за разработване на Пан-европейски мастър план за
          колоездене (
          <a
            href="https://thepep.unece.org/sites/default/files/2021-06/MASTERPLAN_2021-05-20-II_BF%203%20June_0.pdf"
            target="_blank"
            rel="noreferrer"
          >
            The PEP Master Plan for Cycling Promotion
          </a>
          ), които бе възприет във Виена на 5-ата среща на високо равнище за
          Транспорт, Здравеопазване и Околна среда на Икономическата комисия за
          Европа към ООН през май 2021 г.
        </div>
        <img
          className="img_Mplan"
          src={masterPlan}
          alt="Pan-European Master Plan for Cycling Promotion cover page"
        />
      </div>
      <div className="block_offset">
        <h2 className="heading">Какво имаме в България</h2>
        <div className="text text_column">
          В България планирането и развитието на велосипедния транспорт не е
          застъпено на национално равнище и в страната ни не са правени опити за
          систематизиране на възможностите, ограниченията и перспективите за
          посрещане на нуждите на колоездачите освен на местното общинско
          равнище. С настоящия Национален велосипеден план се цели въвеждането
          на координиран подход на национално равнище, който да адресира
          подобряването на условията за придвижване с велосипед.
          <br />
          Темата за развитието на колоезденето се разполага в различни сектори
          на националното управление и затова не е възможно една институция да
          отговаря за планирането и прилагането на адекватни действия за
          развитие на велотранспорта. Затова със заповед на Министъра на туризма
          на 8 юли 2021 г. се създава на работна група с участие на
          представители на институциите и неправителствения сектор.
        </div>
      </div>
      <div className="block_offset">
        <h2 className="heading">Как искаме да напреднем</h2>
        <div className="text text_column">
          Основна задача на работната група е изготвянето и приемане на
          Национален велосипеден план съгласно добрите практики в партньорския
          обмен по международен проект ‘Policies, plans and promotion for more
          people cycling in the Danube Region, финансиран по програма INTERREG -
          Danube Transnational Program. Другата основна задача е изготвянето на
          насоки за планиране и създаване на мрежа от национални велосипедни
          маршрути, която да е свързана с националните мрежи на страните от
          Дунавския регион. Резултатът от тази задача е ГИС модел на Схема на
          национална мрежа от велосипедни маршрути, която фиксира международните
          велосипедни маршрути, точките на свързване на веломрежата на България
          със съседните Дунавски страни и предложения за трасета на национални и
          някои регионални маршрути.
        </div>
      </div>
      <div className="block_offset">
        <h2 className="section heading">
          Презентации от срещите на работната група
        </h2>
        <h3 className="date">24 ноември 2020</h3>
        <h3 className="meeting_heading">
          Въведение в планирането на велосипедни политики
        </h3>
        <div className="card_container">
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/velopolitiki.pdf"
            author="д-р Кирил Калоянов"
            title="Планиране на велосипедни политики на национално ниво"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/NationalDemand.pdf"
            author="Здравко Василев"
            title="Търсене на велосипедни маршрути от български туристи"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/ForeignDemand.pdf"
            author="Деян Кателиев"
            title="Търсене на велосипедни маршрути от чуждестранни туристи"
          />
          <Card
            link="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG1/pravna.ramka.pdf"
            author="арх. Петя Донева"
            title="Правна рамка на националния велосипеден план"
          />
        </div>
        <hr />
        <h3 className="section date">29 юни 2021</h3>
        <h3 className="meeting_heading">
          Велосипедни политики в страните от Дунавския регион
        </h3>
        <div className="card_container">
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Status.pdf"
            author="Радостина Петрова"
            title="Преглед на велополитики в България и в партньорските страни"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Slovenia.pdf"
            author="Gregor Steklačič"
            title="Slovenia: Cycling development in the last 10 years"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Hungary.pdf"
            author="Miklòs Berencsi"
            title="Cycling governance, infrastructure, tourism and funding in
            Hungary"
          />
          <Card
            link="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG2/intr.pdf"
            author="д-р Кирил Калоянов"
            title="Национален велосипеден план"
          />
          <Card
            link="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG2/SUB.pdf"
            author="Васил Маджирски"
            title="Национална схема на велосипедни маршрути"
          />
        </div>
        <hr />
        <h3 className="section date">25 ноември 2021</h3>
        <h3 className="meeting_heading">
          Визия на национален велосипеден план
        </h3>
        <div className="card_container">
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/BYPAD.pdf"
            author="арх. Петя Донева и Радостина Петрова"
            title="Одит на велосипедни политики по метода BYPAD"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/vision.pdf"
            author="арх. Петя Донева"
            title="Визия за политики за велосипеден транспорт, туризъм и спорт"
          />
          <Card
            link="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/velo.pdf"
            author="Радостина Петрова"
            title="Велосипедна инфарструктура извън урбанизирани територии в
            България"
          />
        </div>
      </div>
    </Fragment>
  );
}
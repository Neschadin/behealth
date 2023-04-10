import { Laptop } from "~/assets/CustomIcon/Laptop";
import { MUILink } from "./MUILink";
import { Heart } from "~/assets/CustomIcon/Heart";
import { Shield } from "~/assets/CustomIcon/Shield";
import { HeadPhones } from "~/assets/CustomIcon/HeadPhones";

export const ADVANTAGES_LIST = [
  {
    title: "Зручність",
    description:
      "Отримайте медичну консультацію зручним для вас часом та місцем. Немає потреби витрачати час на поїздки до лікаря або чекати в черзі.",
  },
  {
    title: "Доступність",
    description:
      "Онлайн сервіси доступні для людей, які проживають в віддалених регіонах або мають обмежені можливості мобільності. Також, онлайн особливо корисний для людей, які потребують консультацій із спеціалістами, яких вони не можуть знайти у своєму районі.",
  },
  {
    title: "Ефективність",
    description:
      "Консультації які відбуваються онлайн дозволяють лікареві проводити їх більш ефективно. Також, вони зменшують час очікування для пацієнтів.",
  },
  {
    title: "Вартість",
    description:
      "Пацієнт з легкістю обирає та підраховує бюджет на медичні витрати, також онлайн консультації та прийоми не потребують додаткових витрат на поїздки та тимчасове перебування або проживання у незнайомому місті.",
  },
];

export const WHY_PEOPLE_CHOOSE_BEHEALTH = {
  title: "Чому люди обирають beHealth",
  description:
    "Світ навколо нас активно діджиталізується і стає доступним на відстані одного натиску. beHealth доступний у вашому смартфоні чи компʼютері у будь-якому браузері. З ним медицина для українців стане більш доступною, зрозумілою та зручною.",
  link: <MUILink text="Дізнатися більше" path="/" />,
  arrayItems: [
    {
      icon: (
        <Laptop
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Доступно усюди",
      description:
        "Усе, що вам потрібно, це будь який технічний пристрій з доступом до інтернету.",
    },
    {
      icon: (
        <Heart
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Безкоштовно",
      description:
        "Повний функціонал нашого онлайн сервісу є повністю безкоштовним для пацієнтів.",
    },
    {
      icon: (
        <Shield
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Конфіденційно",
      description:
        "Піклуємося та гарантуємо Вам конфіденційність даних. Ваші  медичні дані у повній безпеці.",
    },
    {
      icon: (
        <HeadPhones
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      title: "Підтримка 24/7",
      description:
        "Наш центр підтримки працює без вихідних, двадцять чотири години на добу.",
    },
  ],
};

import Lesson1 from "../typescript/Lesson1";
import Lesson2 from "../typescript/Lesson2";
import Lesson3 from "../typescript/Lesson3";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";

export const blogComponents = [
  {
    title: "GitHub Actions Kullanarak Site Yayınlamak (cPanel)",
    url: "github-actions-kullanarak-site-yayinlamak",
    date: "01 Ekim, 2024",
    categories: ["GitHub", "cPanel", "workflow", "deploy "],
    component: Blog1,
  },
  {
    title:
      "Redux ve Redux-Saga ile Asenkron Veri Yönetimi: Adım Adım Uygulamalı",
    url: "redux-ve-redux-saga-ile-asenkron-veri-yonetimi",
    date: "06 Aralık, 2024",
    categories: ["redux", "saga", "asenkron", "middleware "],
    component: Blog2,
  },
  {
    title: "TypeScript Masterclass: Adım Adım Öğren, Projede Uygula",
    url: "typescript-masterclass-adim-adim-ogren-projede-uygula",
    date: "4 Haziran, 2025",
    categories: ["typescript"],
    lesson: "TYPESCRIPT",
    subData: [
      {
        title: "TypeScript'e Giriş: Temeller ve İlk Uygulama",
        url: "typescripte-giris-temeller-ve-ilk-uygulama",
        date: "4 Haziran, 2025",
        component: Lesson1,
      },
      {
        title: "TypeScript Temel Tipler: string, array, enum ve daha fazlası",
        url: "typescript-temel-tipler-string-array-enum-ve-daha-fazlasi",
        date: "4 Haziran, 2025",
        component: Lesson2,
      },
      {
        title: "Fonksiyonlarda TypeScript Kullanımı",
        url: "fonksiyonlarda-typescript-kullanimi",
        date: "9 Haziran, 2025",
        component: Lesson3,
      },
    ],
    component: Blog2,
  },
];

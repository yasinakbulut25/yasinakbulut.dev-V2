/* eslint-disable react/no-unescaped-entities */
import CodeBlockUI from "../../components/ui/CodeBlockUI";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import { Helmet } from "react-helmet";
import { blogComponents } from "../blog/blogs";

function Lesson2() {
  const textColorClass = "text-gray-900 dark:text-slate-400";
  const lesson = blogComponents.find((b) => b.lesson === "TYPESCRIPT");
  const blog = lesson.subData[1];
  const metaDescription =
    "TypeScript, JavaScript’in tüm değer türlerini statik tiplerle tanımlamamıza olanak tanır. Bu, kodun hataya daha az açık olmasını sağlar.";

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <link
          rel="canoncial"
          href={`https://yasinakbulut.dev/tr/blogs/${blog.url}`}
        />
        <meta
          property="og:url"
          content={`https://yasinakbulut.dev/tr/blogs/${blog.url}`}
        />
      </Helmet>
      <article className="content-html flex flex-col gap-4 pb-8 lg:pt-0 pt-8">
        <Title>
          TypeScript Temel Tipler: string, array, enum ve daha fazlası
        </Title>

        <SubTitle>2.1 Temel Tipler Nedir?</SubTitle>
        <Text>
          TypeScript, JavaScript’in tüm değer türlerini statik tiplerle
          tanımlamamıza olanak tanır. Bu, kodun hataya daha az açık olmasını
          sağlar.
        </Text>

        <Text>
          <b>Temel Veri Tipleri:</b>
        </Text>
        <table className="text-sm w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2 text-left">Tip</th>
              <th className="p-2 text-left">Açıklama</th>
              <th className="p-2 text-left">Örnek</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">string</td>
              <td className="p-2">Metin değeri</td>
              <td className="p-2">"Hello"</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">number</td>
              <td className="p-2">Sayı değeri</td>
              <td className="p-2">42, 3.14</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">boolean</td>
              <td className="p-2">true veya false</td>
              <td className="p-2">true</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">null, undefined</td>
              <td className="p-2">Boş değerler</td>
              <td className="p-2">null, undefined</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">any</td>
              <td className="p-2">Her türlü değer olabilir (kaçınılmalı)</td>
              <td className="p-2">let a: any = 5;</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">unknown</td>
              <td className="p-2">Türü bilinmeyen değer (daha güvenli any)</td>
              <td className="p-2">let u: unknown = "X"</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">void</td>
              <td className="p-2">Fonksiyon geriye değer döndürmez</td>
              <td className="p-2">function log(): void {}</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2">never</td>
              <td className="p-2">Asla gerçekleşmeyen durum</td>
              <td className="p-2">
                function fail(): never {"{"} throw ... {"}"}
              </td>
            </tr>
          </tbody>
        </table>

        <SubTitle>2.2 TypeScript ile Değişken Tanımı</SubTitle>
        <CodeBlockUI
          code={`let userName: string = "Yasin";
let age: number = 26;
let isOnline: boolean = true;`}
          language="ts"
        />

        <SubTitle>2.3 array ve tuple</SubTitle>
        <Text>
          <b>Dizi (Array):</b>
        </Text>
        <CodeBlockUI
          code={`const numbers: number[] = [1, 2, 3];
const names: string[] = ["Ali", "Ayşe"];

// Alternatif
const numbersAlt: Array<number> = [1, 2, 3];`}
          language="ts"
        />

        <Text>
          <b>Tuple:</b> Sıralı, sabit uzunlukta farklı türlerden dizi
        </Text>
        <CodeBlockUI
          code={`let person: [string, number] = ["Yasin", 26];`}
          language="ts"
        />

        <SubTitle>2.4 enum – Sabit Değer Listesi</SubTitle>
        <CodeBlockUI
          code={`enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

const role: UserRole = UserRole.Admin;`}
          language="ts"
        />
        <Text>
          ✅ Özellikle UI’de rol, durum, tema gibi sabitler için kullanılır.
        </Text>

        <SubTitle>2.5 any ve unknown Farkı</SubTitle>
        <table className="text-sm w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2 text-left">Tip</th>
              <th className="p-2 text-left">Açıklama</th>
              <th className="p-2 text-left">Güvenlik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">any</td>
              <td className="p-2">Her şeyi kabul eder, kontrol yok</td>
              <td className="p-2">❌ Tehlikeli</td>
            </tr>
            <tr>
              <td className="p-2">unknown</td>
              <td className="p-2">Önce kontrol gerek</td>
              <td className="p-2">✅ Daha güvenli</td>
            </tr>
          </tbody>
        </table>
        <CodeBlockUI
          code={`let val: unknown = "merhaba";

if (typeof val === "string") {
  console.log(val.toUpperCase()); // Güvenli
}`}
          language="ts"
        />

        <SubTitle>2.6 void ve never</SubTitle>
        <Text>
          <b>void:</b> Geriye değer döndürmeyen fonksiyon
        </Text>
        <CodeBlockUI
          code={`function logMessage(msg: string): void {
  console.log(msg);
}`}
          language="ts"
        />

        <Text>
          <b>never:</b> Fonksiyon hiçbir zaman tamamlanmaz
        </Text>
        <CodeBlockUI
          code={`function throwError(): never {
  throw new Error("Bir hata oluştu!");
}`}
          language="ts"
        />

        <SubTitle>Uygulama Örneği: Kullanıcı Kartı</SubTitle>
        <Text>Amaç: Temel tipleri içeren bir bileşen oluşturmak</Text>
        <CodeBlockUI
          code={`// types/UserCardProps.ts
export type UserCardProps = {
  name: string;
  age: number;
  isPremium: boolean;
  interests: string[];
};`}
          language="tsx"
        />

        <CodeBlockUI
          code={`// components/UserCard.tsx
import { UserCardProps } from "../types/UserCardProps";

export default function UserCard({ name, age, isPremium, interests }: UserCardProps) {
  return (
    <div className="p-4 border rounded">
      <h2>{name} ({age})</h2>
      <p>{isPremium ? "🌟 Premium Üye" : "Ücretsiz Üye"}</p>
      <ul>
        {interests.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}`}
          language="tsx"
        />

        <CodeBlockUI
          code={`// App.tsx
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <UserCard
      name="Yasin"
      age={26}
      isPremium={true}
      interests={["React", "TypeScript", "Next.js"]}
    />
  );
}`}
          language="tsx"
        />

        <SubTitle>Alıştırma / Mini Ödev</SubTitle>
        <ul className={textColorClass}>
          <li>
            Kendi adını, yaşını, premium durumunu ve hobilerini alan bir bileşen
            oluştur
          </li>
          <li>Hobileri boş dizi olarak ver</li>
          <li>
            <code>age</code> değerini <code>string</code> olarak ver ve
            TypeScript hatasını gözlemle
          </li>
          <li>
            <code>interests: string[] | undefined</code> yaparak opsiyonel hale
            getir
          </li>
        </ul>

        <SubTitle>Bölüm Özeti</SubTitle>
        <table className="text-sm w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2 text-left">Konu</th>
              <th className="p-2 text-left">Açıklama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">string, number, boolean</td>
              <td className="p-2">Temel tipler</td>
            </tr>
            <tr>
              <td className="p-2">array, tuple</td>
              <td className="p-2">Dizi ve sıralı karma değer</td>
            </tr>
            <tr>
              <td className="p-2">enum</td>
              <td className="p-2">Sabit değer listesi</td>
            </tr>
            <tr>
              <td className="p-2">any, unknown</td>
              <td className="p-2">Her şey olabilir, dikkatli olunmalı</td>
            </tr>
            <tr>
              <td className="p-2">void, never</td>
              <td className="p-2">Fonksiyon geri dönüşleri için özel tipler</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default Lesson2;

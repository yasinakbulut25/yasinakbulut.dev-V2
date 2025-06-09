/* eslint-disable react/no-unescaped-entities */
import CodeBlockUI from "../../components/ui/CodeBlockUI";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import { Helmet } from "react-helmet";
import { blogComponents } from "../blog/blogs";

function Lesson3() {
  const textColorClass = "text-gray-900 dark:text-slate-400";
  const lesson = blogComponents.find((b) => b.lesson === "TYPESCRIPT");
  const blog = lesson.subData[2];
  const metaDescription =
    " JavaScript’te yanlış parametre verilse bile derleyici ses çıkarmaz. Hatalar runtime’da fark edilir. TypeScript burada devreye girer";

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
          Bölüm 3: Fonksiyonlarda TypeScript Kullanımı – Detaylı Öğretici
          Anlatım
        </Title>

        <SubTitle>Neden Bu Konu Önemli?</SubTitle>
        <CodeBlockUI
          language="js"
          code={`function greet(name) {
  return name.toUpperCase();
}

greet("Yasin");  // ✅
greet(123);      // ❌ Runtime hatası!`}
        />

        <Text>
          ❗ JavaScript’te yanlış parametre verilse bile derleyici ses çıkarmaz.
          Hatalar runtime’da fark edilir. TypeScript burada devreye girer.
        </Text>

        <Text>
          <SubTitle>✅ TypeScript ile Fonksiyon Yazmanın Amaçları:</SubTitle>
          <ul className={textColorClass}>
            <li>Parametre türlerini açıkça belirtmek</li>
            <li>Dönüş tipini tanımlamak</li>
            <li>Compile-time hatası almak</li>
            <li>Kodun niyetini ve güvenliğini artırmak</li>
          </ul>
        </Text>

        <SubTitle>3.1 Fonksiyon Tipi Tanımlama (Temel)</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`function greet(name: string): string {
  return \`Merhaba, \${name.toUpperCase()}!\`;
}`}
        />
        <CodeBlockUI
          language="ts"
          code={`greet("Yasin"); // ✅
greet(123);     // ❌ TS Error`}
        />

        <SubTitle>3.2 Arrow Function ile Tip Kullanımı</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`const greet = (name: string): string => {
  return \`Selam, \${name}\`;
};`}
        />
        <Text>➡️ Alternatif:</Text>
        <CodeBlockUI
          language="ts"
          code={`const greet: (name: string) => string = (name) => {
  return \`Selam, \${name}\`;
};`}
        />

        <SubTitle>3.3 Opsiyonel Parametreler (?)</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`function sayHi(name?: string): string {
  return \`Merhaba, \${name ?? "Ziyaretçi"}!\`;
}`}
        />
        <CodeBlockUI
          language="ts"
          code={`sayHi();         // Merhaba, Ziyaretçi!
sayHi("Yasin");  // Merhaba, Yasin!`}
        />

        <SubTitle>3.4 Varsayılan Parametreler</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`function multiply(a: number, b: number = 2): number {
  return a * b;
}`}
        />
        <CodeBlockUI
          language="ts"
          code={`multiply(3);     // 6
multiply(3, 4);  // 12`}
        />

        <SubTitle>3.5 Rest Parametreler (...)</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}`}
        />
        <CodeBlockUI
          language="ts"
          code={`sumAll(1, 2, 3);      // 6
sumAll(10, 20, 30);   // 60`}
        />

        <SubTitle>
          3.6 Callback Fonksiyonları ve Fonksiyon Parametre Tipi
        </SubTitle>
        <CodeBlockUI
          language="ts"
          code={`function handleClick(callback: () => void): void {
  callback();
}`}
        />
        <CodeBlockUI
          language="ts"
          code={`handleClick(() => {
  console.log("Tıklandı!");
});`}
        />

        <SubTitle>3.7 Fonksiyon Tipini Önceden Tanımlama</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;`}
        />

        <SubTitle>
          Gerçek Dünya Örneği: Hesap Makinesi Yardımcı Fonksiyonu
        </SubTitle>
        <CodeBlockUI
          language="ts"
          code={`export type Operation = "add" | "subtract" | "multiply" | "divide";

export function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Bilinmeyen işlem türü");
  }
}`}
        />
        <CodeBlockUI
          language="tsx"
          code={`const result = calculate(10, 5, "multiply"); // 50`}
        />

        <SubTitle>React Bileşenlerinde Fonksiyon Tipi Kullanımı</SubTitle>
        <CodeBlockUI
          language="ts"
          code={`type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CustomButton({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Tıkla</button>;
}`}
        />

        <SubTitle>Mini Ödev / Uygulama</SubTitle>
        <ul className={textColorClass}>
          <li>
            `getFullName(first: string, last?: string): string` fonksiyonu yaz.
          </li>
          <li>`logNumbers(...nums: number[]): void` fonksiyonu yaz.</li>
          <li>
            `handleInput(callback: (value: string) =&gt; void): void` fonksiyonu
            yaz.
          </li>
          <li>`calculate()` fonksiyonuna yeni literal ekle: `mod`.</li>
        </ul>

        <SubTitle>Bölüm Özeti</SubTitle>
        <table className="text-sm w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2 text-left">Yapı</th>
              <th className="p-2 text-left">Açıklama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">
                <code>param: type</code>
              </td>
              <td className="p-2">Parametre tipi</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>(): returnType</code>
              </td>
              <td className="p-2">Fonksiyon dönüş tipi</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>param?: type</code>
              </td>
              <td className="p-2">Opsiyonel parametre</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>param = default</code>
              </td>
              <td className="p-2">Varsayılan parametre</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>(...args: type[])</code>
              </td>
              <td className="p-2">Rest parametre</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>callback: () =&gt; void</code>
              </td>
              <td className="p-2">Fonksiyon parametresi</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>React.MouseEvent</code>
              </td>
              <td className="p-2">React event tipi</td>
            </tr>
          </tbody>
        </table>

        <Text>
          <SubTitle>✅ Kazanımlar</SubTitle>
          <ul className={textColorClass}>
            <li>Tip güvenli fonksiyonlar yazma</li>
            <li>Opsiyonel, varsayılan ve rest parametreleri doğru kullanma</li>
            <li>Fonksiyonları başka fonksiyonlara parametre olarak geçirme</li>
            <li>React bileşenlerinde event fonksiyonlarına doğru tip verme</li>
          </ul>
        </Text>
      </article>
    </>
  );
}

export default Lesson3;

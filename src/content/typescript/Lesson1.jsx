/* eslint-disable react/no-unescaped-entities */
import CodeBlockUI from "../../components/ui/CodeBlockUI";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";

function Lesson1() {
  const textColorClass = "text-gray-900 dark:text-slate-400";

  return (
    <article className="content-html flex flex-col gap-4 pb-8 lg:pt-0 pt-8">
      <Title>TypeScript'e Giriş: Temeller ve İlk Uygulama</Title>

      <SubTitle>1.1 TypeScript Nedir?</SubTitle>
      <Text>
        <b>TypeScript</b>, Microsoft tarafından geliştirilen, JavaScript'in tüm
        özelliklerini kapsayan ancak statik tip desteğiyle geliştirilen bir üst
        dildir. Yani:
        <ul className={textColorClass}>
          <li>JavaScript’in superset’idir (üst kümesi)</li>
          <li>.ts uzantılı dosyalar kullanılır</li>
          <li>Derlenerek JavaScript’e dönüşür</li>
          <li>
            Modern editörlerde otomatik tamamlama, hata öncesi uyarılar, güçlü
            refactoring imkanı sağlar
          </li>
        </ul>
      </Text>

      <SubTitle>1.2 Neden TypeScript Kullanmalıyız?</SubTitle>
      <Text>
        TypeScript, JavaScript'te karşılaşılan bazı problemleri daha proje
        derlenmeden önce yakalayarak geliştiricinin daha güvenli kod yazmasına
        yardımcı olur:
      </Text>
      <div className={textColorClass}>
        <Text>
          ❌ <b>undefined is not a function</b> gibi belirsiz runtime hataları →
          ✅ <b>Compile-time</b> hataları ile erken uyarı
        </Text>
        <Text>
          ❌ Karmaşık yapılarda tip takibi zor → ✅ Otomatize edilmiş açık tip
          sistemi
        </Text>
        <Text>
          ❌ Refactoring risklidir → ✅ Tip desteğiyle güvenli refactoring
        </Text>
        <Text>
          ❌ IDE yardımı sınırlı → ✅ IntelliSense, autocompletion ve yerleşik
          dökümantasyon desteği
        </Text>
      </div>

      <Text>
        <b>Özellikle büyük React/Next.js projelerinde:</b>
        <ul className={textColorClass}>
          <li>Hata oranını düşürür</li>
          <li>Developer deneyimini artırır</li>
          <li>Ekip çalışmasında okunabilirliği artırır</li>
        </ul>
      </Text>

      <SubTitle>1.3 TypeScript Nasıl Kurulur?</SubTitle>
      <Text>
        <b>React Projesi:</b>
      </Text>
      <CodeBlockUI
        code={`npx create-react-app my-app --template typescript
# veya mevcut projeye:
npm install --save-dev typescript @types/react @types/node`}
        language="bash"
      />

      <Text>
        <b>Next.js Projesi:</b>
      </Text>
      <CodeBlockUI
        code={`npx create-next-app@latest my-next-app
# İlk çalıştırmada tsconfig.json ve .ts dosyaları otomatik oluşur`}
        language="bash"
      />

      <SubTitle>1.4 tsconfig.json – Ayarlar Dosyası</SubTitle>
      <Text>
        TypeScript'in nasıl derleneceğini belirleyen ayarların tutulduğu
        dosyadır.
      </Text>
      <CodeBlockUI
        code={`{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "strict": true,
    "jsx": "preserve",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`}
        language="ts"
      />
      <Text>
        <b>Önemli Ayarlar:</b>
        <ul className={textColorClass}>
          <li>
            <b>strict</b>: Tüm tip güvenlik kurallarını aktif eder (önerilir)
          </li>
          <li>
            <b>jsx</b>: React kullanıyorsan <code>react</code> veya
            <code>preserve</code>
          </li>
          <li>
            <b>esModuleInterop</b>: CommonJS modüllerle uyum sağlar
          </li>
        </ul>
      </Text>

      <SubTitle>1.5 İlk TypeScript Dosyası</SubTitle>
      <Text>
        Basit bir fonksiyon yazalım ve parametre ile dönüş tiplerini
        tanımlayalım:
      </Text>
      <CodeBlockUI
        code={`function greet(name: string): string {
  return \`Hello, \${name.toUpperCase()}!\`;
}

console.log(greet("Yasin"));`}
        language="ts"
      />
      <Text>
        Bu örnekte <code>name: string</code> ve <code>: string</code> dönüş tipi
        ile hem giriş hem çıkış tipi güvence altına alınmış olur.
      </Text>

      <SubTitle>Mini Uygulama: “React Selamla Bileşeni”</SubTitle>
      <Text>
        Amaç: Basit bir TypeScript bileşeni oluşturup props tipini tanımlamak.
      </Text>

      <CodeBlockUI
        code={`// components/Greeting.tsx
type GreetingProps = {
  name: string;
};

export default function Greeting({ name }: GreetingProps) {
  return <h2>Hello, {name.toUpperCase()}!</h2>;
}`}
        language="tsx"
      />

      <CodeBlockUI
        code={`// App.tsx
import Greeting from "./components/Greeting";

export default function App() {
  return <Greeting name="Yasin" />;
}`}
        language="tsx"
      />

      <SubTitle>Özet</SubTitle>
      <div>
        <table className="text-sm w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2 text-left border-b border-gray-300 dark:border-gray-700">
                Konu
              </th>
              <th className="p-2 text-left border-b border-gray-300 dark:border-gray-700">
                Açıklama
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                TypeScript
              </td>
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                JavaScript + Tip Güvenliği
              </td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                tsconfig.json
              </td>
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                Derleyici ayarları burada tutulur
              </td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                React Bileşenleri
              </td>
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                type veya interface ile props tipi tanımlanır
              </td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                Derleme
              </td>
              <td className="p-2 border-b border-gray-300 dark:border-gray-700">
                .ts / .tsx dosyaları JS’ye dönüştürülür
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default Lesson1;

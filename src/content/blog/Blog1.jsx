/* eslint-disable react/no-unescaped-entities */
import CodeBlockUI from "../../components/ui/CodeBlockUI";
import ImageUI from "../../components/ui/ImageUI";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import CreateFtpAccountImg from "../../assets/blogs/create-ftp-account.png";
import CreateFtpAccountImg2 from "../../assets/blogs/create-ftp-account-2.png";
import GithubActionsKeys from "../../assets/blogs/github-actions-keys.png";
import GithubActionsStatus from "../../assets/blogs/github-actions-status.png";
import { blogComponents } from "./blogs";

function Blog1() {
  const textColorClass = "text-gray-900 dark:text-slate-400";
  const blog = blogComponents[1];

  const code1 = {
    code: `
    name: Deploy to cPanel
  
    on:
      push:
        branches:
          - main # veya ana branch neyse onu yazın
    
    jobs:
      deploy:
        runs-on: ubuntu-latest
    
        steps:
        - name: Checkout code
          uses: actions/checkout@v2
    
        - name: Deploy via FTP
          uses: SamKirkland/FTP-Deploy-Action@4.1.0
          with:
            server: \${{ secrets.FTP_SERVER }}  # GitHub Secrets de belirtilen FTP Server adı ile aynı olmalıdır
            username: \${{ secrets.FTP_USERNAME }}  # GitHub Secrets de belirtilen FTP Username adı ile aynı olmalıdır
            password: \${{ secrets.FTP_PASSWORD }}  # GitHub Secrets de belirtilen FTP Password adı ile aynı olmalıdır
            protocol: ftps  # FTP sunucunuzun desteklediği protokolü seçin
            port: 21  # FTP & açık FTPS portu, gerekirse bu değeri hosting sağlayıcınızın belirttiği doğru port numarasına göre güncelleyin
            local-dir: ./  # Gönderilecek dosyaların bulunduğu yer
            server-dir: ./  # FTP hesabının bağlandığı dizin, bunu kendi cPanel dizininize göre güncelleyebilirsiniz (sonunda / ile bitmeli)
    `,
    language: "yml",
    highlightedLines: [],
  };

  const code2 = {
    code: `
    name: Deploy to cPanel

    on:
      push:
        branches:
          - main # veya ana branch neyse onu yazın
    
    jobs:
      build:
        runs-on: ubuntu-latest
    
        steps:
        - name: Checkout code
          uses: actions/checkout@v2
    
        - name: Install dependencies
          run: npm install
    
        - name: Build project
          run: npm run build  # React projenizin build komutunu çalıştırın
    
        - name: Deploy via FTP
          uses: SamKirkland/FTP-Deploy-Action@4.1.0
          with:
            server: \${{ secrets.FTP_SERVER }}  # GitHub Secrets de belirtilen FTP Server adı ile aynı olmalıdır
            username: \${{ secrets.FTP_USERNAME }}  # GitHub Secrets de belirtilen FTP Username adı ile aynı olmalıdır
            password: \${{ secrets.FTP_PASSWORD }}  # GitHub Secrets de belirtilen FTP Password adı ile aynı olmalıdır
            protocol: ftps  # FTP sunucunuzun desteklediği protokolü seçin
            port: 21  # FTP & açık FTPS portu, gerekirse bu değeri hosting sağlayıcınızın belirttiği doğru port numarasına göre güncelleyin
            local-dir: dist/  # React projenizin build çıktısının olduğu dizin (sonunda / ile bitmeli)
            server-dir: ./  # Projenizi yükleyeceğiniz dizin, bunu kendi cPanel dizininize göre güncelleyin (sonunda / ile bitmeli)
    `,
    language: "yml",
    highlightedLines: ["16:17", "19:20"],
  };

  return (
    <article className="content-html flex flex-col gap-4 pb-8 lg:pt-0 pt-8">
      <Title>GitHub Actions Kullanarak Site Yayınlamak (cPanel)</Title>
      <div className="flex flex-wrap gap-1 transition-colors duration-300 text-slate-500 dark:text-slate-400">
        {blog.categories.map((c, i) => {
          return (
            <span
              className="text-[10px] px-[4px] py-[2px] bg-slate-300/40 dark:bg-slate-600/40 rounded"
              key={i}
            >
              {c}
            </span>
          );
        })}
      </div>
      <Text>
        Web sitenizi sürekli olarak güncel tutmak, özellikle düzenli olarak
        değişiklik yaptığınız bir projede önemli bir konudur. cPanel kullanan
        bir hosting sağlayıcısında web sitenizi GitHub Actions ile otomatik
        olarak güncelleyebilirsiniz. Bu yazıda, GitHub Actions kullanarak
        sitenizi nasıl kolayca yayınlayabileceğinizi adım adım anlatacağım.
      </Text>

      <SubTitle>1. GitHub Deposu Oluşturma</SubTitle>

      <Text>
        Öncelikle, projenizin kaynak kodlarını içeren bir GitHub deposu
        oluşturmanız gerekiyor. Eğer zaten bir GitHub depo mevcutsa bu adımı
        atlayabilirsiniz.
      </Text>

      <ol className={textColorClass}>
        <li>GitHub hesabınıza giriş yapın.</li>
        <li>
          Sağ üst köşedeki <strong>"+"</strong> simgesine tıklayın ve{" "}
          <strong>New repository</strong> seçeneğine tıklayın.
        </li>
        <li>Depo adı, açıklama ve gizlilik ayarlarını yapın.</li>
        <li>
          <strong>Create repository</strong> butonuna tıklayarak depoyu
          oluşturun.
        </li>
      </ol>

      <SubTitle>2. cPanel de FTP Hesabı Oluşturma</SubTitle>

      <Text>
        cPanel üzerinde FTP hesabı oluşturarak, GitHub Actions ile sitenizin
        dosyalarını otomatik olarak sunucunuza yükleyebilirsiniz.
      </Text>
      <ol className={textColorClass}>
        <li>cPanel hesabınıza giriş yapın.</li>
        <li>
          <strong>FTP Accounts</strong> menüsüne gidin.
        </li>
        <li>
          Yeni bir FTP hesabı oluşturma kısmında yeni ftp hesabınız için için
          kullanıcı adı, etki alanı ve güçlü bir parola belirleyin.
        </li>
        <li>
          FTP hesabınızın kök dizinini, sitenizin dosyalarının bulunacağı dizine
          ayarlayın. (<code>public_html</code> veya <code>domain.com</code>).
        </li>
        <li>
          FTP hesabınızı oluşturun ve <strong>FTP Hesapları</strong> listesinde
          oluşturduğunuz ftp hesabı için{" "}
          <strong>FTP İstemcisini Yapılandır</strong> seçin.
        </li>
        <li>
          Açılan detay kısmında <strong>FTP Kullanıcı Adı</strong>,{" "}
          <strong>FTP sunucusu</strong> ve{" "}
          <strong>FTP & açık FTPS portu</strong> bilgilerini göreceksiniz. Bu
          bilgileri sıradaki adımda kullanacağız.
        </li>
      </ol>

      <div className="max-w-[600px] block mx-auto shadow rounded-xl mb-4">
        <ImageUI src={CreateFtpAccountImg} alt="FTP Hesabı Oluşturma" />
        <ImageUI src={CreateFtpAccountImg2} alt="FTP Hesabı Oluşturma" />
      </div>

      <SubTitle>3. GitHub Secrets Ayarları</SubTitle>
      <Text>
        FTP kullanıcı adınızı parolanızı ve ftp sunucunuzu GitHub Secrets olarak
        tanımlamanız gerekiyor. Bu işlem, site dosyalarınızın güvenli bir
        şekilde FTP sunucusuna bağlanmasını sağlar.
      </Text>

      <ul className={textColorClass}>
        <li>
          GitHub reponuza gidin ve <strong>Settings {"> "}</strong>
          <strong>Secrets and variables {"> "}</strong>
          <strong>Actions</strong> yolunu izleyin.
        </li>
        <li>
          <strong>New repository secret</strong> butonuna tıklayın.
        </li>
        <li>
          <strong>Name</strong> alanına <code>FTP_USERNAME</code> yazın, FTP
          kullanıcı adınızı <strong>Secret</strong> alanına yapıştırın ve{" "}
          <strong>Add secret</strong> butonuna tıklayın.
        </li>
        <li>
          Aynı şekilde <code>FTP_PASSWORD</code> adında bir secret daha ekleyin
          ve <strong>FTP parolanızı</strong> secret alanına yapıştırın.
        </li>
        <li>
          Aynı şekilde <code>FTP_SERVER</code> adında bir secret daha ekleyin ve{" "}
          <strong>FTP sunucusunu</strong> secret alanına yapıştırın. Eğer bu
          değeri kullandığınızda deploy sırasında hata alıyorsanız cPanel'e
          girdiğinizde ki domain alanını deneyebilirsiniz. (örn:
          cp27.servername.co)
        </li>
      </ul>

      <div className="max-w-full block mb-4">
        <ImageUI src={GithubActionsKeys} alt="GitHub Actions Secret Keys" />
      </div>

      <SubTitle>4. GitHub Actions Workflow Dosyası Oluşturma</SubTitle>
      <Text>
        Şimdi, GitHub Actions kullanarak FTP üzerinden cPanel'e dosyalarınızı
        yükleyecek bir workflow dosyası oluşturacağız.
      </Text>

      <ul className={textColorClass}>
        <li>
          GitHub deposunun kök dizininde <code>.github/workflows</code> adında
          bir klasör oluşturun.
        </li>
        <li>
          Bu klasör içinde <code>deploy.yml</code> adında bir dosya oluşturun.
        </li>
        <li>
          Aşağıdaki kodu <code>deploy.yml</code> dosyasına yapıştırın:
        </li>
      </ul>

      <CodeBlockUI
        code={code1.code}
        language={code1.language}
        highlightedLines={code1.highlightedLines}
      />

      <SubTitle>4.1. Build Alınıp Deploy Etme</SubTitle>

      <Text>
        Eğer oluşturduğunuz projenin build alındıktan sonra cPanel'e
        gönderilmesi gerekiyorsa <code>deploy.yml</code> dosyasında bunu
        belirtebilirsiniz. Örneğin projenizi React ile geliştirdiyseniz ve
        projenizi cPanele deploy etmek istiyorsanız projenizin deploy sırasında
        build alınması gerekmektedir. Bu işlem için <code>deploy.yml</code>{" "}
        dosyanızı aşağıdaki gibi güncelleyebilirsiniz.
      </Text>

      <CodeBlockUI
        code={code2.code}
        language={code2.language}
        highlightedLines={code2.highlightedLines}
      />

      <SubTitle>5. Workflow'u Test Etme</SubTitle>

      <Text>
        Artık her yeni commit ve push işlemi yaptığınızda, GitHub Actions
        sitenizi otomatik olarak cPanel'deki FTP sunucunuza yükleyecektir. Bunun
        çalıştığından emin olmak için basit bir test yapabilirsiniz.
      </Text>

      <ul className={textColorClass}>
        <li>
          GitHub deposundaki bir dosyada küçük bir değişiklik yapın (örneğin,{" "}
          <code>index.html</code> dosyasını güncelleyin).
        </li>
        <li>Değişiklikleri commit edip push edin.</li>
        <li>
          GitHub reponuzda <strong>Actions</strong> sekmesine giderek işlemin
          başarılı olup olmadığını kontrol edin.
        </li>
      </ul>

      <div className="max-w-[700px] block mx-auto mb-4">
        <ImageUI src={GithubActionsStatus} alt="GitHub Actions Test" />
      </div>

      <Text>
        Başarılı bir işlemde, sitenizin FTP sunucusundaki dosyaları güncellenmiş
        olmalıdır.
      </Text>

      <SubTitle>Sonuç</SubTitle>

      <Text>
        Bu adımları takip ederek, FTP üzerinden GitHub Actions kullanarak cPanel
        üzerinde otomatik dağıtım yapabilirsiniz. Bu süreç, manuel
        güncellemeleri ortadan kaldırarak size zaman kazandırır ve sürekli
        entegrasyon/deploy süreçlerinizi kolaylaştırır.
        <br />
        <br />
        Umarım bu yazı, cPanel'de FTP kullanarak GitHub Actions ile sitenizi
        nasıl yayınlayabileceğinizi anlamanıza yardımcı olmuştur. Sorularınız
        olursa iletişime geçmekten çekinmeyin!
        <br />
        <br />
        Bir diğer yazıda görüşmek üzere 👋
      </Text>
    </article>
  );
}

export default Blog1;

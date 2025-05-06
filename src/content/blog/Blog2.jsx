/* eslint-disable react/no-unescaped-entities */
import CodeBlockUI from "../../components/ui/CodeBlockUI";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import { blogComponents } from "./blogs";

function Blog2() {
  const textColorClass = "text-gray-900 dark:text-slate-400";
  const blog = blogComponents[1];

  return (
    <article className="content-html flex flex-col gap-4 pb-8 lg:pt-0 pt-8">
      <Title>
        Redux ve Redux-Saga ile Asenkron Veri Yönetimi: Adım Adım Uygulamalı
      </Title>
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
      <SubTitle>Redux nedir?</SubTitle>
      <Text>
        <b>Redux</b>, JavaScript uygulamalarında kullanılan bir{" "}
        <b>global state yönetim kütüphanesidir</b>. Uygulamanızdaki veriyi
        merkezi bir yapıda toplar ve bileşenler arasında veri akışını kontrol
        altında tutmanızı sağlar. Örneğin kullanıcı bilgisi, ürün listesi veya
        filtre ayarları gibi farklı bileşenlerde kullanılan veriler tek bir
        Redux store içinde yönetilir.
      </Text>
      <Text>
        React'te `useState` ve `useContext` gibi yöntemlerle lokal state
        yönetimi yapılabilir. Ancak proje büyüdükçe ve sayfalar arası veri
        paylaşımı arttıkça bu yöntemler yetersiz hale gelir. İşte bu noktada
        Redux, daha ölçeklenebilir bir çözüm sunar.
      </Text>

      <SubTitle>Redux-Saga nedir?</SubTitle>
      <Text>
        <b>Redux-Saga</b>, Redux için geliştirilen bir{" "}
        <b>middleware (ara katman)</b> çözümüdür. Özellikle{" "}
        <b>asenkron işlemleri</b> yönetmek amacıyla kullanılır. Örneğin; bir
        API'den veri çekmek, bu sırada loading göstermek, hatayı yakalamak ve
        sonuçları Redux store'a aktarmak gibi tüm süreci Saga ile adım adım
        kontrol edebilirsiniz.
      </Text>
      <Text>
        Redux-Saga'nın en büyük avantajı, <b>generator fonksiyonlar</b>{" "}
        sayesinde asenkron akışı senkron gibi okuyabilmemizdir. Kod daha
        okunabilir, test edilebilir ve genişletilebilir hale gelir.
      </Text>

      <SubTitle>Neden Redux-Saga kullanmalıyız?</SubTitle>
      <ul className={textColorClass}>
        <li>
          🔥 <b>Karmaşık asenkron akışları</b> (veri çekme, iptal etme, gecikme)
          kontrol altında tutar
        </li>
        <li>
          🔁 `cancel`, `retry`, `debounce`, `throttle` gibi{" "}
          <b>gelişmiş akış kontrol senaryolarını</b> destekler
        </li>
        <li>
          🧪 Side-effect yönetimi sayesinde{" "}
          <b>test yazmayı ve hata ayıklamayı</b> kolaylaştırır
        </li>
        <li>
          🧠 Kodun davranışı daha <b>öngörülebilir</b> hale gelir
        </li>
      </ul>

      <SubTitle>Bu yazıda ne öğreneceksiniz?</SubTitle>
      <Text>
        Bu rehberde Redux ve Redux-Saga'nın birlikte nasıl çalıştığını{" "}
        <b>uygulamalı bir örnek proje</b> ile adım adım anlatacağım.
        <br />
        <br />
        Örnek senaryoda, bir blog API'inden veri çekeceğiz. Veri çekme sürecinde
        şu konuları işleyeceğiz:
      </Text>

      <ul className={textColorClass}>
        <li>Redux action, reducer, store yapılarını oluşturmak</li>
        <li>Redux-Saga ile API'den veri çekmek</li>
        <li>Yükleniyor durumu ve hata yönetimi</li>
        <li>React bileşeni içinde Redux verilerini kullanmak</li>
      </ul>

      <Text>Haydi şimdi adım adım başlayalım 👇</Text>

      {/* Görsel placeholder: mimari akış görseli */}

      <SubTitle>1. Proje Hazırlığı</SubTitle>
      <Text>
        Redux, Redux-Saga ve veri çekmek için Axios kütüphanesini projeye dahil
        ediyoruz:
      </Text>
      <CodeBlockUI
        code={`npm install redux react-redux redux-saga axios`}
        language="bash"
      />

      <SubTitle>2. Redux Yapısını Oluşturmak</SubTitle>
      <Text>
        Redux’ta 3 temel yapı vardır: <b>actions</b>, <b>reducers</b>,{" "}
        <b>store</b>. Şimdi bunları tek tek oluşturalım.
      </Text>

      <SubTitle>2.1. Action Types</SubTitle>
      <Text>
        Uygulamamızda kullanılacak veri akışını temsil eden sabit action
        türlerini tanımlıyoruz.
      </Text>
      <CodeBlockUI
        code={`
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
        `}
        language="ts"
      />

      <SubTitle>2.2. Action Creators</SubTitle>
      <Text>
        API çağrısı başlatma, başarılı sonuç alma ve hata yönetimi için üç
        farklı action creator tanımlıyoruz.
      </Text>
      <CodeBlockUI
        code={`
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
        `}
        language="ts"
      />

      <SubTitle>2.3. Reducer</SubTitle>
      <Text>
        Action'lara göre state’i güncelleyen reducer fonksiyonumuzu
        tanımlıyoruz. `loading`, `posts`, ve `error` olmak üzere 3 state
        kontrolü yapılıyor.
      </Text>
      <CodeBlockUI
        code={`
const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
        `}
        language="ts"
      />

      <SubTitle>3. Redux Store ve Saga Ortamı</SubTitle>
      <Text>
        Redux store’u oluşturup `redux-saga` middleware’ini tanımlıyoruz.
        Uygulamanın tüm asenkron iş akışı burada kontrol altına alınır.
      </Text>
      <CodeBlockUI
        code={`
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import postReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  postReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
        `}
        language="ts"
      />

      <SubTitle>4. API ve Saga Yapısı</SubTitle>
      <Text>
        Axios ile veri çekme işlemini gerçekleştirecek API fonksiyonunu
        tanımlıyoruz.
      </Text>
      <CodeBlockUI
        code={`
import axios from 'axios';

export const fetchPostsApi = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');
        `}
        language="ts"
      />

      <SubTitle>5. Worker Saga</SubTitle>
      <Text>
        Bu saga, API isteğini gerçekleştirir ve sonucu Redux’a aktarır.
        Başarılıysa veriyi, hata varsa mesajı reducer’a yollar. İlgili action'ı
        tetikler.
      </Text>
      <CodeBlockUI
        code={`
import { call, put } from 'redux-saga/effects';
import { fetchPostsApi } from '../api';
import { fetchPostsSuccess, fetchPostsFailure } from '../actions';

function* fetchPostsSaga() {
  try {
    const response = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default fetchPostsSaga;
        `}
        language="ts"
      />

      <SubTitle>6. Watcher ve Root Saga</SubTitle>
      <Text>
        `takeLatest` ile yalnızca son tetiklenen isteğin çalışmasını sağlıyoruz.
        Root saga ise tüm watcher'ları çalıştırır.
      </Text>
      <CodeBlockUI
        code={`
import { takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST } from '../actions/types';
import fetchPostsSaga from './fetchPostsSaga';

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default function* rootSaga() {
  yield watchFetchPosts();
}
        `}
        language="ts"
      />
      <Text>
        Redux-Saga’da sadece <b>takeLatest</b> değil, farklı kullanım
        senaryolarına göre tercih edilebilecek birçok watcher efekti vardır:
      </Text>

      <ul className={textColorClass}>
        <li>
          <b>takeEvery</b> – Her tetiklenen action için bir saga başlatır.
          <br />
          <i>
            Kullanım: Günlük log kaydı, bildirim gösterme gibi paralel işler.
          </i>
        </li>

        <li>
          <b>takeLatest</b> – Aynı türde yeni bir action gelirse önceki işlemi
          iptal eder, sadece sonuncusunu çalıştırır.
          <br />
          <i>
            Kullanım: Search bar, form submit gibi son isteğin önemli olduğu
            durumlar.
          </i>
        </li>

        <li>
          <b>takeLeading</b> – Sadece ilk action’ı çalıştırır, sonrakileri
          yoksayar.
          <br />
          <i>
            Kullanım: Tek seferlik tıklamalarda (örneğin: ödeme butonu), spam’ı
            engellemek için.
          </i>
        </li>

        <li>
          <b>debounce</b> – Belirtilen süre içinde başka action gelmezse en
          sonuncuyu çalıştırır.
          <br />
          <i>
            Kullanım: Otomatik arama (search-as-you-type) gibi gecikmeli
            tepkilerde.
          </i>
        </li>

        <li>
          <b>throttle</b> – Belirli aralıklarla gelen action’lardan sadece bir
          tanesini çalıştırır.
          <br />
          <i>
            Kullanım: Scroll, resize gibi yoğun tetiklenen olaylarda performans
            korumak için.
          </i>
        </li>

        <li>
          <b>race</b> – Birden fazla işlemi aynı anda başlatır, ilk tamamlanan
          sonucu üretir.
          <br />
          <i>
            Kullanım: Zaman aşımı senaryolarında (örn: “ya 5 saniyede cevap
            gelirse ya da işlemi iptal et”).
          </i>
        </li>
      </ul>

      <SubTitle>7. Component’te Kullanımı</SubTitle>
      <Text>
        React bileşeni içinde `useDispatch` ile action gönderiyor, `useSelector`
        ile Redux state’ini görüntülüyoruz.
      </Text>
      <CodeBlockUI
        code={`
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../store/actions';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
        `}
        language="tsx"
      />

      <SubTitle>Sonuç</SubTitle>
      <Text>
        Bu yazıda sıfırdan bir Redux ve Redux-Saga mimarisi kurarak, bir API'den
        veri çekme ve asenkron akış yönetimini adım adım inceledik.
        <br />
        Bu yapı, özellikle orta-büyük projelerde veri kontrolünü merkezi bir
        yapı altında tutarak bakım kolaylığı ve test edilebilirlik sağlar.
      </Text>
    </article>
  );
}

export default Blog2;

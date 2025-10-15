import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css';

// 仮のページコンポーネント（別ファイルに分けてもOK）
function Home() { return <div></div>; }
function WebPage() { return <div></div>; }
function OfficePage() { return <div></div>; }
function AppPage() { return <div></div>; }
function ServerPage() { return <div></div>; }
function PythonPage() { return <div></div>; }

function App() {
  const lessons = [
    { img: require("./b.png"), title: "ホームページ作成", text: "自社サイトの作成や、Wordpressの機能拡張、ホームページのお困りごとに対応します。", path: "/web" },
    { img: require("./g.png"), title: "MS Officeサポート", text: "ExcelやAccess、Outlookなどの操作サポートや自動化機能を作成いたします。", path: "/office" },
    { img: require("./y.png"), title: "業務アプリ開発", text: "vb.netやc#使用して、顧客管理や在庫管理などの業務アプリを開発いたします。", path: "/app" },
    { img: require("./w.png"), title: "サーバー構築", text: "AWSやXserverなど環境の作成、MySQLなどのデータベースも作成いたします。", path: "/server" },
    { img: require("./r.png"), title: "Python", text: "Web上のアプリ作成やapi開発、Webサイトからのデータ収集など、多岐にわたる機能を開発いたします。", path: "/python" },
  ];

  return (
    <Router>
      <header>
        <div className="container">
          <div className="header-left">
             <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <p>Portfolio</p>
             </Link>
          </div>
          <div className="header-right">
            {/* <a href="portfolio_iso.pdf" target="_blank" rel="noopener noreferrer">詳細DL</a> */}
            <a href="mailto:zearo109@gmail.com">MAIL</a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <Routes>
        <Route path="/" element={
          <>
            <div className="top-wrapper">
              <div className="container">
                <h1>IsoYusuke&apos;s <br /> Portfolio</h1>
                <p><br /></p>
                <div className="btn-wrapper"></div>
              </div>
            </div>

            <div className="lesson-wrapper">
              <div className="container">
                <div className="heading"></div>
                <div className="lessons">
                  {lessons.map((lesson, i) => (
                    <Link to={lesson.path} key={i}>
                      <div className="lesson">
                        <div className="lesson-icon">
                          <img src={lesson.img} alt={lesson.title} />
                          <p>{lesson.title}</p>
                        </div>
                        <p className="text-contents">{lesson.text}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </>
        } />

        <Route path="/web" element={<WebPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/server" element={<ServerPage />} />
        <Route path="/python" element={<PythonPage />} />
      </Routes>

      <footer>
        <div className="container"></div>
      </footer>
    </Router>
  );
}

export default App;

import { useState } from "react";
import photo from "./my-photo.jpg";

const user = {
  name: "Надежда",
  imageUrl: photo,
  imageSize: 120,
};

function MyApp() {
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  const hour = new Date().getHours();

  let timeGreeting;
  if (hour < 12) {
    timeGreeting = "Доброе утро!";
  } else if (hour < 18) {
    timeGreeting = "Добрый день!";
  } else {
    timeGreeting = "Добрый вечер!";
  }

  return (
    <div className="bg-gray-100 font-[Calibri] p-5 max-w-225 mx-auto">
      <div className="flex items-center gap-7.5 py-10 border-b border-gray-200 flex-wrap">
        <div className="rounded-full overflow-hidden shrink-0 w-30 h-30">
          <img src={user.imageUrl} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-[2.5rem] font-light text-[#1a1a1a] mb-1 tracking-[-0.5px]">
            Надежда
          </h1>
          <p className="text-[1.1rem] text-gray-500 m-0">
            Frontend-разработчик
          </p>
        </div>
      </div>

      <div className="py-10">
        <div className="bg-gray-100 px-5 py-4 rounded-lg mb-6">
          <p className="text-gray-700 m-0 text-[1.1rem]">{timeGreeting}</p>
        </div>

        <h2 className="text-[1.3rem] font-normal text-gray-700 mb-4">
          Обо мне
        </h2>
        <p className="text-gray-600 leading-relaxed text-[1.05rem] max-w-160 mb-8">
          Создаю простые и понятные веб-приложения. Работаю с React, TypeScript
          и люблю минимализм во всём.
        </p>

        <div className="bg-[#f5f3f3] p-5 rounded-xl mb-5 border border-[#e8e8e8]">
          <h3 className="mb-4 text-gray-700 text-[1.1rem]">
            Представьтесь, пожалуйста:
          </h3>

          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Ваше имя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg"
            />

            <input
              type="text"
              placeholder="Ваша фамилия"
              value={userSurname}
              onChange={(e) => setUserSurname(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-3 flex-wrap mb-8">
          <button
            onClick={() => {
              if (userName.trim() || userSurname.trim()) {
                setShowMessage(!showMessage);
              } else {
                alert("Пожалуйста, введите имя и фамилию!");
              }
            }}
            className="bg-[#1a1a1a] text-white border-none px-6 py-2.5 rounded-full text-[0.95rem] tracking-[0.3px]"
          >
            {showMessage ? "Скрыть" : "Сказать привет"}
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="text-[#1a1a1a] border border-amber-50 px-6 py-2.5 rounded-full text-[0.95rem]"
          >
            Лайк {count}
          </button>
        </div>

        {showMessage && (
          <div className="bg-gray-100 px-5 py-4 rounded-lg mb-8">
            <p style={{ color: "#333", margin: 0 }}>
              Привет, рада познакомиться, {userName} {userSurname}!
            </p>
          </div>
        )}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 mb-8">
          <div className="bg-white px-5 py-4 rounded-lg border border-[#e8e8e8] text-center">
            <span className="text-[20px]">React</span>
            <p className="text-gray-600 mt-1 text-sm">React</p>
          </div>

          <div className="bg-white px-5 py-4 rounded-lg border border-[#e8e8e8] text-center">
            <span className="text-[20px]">UI/UX</span>
            <p className="text-gray-600 mt-1 text-sm">UI/UX</p>
          </div>

          <div className="bg-white px-5 py-4 rounded-lg border border-[#e8e8e8] text-center">
            <span className="text-[20px]">Responsive</span>
            <p className="text-gray-600 mt-1 text-sm">Responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;

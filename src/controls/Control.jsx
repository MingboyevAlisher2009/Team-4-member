import "./controls.css";

function Control() {
  window.onscroll = function () {
    scroll();
  };

  const scroll = () => {
    const control = document.querySelector(".control");
    const controlMenu = document.querySelector(".control-menu");
    if (document.documentElement.scrollTop > 300) {
      control.classList.add("control-box");
      controlMenu.classList.add("control-menu-active");
    } else {
      control.classList.remove("control-box");
    }
  };

  const menu = () => {
    const controlMenu = document.querySelector(".control-setting");
    controlMenu.classList.toggle("hidden");
  }

  const lightMode = () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    document.querySelector(".dark-btn").classList.toggle("hidden");
    document.querySelector(".light-btn").classList.toggle("hidden");
  };

  const darkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    document.querySelector(".dark-btn").classList.toggle("hidden");
    document.querySelector(".light-btn").classList.toggle("hidden");
  };

  return (
    <>
      <div className="control-container bg-white">
        <div className="control" onClick={menu}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-rounded/48/cccccc/settings.png"
            alt="settings"
          />
        </div>
      </div>

      <div className="control-setting hidden">
        <div className="control-menu">
        <button className="light-btn p-1" onClick={lightMode}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/cda274/sun.png"
            alt="sun"
          />
        </button>
        <button className="dark-btn hidden p-1" onClick={darkMode}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/cda274/crescent-moon.png"
            alt="crescent-moon"
          />
        </button>
        </div>
      </div>
    </>
  );
}

export default Control;

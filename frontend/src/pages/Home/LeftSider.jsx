function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* <a href="/facr">
            <i className="ri-facebook-circle-line text-gray-400 text-xl"></i>
          </a> */}
          <a href="mailto:sangammunde3@gmail.com" target="_blank">
            <i className="ri-mail-line text-gray-400 text-xl"></i>
          </a>
          <a href="https://github.com/Sangam5756/" target="_blank">
            <i className="ri-github-fill text-gray-400 text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/sangammundhe/" target="_blank">
            <i className="ri-linkedin-box-line text-gray-400 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;

type HeaderProps = {
  nameApp: string;
};

function Header({ nameApp }: HeaderProps) {
  return (
    <header>
      <nav className="w-full mx-auto bg-white shadow">
        <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
          <div className="h-full mr-10 flex items-center">
            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight lg:block">
              {nameApp}
            </h3>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

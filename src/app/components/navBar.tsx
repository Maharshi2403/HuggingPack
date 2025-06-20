type navContent = {
  ComponentToRender: React.FC;
};

export default function Navbar({ComponentToRender}: navContent) {
  return (
    <>
      <div className="flex flex-row w-full h-30 bg-[#04923a]  ">
        <ComponentToRender/>
      </div>
    </>
  );
}

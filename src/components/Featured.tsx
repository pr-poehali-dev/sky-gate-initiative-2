export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/e1ead6b1-78a8-48f7-acc6-af336c3f4803/files/37b98b89-b915-4256-b50b-1983e91e3e9c.jpg"
          alt="Мужской браслет из натуральных камней"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="collection" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Натуральные камни · Ручная работа</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждое украшение — это история природы. Колье из аметиста и розового кварца, мужские браслеты из лазурита, серьги, которые подчёркивают индивидуальность.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            Колье — аметист, лазурит, розовый кварц
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-blue-700 inline-block"></span>
            Мужские браслеты из натуральных камней
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
            Серьги — аметист, лазурит, розовый кварц
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать украшение
        </button>
      </div>
    </div>
  );
}
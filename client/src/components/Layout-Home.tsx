import ButtonOutline from "./Button-Outline";

export default function Layout() {
    return (
      <section className="pb-12 pt-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="p-2 md:w-1/2 mb-4 md:mb-0">
            <img
              className="w-full md:w-[500px] object-contain"
              src="../../public/isotypeLinx.png"
              alt="Isotype Linx"
            />
          </div>
          <div className="p-2 md:pl-8">
            <h1 className="text-slate-950 text-2xl font-bold mb-4">Linx</h1>
            <p className="pb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              error corrupti vitae incidunt totam blanditiis, voluptatem ratione
              eius consequuntur qui. Quae laborum quasi assumenda ea autem beatae,
              sed corrupti atque!
            </p>
            <ButtonOutline type="button">
                Button
            </ButtonOutline>
          </div>
        </div>
      </section>
    );
  }
  
import { DefaultLayout } from "@/layouts";

function Error() {
  return (
    <DefaultLayout>
      <div className="min-h-[calc(100dvh-72px)] flex flex-col justify-center items-center p-4">
        <h1 className="text-7xl font-bold font-overpass">404</h1>
        <p className="text-xl font-overpass text-gray-300">{"Page not found :("}</p>
      </div>
    </DefaultLayout>
  );
}

export default Error;

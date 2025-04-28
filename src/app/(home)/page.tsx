"use server"

import ErrorPage from "@/components/atoms/ErrorPage";
import LoadingPage from "@/components/atoms/LoadingPage";
import DashboardView from "@/components/organisms/DashboardView";
import { countriesQuery } from "@/utils/graphql/queries/countriesQuery";
import { Suspense } from "react";

export default async function Home() {
  const { data, error } = await countriesQuery();

  if (error) {
    console.log(error)
    return <ErrorPage />
  }

  return (
    <main className="max-w-[1200px] pb-8 px-6 md:px-24 mx-auto">
      <Suspense fallback={<LoadingPage />}>
        <DashboardView countriesArray={data} />
      </Suspense>
    </main>
  );
}

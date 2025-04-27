"use server"

import DashboardView from "@/components/organisms/DashboardView";
import { convertCountryToOption } from "@/utils/convert/convertCountryToOptionType";
import { countriesQuery } from "@/utils/graphql/queries/countriesQuery";

export default async function Home() {
  const { data, error } = await countriesQuery();

  if (error) {
    return null
  }

  const convertedCountries = convertCountryToOption(data);

  return (
    <main className="max-w-[1200px] px-6 md:px-24 mx-auto">
      <DashboardView countriesAsOptionsArray={convertedCountries} />
    </main>
  );
}

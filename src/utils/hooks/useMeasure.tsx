"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MeasureDataWithDisplayText, MeasureType } from "../types/measure";
import { measureQuery } from "../graphql/queries/measureQuery";
import { numberMultiplier } from "../conversions/numberFormatting";
import { findCountryAndMeasure } from "../conversions/findCountryAndMeasure";
import { CountriesType, CountryType } from "../types/country";

type DataState = {
  loading: boolean,
  data: MeasureDataWithDisplayText | null
  error: boolean | null,
  stepRequired: number | null
}

export default function useMeasure(countries: CountriesType) {
  const [dataState, setDataState] = useState<DataState>({
    data: null,
    error: null,
    loading: false,
    stepRequired: null
  });

  const searchParams = useSearchParams();
  const countryId = searchParams.get("country");
  const measureId = searchParams.get("measure");

  const handleSetLoading = (loading: DataState["loading"]) => {
    setDataState((prev) => {
      return { ...prev, loading: loading }
    })
  };

  const handleSetError = (error: DataState["error"]) => {
    setDataState((prev) => {
      return { ...prev, error: error }
    })
  };

  const handleSetStepRequired = (stepRequired: DataState["stepRequired"]) => {
    setDataState((prev) => {
      if (prev.data) {
        return { ...prev, stepRequired: null }
      }
      return { ...prev, stepRequired: stepRequired }
    })
  }

  const handleSetData = (data: DataState["data"]) => {
    // if data, set the stepRequired to null.
    if (data) {
      return setDataState({
        data: data,
        error: null,
        loading: false,
        stepRequired: null
      })
    }

    // if no data, don't modify stepRequired.
    setDataState((prev) => {
      if (prev.data) {
        return {
          ...prev,
          data: data,
          error: null,
        }
      }
      return {
        ...prev,
        data: data,
        error: null,
        loading: false,
      }
    })
  };

  async function setMeasureData(country: CountryType, measure: MeasureType) {
    handleSetLoading(true);

    try {
      const { data, error } = await measureQuery({
        input: {
          country: {
            _eq: country.id,
          },
          measure: {
            _eq: measure.value
          }
        }
      });

      if (error) {
        return handleSetError(true);
      }

      const convertedData = measure.convert
        ? data.map((data) => {
          const newNum = numberMultiplier(data.value, measure.convert!.from, measure.convert!.to);
          return {
            ...data,
            value: newNum
          }
        }) : data


      return handleSetData({
        measureData: convertedData,
        displayText: {
          heading: `${measure.label} in ${country.name}`,
          subheading: measure.subheading
        }
      });
    } catch (e) {
      return handleSetError(true);
    } finally {
      return handleSetLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      if (!countryId && !measureId) {
        handleSetData(null)
      }

      // if the country or measure is not set, setStep to indicate end-user what step is needed to
      // succesfully render data.
      if (!countryId) {
        return handleSetStepRequired(0)
      }
      if (!measureId) {
        return handleSetStepRequired(1)
      }

      const { country, measure } = findCountryAndMeasure(countries, countryId, measureId);

      if (!country || !measure) {
        //TODO: Handle errors better, maybe send to Sentry or something.
        console.error("No country or measure could be found from your inputs.")
        return;
      }

      await setMeasureData(country, measure)
    })()
  }, [countryId, measureId])

  return dataState
}
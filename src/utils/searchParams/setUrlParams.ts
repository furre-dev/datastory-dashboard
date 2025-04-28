import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

export const setUrlParams = (
  paramKey: string,
  paramValue: string,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance) => {
  // Build new params
  const params = new URLSearchParams(searchParams?.toString());
  if (paramValue) {
    params.set(paramKey, paramValue);
  } else {
    params.delete(paramKey);
  }
  router.replace(`?${params.toString()}`);
}
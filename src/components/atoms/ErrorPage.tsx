import MainLink from "./buttons/MainLink";

export default function ErrorPage() {
  return (
    <section className="flex flex-col mt-20 md:mt-24 max-w-[90%]">
      <h4 className="text-ds-dark font-normal md:font-light text-xl max-w-[900px] animate-pulse pointer-events-none
      sm:text-2xl
      md:text-6xl">
        We're currently experiencing issues & the service is down. Please check back a bit later :(
      </h4>
      <MainLink href={"/"}>
        Go back to homepage
      </MainLink>
    </section>
  )
}
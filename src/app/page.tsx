import SiteHeader from "@/components/site-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/site-footer";

export default async function Home() {
  return (
    <main className=" max-w-7xl mx-auto min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <nav className="">
        <SiteHeader />
      </nav>
      <div>
        <section className="w-full py-[5rem]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="mx-3 space-y-2 lg:space-y-3 max-w-md md:max-w-2xl lg:max-w-3xl">
              <h1 className="leading-tight lg::leading-snug font-black text-5xl lg:text-7xl ">
                Welcome to our new SaaS Something
              </h1>
              <p className="leading-normal text-xl text-muted-foreground">
                This is a new SaaS something that will do something.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4 pt-4">
              <Button
                asChild
                variant="default"
                className="mx-3 w-40 text-lg h-12 lg:h-14 lg:rounded-lg lg:text-xl"
              >
                <Link href="/workspace">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="mx-3 w-40 text-lg h-12 lg:h-14 lg:rounded-xl lg:text-xl"
              >
                <Link href="/how-to-get-started">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

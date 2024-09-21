import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShirtIcon, CameraIcon, CalendarIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1350px] px-4">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mb-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Elevate Your Style with{" "}
                <span className="text-primary">Capsulify</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Generate perfect outfit combinations from your wardrobe. Look
                your best every day with our AI-powered outfit generator.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button variant="primary">Get Started</Button>
              </Link>
              <Link href="#">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6 dark:bg-slate-400">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-primary">
            Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg dark:border-gray-700">
              <ShirtIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Outfit Generator</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Get personalized outfit suggestions based on your wardrobe.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg dark:border-gray-700">
              <CameraIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Virtual Try-On</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                See how outfits look on you with our advanced virtual fitting
                room.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg dark:border-gray-700">
              <CalendarIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Outfit Planner</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Plan your outfits for the week or special occasions in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Pricing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
            <div className="flex flex-col p-6 shadow-lg rounded-lg justify-between ">
              <div>
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                  <span className="text-4xl font-bold text-primary">$9.99</span>{" "}
                  / month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Outfit Generator
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Wardrobe Management
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Basic Outfit Planner
                  </li>
                </ul>
              </div>
              <Button className="mt-6 bg-primary text-white">
                Get Started
              </Button>
            </div>
            <div className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-primtext-primary justify-between border border-primtext-primary dark:border-primtext-primary">
              <div>
                <h3 className="text-2xl font-bold text-center">Premium</h3>
                <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
                  <span className="text-4xl font-bold text-primary">
                    $19.99+
                  </span>{" "}
                  / month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    All Basic Features
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Virtual Try-On
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Advanced Outfit Planner
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    Style Recommendations
                  </li>
                </ul>
              </div>
              <Button className="mt-6 bg-primary text-white">
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Outfit Generator. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </main>
  );
}

import Link from "next/link";
import { SaaS_NAME } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-background ">
      <div className="py-2 md:py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 {SaaS_NAME}. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact-us"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

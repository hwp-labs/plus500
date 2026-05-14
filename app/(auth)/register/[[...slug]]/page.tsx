import Link from "next/link";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import { OAuthButtons } from "@/components/species/auth/components/oauth-buttons";
import { PageParams } from "@/types/next-type";
import { PATH } from "@/constants/PATH";
// 
import { RegisterForm } from "@/components/species/auth/components/register-form";

export default async function RegisterPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  //
  return (
    <>
      <AuthContainer>
        <RegisterForm demoQueryParam={searchParamsAsync.demo} />
        <div className="flex-ce">
          <Link href={PATH.login} className="link">
            Already have an account?
          </Link>
        </div>
        <OAuthButtons>or create an account with</OAuthButtons>
      </AuthContainer>
      <footer className="flex-cc mt-20 px-4">
        <div className="text-ash4 _max-w-lg text-center text-xs">
          This site is protected by reCAPTCHA and by Google's{" "}
          <a href="#" className="link">
            Privacy Policy
          </a>{" "}
          and
          <a href="#" className="link">
            Terms of Service
          </a>{" "}
          <br />
          <address className="mt-4">
            Plus500 is a trademark of Plus500 Ltd.
          </address>
        </div>
      </footer>
    </>
  );
}

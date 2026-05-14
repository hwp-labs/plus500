import Link from "next/link";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import { Checkbox } from "@/components/species/auth/components/input-builder";
import { OAuthButtons } from "@/components/species/auth/components/oauth-buttons";
import { PageParams } from "@/types/next-type";
import { PATH } from "@/constants/PATH";
// 
import { LoginForm } from "@/components/species/auth/components/login-form";

export default async function LoginPage({ searchParams }: PageParams) {
  const searchParamsAsync = await searchParams;
  //
  return (
    <>
      <AuthContainer>
        <LoginForm logoutQueryParam={searchParamsAsync.logout} />
        <Link href={PATH.forgotPassword} className="link">
          Forgot password?
        </Link>
        <div className="mt-5 mb-5 lg:mb-10">
          <OAuthButtons>or log in with</OAuthButtons>
        </div>
        <div className="mt-8 mb-4">
          <Checkbox checked>Keep me logged in</Checkbox>
        </div>
      </AuthContainer>
      <footer className="flex-cc mt-5 pb-10">
        <Link href={PATH.register} className="link">
          Don't have an account? Create one now!
        </Link>
      </footer>
    </>
  );
}

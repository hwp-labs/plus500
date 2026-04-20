import Link from "next/link";
//
import { Header } from "@/components/species/auth/components/header";
import { Alert } from "@/components/species/auth/components/alert";
import {
  Email,
  Password,
  Checkbox,
  SubmitButton,
} from "@/components/species/auth/components/form-builder";
import { OAuthButtons } from "@/components/species/auth/components/oauth-buttons";
import { LiveSupportWidget } from "@/components/species/auth/components/live-support-widget";
import { PATH } from "@/constants/PATH";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="border-ash3 mx-auto mt-8 max-w-xl border">
        <div className="space-y-4 p-10">
          <Alert>Incorrect credentials. Retry or create an account.</Alert>
          {/* <Alert>
            Registration failed. We're sorry but we currently cannot accept
            traders from your country.
          </Alert> */}
          <Email />
          <Password />
          <SubmitButton>
            Log in
            {/* Create Demo Account */}
          </SubmitButton>
          <Link href={PATH.forgotPassword} className="link">
            Forgot password?
          </Link>
          <OAuthButtons>or log in with</OAuthButtons>
          <Checkbox>Keep me logged in</Checkbox>
        </div>
        <LiveSupportWidget />
      </main>
      <footer className="flex-cc mt-5">
        <Link href={PATH.register} className="link">
          Don't have an account? Create one now!
        </Link>
      </footer>
    </>
  );
}

import Link from "next/link";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import { Alert } from "@/components/species/auth/components/alert";
import {
  Email,
  Password,
  Checkbox,
} from "@/components/species/auth/components/form-builder";
import { SubmitButton } from "@/components/species/auth/components/submit-button";
import { OAuthButtons } from "@/components/species/auth/components/oauth-buttons";
import { PATH } from "@/constants/PATH";

export default function LoginPage() {
  return (
    <>
      <AuthContainer>
        <Alert>Incorrect credentials. Retry or create an account.</Alert>
        <div className="space-y-2">
          <Email />
          <Password />
        </div>
        <SubmitButton>Log in</SubmitButton>
        <Link href={PATH.forgotPassword} className="link">
          Forgot password?
        </Link>
        <div className="mt-5 mb-5 lg:mb-10">
          <OAuthButtons>or log in with</OAuthButtons>
        </div>
        <div className="mt-8 mb-4">
          <Checkbox>Keep me logged in</Checkbox>
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

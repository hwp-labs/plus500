import Link from "next/link";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import { Alert } from "@/components/species/auth/components/alert";
import {
  Email,
  Password,
  SubmitButton,
} from "@/components/species/auth/components/form-builder";
import { OAuthButtons } from "@/components/species/auth/components/oauth-buttons";
import { PATH } from "@/constants/PATH";

export default function RegisterPage() {
  return (
    <>
      <AuthContainer>
        <Alert>
          Registration failed. We're sorry but we currently cannot accept
          traders from your country.
        </Alert>
        <div className="space-y-2">
          <Email />
          <Password />
        </div>
        <SubmitButton>Create Demo Account</SubmitButton>
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

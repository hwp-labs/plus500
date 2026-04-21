import Link from "next/link";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import { Alert } from "@/components/species/auth/components/alert";
import {
  Email,
  SubmitButton,
} from "@/components/species/auth/components/form-builder";
import { PATH } from "@/constants/PATH";

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthContainer
        h1="Forgot your password?"
        p="We can send you an email to help you get back into your account."
      >
        <Alert variant="success">
          A password reset email was just sent to you. The reset link will
          expire after 24 hours. Should you require further assistance, please
          contact our support team via our contact page:
          https://www.plus500.com/en-ng/support/contactus
        </Alert>
        <Email />
        <SubmitButton>Send Email</SubmitButton>
        <div className="flex-cc">
          <Link href={PATH.login} className="link">
            Cancel 
            {/* change to "Log in" onSubmitted */}
          </Link>
        </div>
      </AuthContainer>
    </>
  );
}

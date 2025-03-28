import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
title="MedConnect | Secure Sign-In Portal"
description="Access the MedConnect Sign-In Dashboard to securely log in to your medical management system. Ensure seamless authentication for healthcare professionals and patients."

      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
